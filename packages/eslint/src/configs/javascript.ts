import globals from 'globals'
import js from '@eslint/js'
import type { Linter } from 'eslint'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unusedImports from 'eslint-plugin-unused-imports'

export default function javascript(): Linter.Config[] {
  return [
    {
      plugins: {
        'simple-import-sort': simpleImportSort,
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
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              [
                // 副作用导入
                '^\\u0000',
                // node 内置导入
                '^node:',
                // Packages. `react` related packages come first.
                '^react',
                '^@react',
                '^vue',
                '^@vue',
                '^@?\\w',
                // Internal packages.
                '^@/',
                // 父级导入，'..' 放在最后
                '^\\.\\.(?!/?$)',
                '^\\.\\./?$',
                // 其他相对路径的导入，'.' 放在最后
                '^\\./(?=.*/)(?!/?$)',
                '^\\.(?!/?$)',
                '^\\./?$',
              ],
              [
                // 样式导入
                '^\\.(scss|less|css|wxss)$',
              ],
            ],
          },
        ],
        'simple-import-sort/exports': 'error',

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
