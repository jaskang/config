import type { Linter } from 'eslint'
import { GLOB_EXCLUDE } from '../globs'

export default function ignores(): Linter.Config[] {
  return [
    {
      // Awaits https://github.com/humanwhocodes/config-array/pull/131
      // name: 'antfu/ignores',
      ignores: GLOB_EXCLUDE,
    },
  ]
}
