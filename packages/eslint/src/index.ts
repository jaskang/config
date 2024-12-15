import js from '@eslint/js'
import globals from 'globals'
import gitignore from 'eslint-config-flat-gitignore'
import tseslint, { type ConfigWithExtends } from 'typescript-eslint'

import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import vue from './configs/vue'
import perfectionist from './configs/perfectionist'
import { GLOB_EXCLUDE } from './globs'
import prettier from 'eslint-plugin-prettier/recommended'

export type Options = {
  react?: boolean
  vue?: boolean
}

export function config(options: Options = {}, ...userConfigs: ConfigWithExtends[]) {
  const { vue: vueOptions, react: reactOptions } = options
  const configs: ConfigWithExtends[] = [
    gitignore(),
    {
      ignores: GLOB_EXCLUDE,
    },
    {
      extends: [js.configs.recommended, ...tseslint.configs.recommended],
      files: ['**/*.{ts,tsx}'],
      languageOptions: {
        ecmaVersion: 2022,
        globals: {
          ...globals.browser,
          ...globals.es2021,
          ...globals.node,
          document: 'readonly',
          navigator: 'readonly',
          window: 'readonly',
        },
      },
    },
  ]
  if (vueOptions) {
    configs.push(vue())
  } else if (reactOptions) {
    configs.push({
      plugins: {
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh,
      },
      rules: {
        ...reactHooks.configs.recommended.rules,
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      },
    })
  }
  configs.push(perfectionist(), prettier, ...userConfigs)
  return tseslint.config(configs)
}

export default config
