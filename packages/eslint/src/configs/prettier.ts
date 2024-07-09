import type { ConfigWithExtends } from 'typescript-eslint'
import prettierRecommended from 'eslint-plugin-prettier/recommended'

export default function prettier(): ConfigWithExtends[] {
  return [prettierRecommended]
}
