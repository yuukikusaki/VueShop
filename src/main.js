// 入口文件
import Vue from 'vue'
import App from './App.vue'
// 导入 路由包
import VueRouter from 'vue-router'
// 安装路由
Vue.use(VueRouter)

// 导入 格式化时间 插件
import moment from 'moment'
// 定义 全局过滤器
Vue.filter('dateFormat',function(dataStr,pattern = "YYYY-MM-DD HH:mm:ss"){
  return moment(dataStr).format(pattern);
})

// 导入 vue-resource
import VueResource from 'vue-resource'
// 安装 vue-resource
Vue.use(VueResource)
// 设置请求的 根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005'
// 全局设置 post 时的表单数据格式组织形式
Vue.http.options.emulateJSON = true;

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 引入 mint-ui 组件
// import { Header,Swipe, SwipeItem,Button,Lazyload } from 'mint-ui';
// Vue.component(Header.name,Header),
// Vue.component(Swipe.name,Swipe),
// Vue.component(SwipeItem.name,SwipeItem),
// Vue.component(Button.name,Button),
// Vue.use(Lazyload);

import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

// 安装 图片预览 插件
import VuePreview from 'vue-preview'
// defalut install
Vue.use(VuePreview)

// 导入 router.js
import router from './router.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
