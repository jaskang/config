import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  clean: true,
  dts: true,
  format: ['es'],
  cjsDefault: false,
  // target: 'node22',
  tsconfig: 'tsconfig.json',
  outExtensions: ctx => {
    return {
      js: ctx.format === 'cjs' ? '.cjs' : '.js',
      dts: ctx.format === 'cjs' ? '.d.cts' : '.d.ts',
    }
  },
  // target: 'node18',
  // experimentalDts: true,
})
