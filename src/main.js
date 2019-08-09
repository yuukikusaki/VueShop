// 入口文件
import Vue from 'vue'
import App from './App.vue'
// 导入 路由包
import VueRouter from 'vue-router'
// 安装路由
Vue.use(VueRouter)
// 注册 vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// 每次进入网站，先从本地读取购物车数据
var car = JSON.parse(localStorage.getItem('car') || '[]')

const store = new Vuex.Store({
  // ...
  state: { // this.$store.state.***
    car: car  // 购物车数据
  },
  mutations: { // this.$store.commit('方法名称','按需传入唯一的参数')
    addToCar(state, goodsinfo) {
      // 1. 已有的情况下 更新数量
      // 2. 没有则直接 push
      var flag = false;

      // 已有则加上
      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.count += parseInt(goodsinfo.count);
          flag = true;
          return true;
        }
      })

      // 没有则加入
      if (!flag) {
        state.car.push(goodsinfo);
      }

      // 更新 car 之后，把数据 存储到本地的 localstorage 中
      localStorage.setItem('car', JSON.stringify(state.car));
    },
    updateGoodsInfo(state, goodsinfo) {
      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.count = parseInt(goodsinfo.count);
          return true;
        }
      })
      // 修改完 购物车数量 以后 保存到本地
      localStorage.setItem('car', JSON.stringify(state.car));
    },
    removeFormCar(state, id) {
      state.car.some((item, i) => {
        if (item.id == id) {
          state.car.splice(i, 1);
          return true;
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car));
    },
    updatGoodsSelected(state, info) {
      state.car.forEach(item => {
        if (item.id == info.id) {
          item.selected = info.selected;
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car));
    }
  },
  getters: { // this.$store.getters.***
    getAllCount(state) {
      var c = 0;
      state.car.forEach(item => {
        c += item.count;
      })
      return c;
    },
    getGoodsCount(state) {
      var o = {};
      state.car.forEach(item => {
        o[item.id] = item.count;
      })
      return o;
    },
    getGoodsSelected(state) {
      var o = {};
      state.car.forEach(item => {
        o[item.id] = item.selected;
      })
      return o;
    },
    getGoodsCountAndAmount(state) {
      var o = {
        count: 0,
        amount: 0
      };
      state.car.forEach(item =>{
        if(item.selected){
          o.count += item.count;
          o.amount += item.price * item.count;
        }
      })
      return o;
    }
  }
})

// 导入 格式化时间 插件
import moment from 'moment'
// 定义 全局过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
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
  store,
  render: h => h(App),
}).$mount('#app')
