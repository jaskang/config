import globals from 'globals'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import type { ConfigWithExtends } from 'typescript-eslint'
import { GLOB_SRC } from '../globs'

export default function javascript(): ConfigWithExtends[] {
  return [
    {
      files: [GLOB_SRC],
      extends: [js.configs.recommended, tseslint.configs.recommended],
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
      rules: {
        'no-duplicate-imports': 'error',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-empty-object-type': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            args: 'none',
            // args: 'all',
            // argsIgnorePattern: '^_',
            caughtErrors: 'all',
            caughtErrorsIgnorePattern: '^_',
            destructuredArrayIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            ignoreRestSiblings: true,
          },
        ],
      },
    },
  ]
}
