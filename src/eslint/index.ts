import js from '@eslint/js'
import globals from 'globals'
import gitignore from 'eslint-config-flat-gitignore'
import tseslint, { type ConfigWithExtends } from 'typescript-eslint'
import type { Linter, ESLint } from 'eslint'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import vue from './vue'
import perfectionist from './perfectionist'
import { GLOB_EXCLUDE, GLOB_SRC } from '../globs'
import prettierRecommended from 'eslint-plugin-prettier/recommended'

export function eslint(
  options: {
    react?: boolean
    vue?: boolean
  } = {},
  ...userConfigs: ConfigWithExtends[]
) {
  const { vue: vueOptions, react: reactOptions } = options
  const configs: ConfigWithExtends[] = [
    gitignore(),
    { ignores: GLOB_EXCLUDE },
    {
      extends: [js.configs.recommended, ...tseslint.configs.recommended],
      files: [GLOB_SRC],
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
      files: [GLOB_SRC],
      settings: { react: { version: '19.0' } },
      plugins: {
        react: react as ESLint.Plugin,
        'react-hooks': reactHooks as ESLint.Plugin,
        'react-refresh': reactRefresh,
      },
      languageOptions: {
        parserOptions: react.configs['jsx-runtime'].parserOptions,
      },
      rules: {
        ...(reactHooks.configs.recommended.rules as Linter.RulesRecord),
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        ...(react.configs.recommended.rules as Linter.RulesRecord),
        ...(react.configs['jsx-runtime'].rules as Linter.RulesRecord),
      },
    })
  }
  configs.push(perfectionist(), prettierRecommended, ...userConfigs)
  return tseslint.config(configs) as Linter.Config
}
