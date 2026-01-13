import { defineConfig } from 'eslint/config'
import plugin from 'eslint-plugin-perfectionist'

export const perfectionist = defineConfig({
  plugins: {
    perfectionist: plugin,
  },
  rules: {
    'perfectionist/sort-named-exports': ['error', { type: 'natural', order: 'asc' }],
    'perfectionist/sort-named-imports': ['error', { type: 'natural', order: 'asc' }],
    'perfectionist/sort-imports': [
      'error',
      {
        groups: [
          ['builtin'],
          ['vue', 'react', 'external'],
          'internal',
          ['parent', 'sibling', 'index'],
          'style',
          // 'side-effect',
          // 'side-effect-style',
          'unknown',
        ],
        customGroups: [
          {
            groupName: 'react',
            elementNamePattern: ['^react$', '^react-.+'],
          },
          {
            groupName: 'vue',
            elementNamePattern: ['^vue$', '^vue-.+'],
          },
        ],
        internalPattern: ['^@/.+', '^#/.+', '^~/.+'],
        type: 'natural',
        order: 'asc',
        newlinesBetween: 'ignore',
        sortSideEffects: false,
      },
    ],
  },
})
