import gitignore from 'eslint-config-flat-gitignore'
import { type ConfigWithExtends, type FlatConfig } from 'typescript-eslint'

import { vue } from './vue'
import { perfectionist } from './perfectionist'
import { GLOB_EXCLUDE } from '../globs'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import { javascript } from './javascript'
import { imports } from './imports'
import type { Config } from 'eslint/config'

export function eslint(
  options: {
    react?: boolean
    vue?: boolean
    perfectionist?: boolean
    prettier?: boolean
  } = {},
  ...userConfigs: Config[]
) {
  const configs: Config[] = [gitignore(), { ignores: GLOB_EXCLUDE }, ...javascript, imports]
  if (options.vue) {
    configs.push(...vue)
  }
  if (options.perfectionist) {
    configs.push(...perfectionist)
  }
  if (options.prettier) {
    configs.push(prettierRecommended)
  }
  configs.push(...userConfigs)
  return configs
}
