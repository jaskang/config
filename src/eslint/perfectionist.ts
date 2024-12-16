import { type ConfigWithExtends } from 'typescript-eslint'
import plugin from 'eslint-plugin-perfectionist'

export default function perfectionist(): ConfigWithExtends {
  return {
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
            'type',
            ['internal-type', 'parent-type', 'sibling-type', 'index-type'],

            'builtin',
            'vue',
            'react',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'style',
            'object',
            // 'side-effect',
            // 'side-effect-style',
            'unknown',
          ],
          customGroups: {
            value: { react: ['react', 'react-*'], vue: ['vue', 'vue-*'] },
            type: { react: ['react', 'react-*'], vue: ['vue', 'vue-*'] },
          },
          internalPattern: ['@/**', '#/**', '~/**'],
          type: 'natural',
          order: 'asc',
          newlinesBetween: 'ignore',
          sortSideEffects: false,
        },
      ],
    },
  }
}
