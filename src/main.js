// 入口文件
import Vue from 'vue'
import App from './App.vue'
import router from './router'


// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'

// 引入 mint-ui 组件
import { Header } from 'mint-ui';
Vue.component(Header.name,Header)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
