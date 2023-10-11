

import { createApp } from 'vue'
import App from './App.vue'
// 导入elementplus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(ElementPlus) //使用elementplus插件
.mount('#app')
