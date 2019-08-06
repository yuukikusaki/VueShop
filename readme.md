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

 ## 改造九宫格区域样式