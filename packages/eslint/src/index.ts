import gitignore, { type FlatConfigItem } from 'eslint-config-flat-gitignore'
import tseslint, { type ConfigWithExtends } from 'typescript-eslint'
import type { Linter } from 'eslint'
import ignores from './configs/ignores'
import javascript from './configs/javascript'
import typescript from './configs/typescript'
import react from './configs/react'
import vue from './configs/vue'
import prettier from './configs/prettier'

export type Options = {
  react?: boolean
  vue?: boolean
  typescript?: boolean
}

export function config(options: Options = {}, ...userConfigs: Linter.Config[]) {
  const { vue: vueOptions = true, typescript: tsOptions = true, react: reactOptions } = options
  const configs: Linter.Config[] = [gitignore(), ...ignores(), ...javascript()]
  if (tsOptions) {
    configs.push(...typescript())
  }
  if (vueOptions) {
    configs.push(...vue({ typescript: !!tsOptions }))
  }
  if (reactOptions) {
    configs.push(...react())
  }
  configs.push(...userConfigs, ...prettier())
  return tseslint.config(...(configs as ConfigWithExtends[])) as Linter.Config[]
}

export default config
