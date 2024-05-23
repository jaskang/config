import tslint, { type ConfigWithExtends } from 'typescript-eslint'
import plugin from 'eslint-plugin-perfectionist'

export default function perfectionist(): ConfigWithExtends[] {
  return [
    {
      plugins: [plugin] as any,
      rules: {
        'perfectionist/sort-named-exports': ['error', { type: 'natural', order: 'asc' }],
        'perfectionist/sort-named-imports': ['error', { type: 'natural', order: 'asc' }],
        'perfectionist/sort-imports': [
          'error',
          {
            type: 'natural',
            order: 'asc',
            groups: [
              'type',
              'vue',
              'react',
              ['builtin', 'external'],
              'internal-type',
              'internal',
              ['parent-type', 'sibling-type', 'index-type'],
              ['parent', 'sibling', 'index'],
              'style',
              'object',
              'side-effect',
              'side-effect-style',
              'unknown',
            ],
            'custom-groups': {
              value: { react: ['react', 'react-*'], vue: ['vue', 'vue-*'] },
              type: { react: 'react', vue: 'vue' },
            },
            'internal-pattern': ['@/**', '#/**'],
          },
        ],
      },
    },
  ]
}
