import { resolve } from 'path'
import { AliasOptions } from 'vite'

const alias = { '@': resolve(__dirname, '../src') } as AliasOptions

export default alias
