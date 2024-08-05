import type { Linter } from 'eslint'
import { GLOB_EXCLUDE } from '../globs'
import type { ConfigWithExtends } from 'typescript-eslint'

export default function ignores(): ConfigWithExtends[] {
  return [
    {
      // Awaits https://github.com/humanwhocodes/config-array/pull/131
      // name: 'antfu/ignores',
      ignores: GLOB_EXCLUDE,
    },
  ]
}
