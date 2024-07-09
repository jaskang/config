import tslint, { type ConfigWithExtends } from 'typescript-eslint'

export default function typescript(): ConfigWithExtends[] {
  return [
    ...tslint.configs.recommended,
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
