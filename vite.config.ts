import { ConfigEnv, loadEnv } from 'vite'
// import vue from '@vitejs/plugin-vue'
import alias from './vite/alias'
import { parseEnv } from './vite/utils'
import { setupVitePlugins } from './vite/plugins'

// command 是表示 对应的 是否运行的状态 mode 是判断是开发阶段还是线上使用阶段
export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command == 'build'
  const root = process.cwd() // 获取当前项目目录地址

  const env = parseEnv(loadEnv(mode, root)) // 拿到.env配置文件的配置项

  return {
    plugins: setupVitePlugins(isBuild, env),
    resolve: {
      alias: alias
    }
  }
}
