#### webpack + vue 练习

### github 提交步骤
 1. git init
 2. git add .
 3. git commit -m "提交信息"
 4. git remote add origin github地址
 5. git push -u origin master
 6. 上一步 失败 git pull --rebase origin master 再重复 5

 ## 再次提交重复 235

## 制作首页 App 组件
 1. Header 区域，使用的是 Mint-UI 中的 Header组件
 2. 底部 Tabber 区域，使用的是 MUI 的 Tabber.html
  +制作 购物车图标，拷贝 css 和 ttf 到文件中
 3. 要在 中间区域 放置一个 router-view

## 改造 tabber 为 router-link

## 设置路由高亮

## 点击 tabber 中的路由连接，展示对应组件

## 制作首页轮播图布局

## 加载首页轮播图数据
 1. 使用 vue-resource 获取数据
 2. 使用 vue-resource 的 this.$http.get 获取数据
 3. 获取到的数据 放到 data 上
 4. 使用 v-for 循环

## 改造 九宫格 区域样式

## 改造 新闻资讯 路由链接

## 新闻资讯 页面 制作
 1. 绘制界面， 使用 MUi 中的 media-list.html
 2. 使用 vue-resource 获取数据
 3. 渲染真实数据

## 实现 新闻资讯列表 点击跳转到详情
 1. 把列表中每一项改成 router-link ,跳转时提供唯一的Id标识符
 2. 创建详情组件页面 NewsInfo.vue
 3. 在 路由模块 中，把组件对应起来

## 实现 新闻详情 的 页面布局 和数据渲染

## 单独封装一个 comment 子组件
 1. 先单独创建一个 comment.vue
 2. 在需要使用 comment 组件的页面中， 先手动导入 comment 组件
  + `import comment from './comment.vue'`
 3. 在父组件中， 使用 `compoents` 属性，将 comment 注册为自己的 子组件
 4. 将 子组件 的注册名称， 以 标签形式 在页面中引用

## 获取所有的 评论数据 到 comment 中

## 实现点击加载更多评论的功能
 1. 为加载按钮绑定事件，在事件中 请求下一页数据
 2. 点击按钮 pageIndex++ ，然后 重新调用 getComments() 获取最新数据
 3. 为了防止 新数据 覆盖 老数据，调用 concat 方法 拼接数据