import prettierRecommended from 'eslint-plugin-prettier/recommended'
import type { ConfigWithExtends } from 'typescript-eslint'

export default function prettier(): ConfigWithExtends[] {
  return [prettierRecommended] as ConfigWithExtends[]
}
