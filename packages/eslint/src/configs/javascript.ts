import globals from 'globals'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import type { ConfigWithExtends } from 'typescript-eslint'

export default function javascript(): ConfigWithExtends[] {
  return [
    {
      plugins: {},
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
      rules: {
        ...js.configs.recommended.rules,
        'no-duplicate-imports': 'error',
        'no-unused-vars': [
          'error',
          {
            args: 'none',
            varsIgnorePattern: '^_',
            caughtErrors: 'all',
            caughtErrorsIgnorePattern: '^_',
            destructuredArrayIgnorePattern: '^_',
            ignoreRestSiblings: true,
          },
        ],
      },
    },
  ]
}
