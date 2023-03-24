import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/practic-vue3-front/",
  resolve:{
    alias: [{
      /** @ 符号指向 src 目录 */
      find: '@',
      replacement: path.resolve(__dirname, 'src')
    },
      {
        find: /^@antv\/g6/,
        replacement: path.resolve(
            __dirname,
            './node_modules/@antv/g6/dist/g6.min.js',
        ),
      },
    ]
  },
  server: {
    /** 是否开启 HTTPS */
    https: false,
    /** 设置 host: true 才可以使用 Network 的形式，以 IP 访问项目 */
    host: true, // host: "0.0.0.0"
    /** 端口号 */
    port: 3333,
    /** 是否自动打开浏览器 */
    open: false,
    /** 跨域设置允许 */
    cors: true,
    proxy: {
      "/api": { // “/api” 以及前置字符串会被替换为真正域名
        target: "https://localhost:8095/", // 请求域名
        secure: false, // 请求是否为https
        changeOrigin: true, // 是否跨域
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    },
    /** 端口被占用时，是否直接退出 */
    strictPort: false
  },
  build: {
    /** 消除打包大小超过 500kb 警告 */
    chunkSizeWarningLimit: 5000,
    sourcemap: true,
  },
  plugins: [
    vue(),
    //配置组件自动加载
    Components({
      dts: true,
      //配置去哪个目录下寻找组件
      dirs: ["src/components", "src/views"],
      resolvers: [
        // 使用 ElementPlus 自动引入解析器
        ElementPlusResolver()
      ]
    })
  ],

})
