import gitignore from 'eslint-config-flat-gitignore'
import tseslint, { type ConfigWithExtends } from 'typescript-eslint'
import type { Linter } from 'eslint'

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
  } = {},
  ...userConfigs: ConfigWithExtends[]
) {
  const { vue: vueOptions, react: reactOptions } = options
  const configs: ConfigWithExtends[] = [gitignore(), { ignores: GLOB_EXCLUDE }, ...javascript(), ...imports()]
  if (vueOptions) {
    configs.push(...vue())
  } else if (reactOptions) {
    configs.push(...react())
  }
  configs.push(...perfectionist(), prettierRecommended, ...userConfigs)
  return tseslint.config(configs) as Linter.Config
}
