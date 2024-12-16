import type { ESLint, Linter } from 'eslint'
import { GLOB_SRC } from '../globs'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import type { ConfigWithExtends } from 'typescript-eslint'

export default function react(): ConfigWithExtends {
  return {
    files: [GLOB_SRC],
    settings: { react: { version: '19.0' } },
    plugins: {
      react: reactPlugin as ESLint.Plugin,
      'react-hooks': reactHooks as ESLint.Plugin,
      'react-refresh': reactRefresh,
    },
    languageOptions: {
      parserOptions: reactPlugin.configs['jsx-runtime'].parserOptions,
    },
    rules: {
      ...(reactHooks.configs.recommended.rules as Linter.RulesRecord),
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      ...(reactPlugin.configs.recommended.rules as Linter.RulesRecord),
      ...(reactPlugin.configs['jsx-runtime'].rules as Linter.RulesRecord),
    },
  }
}
