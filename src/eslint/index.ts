import gitignore from 'eslint-config-flat-gitignore'
import tseslint, { type ConfigWithExtends, type FlatConfig } from 'typescript-eslint'
import { type Linter } from 'eslint'

import vue from './vue'
import react from './react'
import perfectionist from './perfectionist'
import { GLOB_EXCLUDE } from '../globs'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import javascript from './javascript'
import imports from './imports'

export function eslint(
  options: {
    react?: boolean
    vue?: boolean
    perfectionist?: boolean
    prettier?: boolean
  } = {},
  ...userConfigs: ConfigWithExtends[]
) {
  const configs: ConfigWithExtends[] = [gitignore(), { ignores: GLOB_EXCLUDE }, ...javascript(), ...imports()]
  if (options.vue) {
    configs.push(...vue())
  } else if (options.react) {
    configs.push(...react())
  }
  if (options.perfectionist) {
    configs.push(perfectionist())
  }
  if (options.prettier) {
    configs.push(prettierRecommended)
  }
  configs.push(...userConfigs)
  return configs
}
