import type { Linter } from 'eslint'
import prettierRecommended from 'eslint-plugin-prettier/recommended'

export default function prettier(): Linter.Config[] {
  return [prettierRecommended]
}
