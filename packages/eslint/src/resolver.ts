import { createRequire } from 'node:module'
import { cwd } from 'node:process'
import { dirname } from 'node:path'
import { isBuiltin } from 'node:module'
import { ResolverFactory, type NapiResolveOptions } from 'oxc-resolver'

// @keep-sorted
/**
 * some default options copy from
 * https://github.com/import-js/eslint-import-resolver-typescript/blob/master/src/index.ts
 * https://github.com/rolldown/rolldown/blob/main/crates/rolldown_resolver/src/resolver.rs
 */
const defaultOptions: NapiResolveOptions = {
  aliasFields: [['browser']],
  conditionNames: [
    'default',
    'types',

    'import',
    'require',

    'node',
    'node-addons',
    'browser',

    // APF: https://angular.io/guide/angular-package-format
    'esm2020',
    'es2020',
    'es2015',
  ],
  extensionAlias: {
    '.js': [
      '.ts',
      // `.tsx` can also be compiled as `.js`
      '.tsx',
      '.d.ts',
      '.js',
    ],
    '.jsx': ['.tsx', '.d.ts', '.jsx'],
    '.cjs': ['.cts', '.d.cts', '.cjs'],
    '.mjs': ['.mts', '.d.mts', '.mjs'],
  },
  extensions: ['.ts', '.tsx', '.d.ts', '.js', '.jsx', '.json', '.node'],
  mainFields: [
    'types',
    'typings',

    // APF: https://angular.io/guide/angular-package-format
    'fesm2020',
    'fesm2015',
    'esm2020',
    'es2020',

    'main',
    'module',
    'browser',
    'jsnext:main',
  ],
  roots: [cwd()],
}

function normalizeOptions(options: NapiResolveOptions | null = {}): NapiResolveOptions {
  if (!options?.tsconfig) {
    const configFile = createRequire(cwd()).resolve('./tsconfig.json', { paths: [cwd()] })
    if (configFile) {
      defaultOptions.tsconfig = { configFile, references: 'auto' }
    }
  }
  return {
    ...defaultOptions,
    ...options,
  }
}

let resolver: ResolverFactory | undefined
export function resolve(
  source: string,
  file: string,
  options: NapiResolveOptions | null = {}
): { found: boolean; path: string | null | undefined } {
  if (isBuiltin(source)) return { found: true, path: null }

  if (!resolver) {
    options = normalizeOptions(options)
    resolver = new ResolverFactory(options)
  }

  // https://github.com/oxc-project/oxc-resolver/blob/main/npm/README.md#api
  const result = resolver.sync(dirname(file), source)

  return {
    found: !!result.path,
    path: result.path,
  }
}

export const interfaceVersion = 2
