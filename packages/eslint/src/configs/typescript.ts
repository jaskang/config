import type { Linter } from 'eslint'
import tslint from 'typescript-eslint'

export default function typescript(): Linter.Config[] {
  return [
    ...(tslint.configs.recommended as any[]),
    {
      rules: {
        // unused-imports 需要关闭 @typescript-eslint/no-unused-vars
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-empty-object-type': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
      },
    },
  ]
}
