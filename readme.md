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

## 发表评论
 1. 文本框做双向数据绑定
 2. 发送按钮绑定事件
 3. 校验文本是否为空
 4. 用 vue-resource 发送请求到服务器
 5. 发表评论成功后，用 unshift 方法 在数组中插入数据，并刷新列表

## 改造 图片分享按钮 为 路由连接

## 绘制图片列表
 1. 制作 顶部滑动条
 2. 制作 底部的图片列表
### 顶部滑动条
 1. 使用 MUI 中的 tab-top-webview-main.html
 2. 去掉 slider 区域中的 mui-fullscreen 类
 2. 滑动条无法滑动 是JS组件 需要初始化
  + 导入 mui.js
  + 调用官方方法 去初始化：
  ```
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  ```
 4. 初始化 滑动条 时报错 `Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode`
  + 可能是 mui.js 中用到了 'caller', 'callee', and 'arguments' ，但严格模式无法使用
  + 解决方案：1. 把上述三个去掉 2.禁用打包时的严格模式
  + 移除严格模式 使用插件
  $ npm install babel-plugin-transform-remove-strict-mod
 5. 刚进入 图片分享页面的时候， 需要等 DOM 加载完毕，所以把代码放入了 mounted 函数 
 6. 把 tabber 按钮的 mui-tab-item 类改名 不然 tabber 无法动
 7. 获取所有分类 并渲染 分类列表

### 制作图片列表区域
 1. 图片列表用 Mint-UI 提供 现成的 `lazy-load`
 2. 渲染组件

### 实现图片列表的 懒加载改造和 样式美化

## 实现点击图片 跳转到 图片详情页面
1. 在改造 li 成 router-link 的时候，需要使用 tag 属性指定要渲染为 哪种元素

## 实现 详情页面的布局和美化，同时获取数据渲染页面

## 实现图片详情中 缩略图
 1. 使用 vue-preview 插件

## 绘制 商品列表 并结构美化

## 尝试在手机上 去进行项目的预览和测试
 1. 手机 和 电脑 在同一个 WIFI 环境中
 2. 打开 package.json 文件 ，在 dev 脚本中，添加一个 --host 指令
 3. 把 电脑 IP 设置为 --host 的指令值

## 8.8下午 
 本来打算晚上再学一点一起交的，刚才vs code崩溃了一下，吓死了，还好没任何损失，
 老老实实提交吧

