import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "element-plus/theme-chalk/dark/css-vars.css"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"
import router from "./router/index"

const app = createApp(App)

app.use(ElementPlus)
app.use(router)

app.mount('#app')
