// 入口文件
import Vue from 'vue'
import App from './App.vue'
// 导入 路由包
import VueRouter from 'vue-router'
// 安装路由
Vue.use(VueRouter)

// 导入 vue-resource
import VueResource from 'vue-resource'
// 安装 vue-resource
Vue.use(VueResource)

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 引入 mint-ui 组件
import { Header,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name,Header),
Vue.component(Swipe.name,Swipe),
Vue.component(SwipeItem.name,SwipeItem)

// 导入 router.js
import router from './router.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
