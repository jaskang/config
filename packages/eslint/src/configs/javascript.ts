import globals from 'globals'
import js from '@eslint/js'
import { type ConfigWithExtends } from 'typescript-eslint'

export default function javascript(): ConfigWithExtends[] {
  return [
    {
      ...js.configs.recommended,
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
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          ecmaVersion: 2022,
          sourceType: 'module',
        },
        sourceType: 'module',
      },
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
    },
  ]
}
