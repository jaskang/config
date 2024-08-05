import globals from 'globals'
import js from '@eslint/js'
import unusedImports from 'eslint-plugin-unused-imports'
import type { ConfigWithExtends } from 'typescript-eslint'

export default function javascript(): ConfigWithExtends[] {
  return [
    {
      plugins: {
        'unused-imports': unusedImports,
      },
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
        // unused-imports 需要关闭 no-unused-vars
        'no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'error',
          {
            args: 'none',
            caughtErrors: 'all',
            caughtErrorsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            ignoreRestSiblings: true,
          },
        ],
      },
    },
  ]
}
