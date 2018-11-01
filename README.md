# zhihu-daily
> 这是一个基于Vue全家桶开发的知乎日报WebApp,页面样式参考了安卓系统的知乎日报APP

## 技术栈
 vue2 + vue-router + axios + vuex + vue-cli + sass + express

 ## 在线预览DEMO(推荐使用Chrome浏览器手机调试模式观看)
   [知乎日报DEMO](http://47.106.107.188:8888/#/home)

 ## 项目截图
  ### 首页
  ![首页](https://github.com/spBlueCat/zhihu-daily/blob/master/screenshots/index.png)
  ### 过往新闻
  ![过往新闻](https://github.com/spBlueCat/zhihu-daily/blob/master/screenshots/before-news.png)
  ### 新闻详情页
  ![新闻详情页](https://github.com/spBlueCat/zhihu-daily/blob/master/screenshots/detail.png)
  ### 侧边栏(由于知乎日报近期改版，因此侧边栏列没有列表项)
  ![侧边栏](https://github.com/spBlueCat/zhihu-daily/blob/master/screenshots/sidebar.png)

## 目录结构
```
.
|-- build					// webpack配置文件
|-- config					// 项目打包路径
|-- dist					// 项目部署文件，放在服务器即可正常访问
|-- src						// 源码目录
|	|-- api				// api文件目录
|	|	|-- index.js			//api文件
|	|-- assets				// 资源目录
|	|-- components				// 组件
|	|	|-- home-header.vue		// 主页首部组件
|	|	|-- news-today.vue		// 今日新闻组件
|	|	|-- news-before.vue		// 过往新闻组件
|	|	|-- slide-bar.vue			// 侧边滑动栏组件
|	|	|-- Swipe.vue			// 轮播图组件
|	|-- pages				// 页面
|	|	|-- Home.vue			// 首页
|	|	|-- NewsDetail.vue			// 详情页面
|	|	|-- ThemeList.vue		// 列表页
|	|-- router
|	|	|-- index.js			// 路由配置
|	|-- store
|	|	|-- index.js			// vuex配置
|	|	|-- actions.js		// actions
|	|	|-- getters.js		// getters
|	|	|-- mutation-types.js	// mutation常量
|	|	|-- mutations.js		// mutation
|	|-- App.vue				// 页面入口文件
|	|-- main.js				// 程序入口文件，加载各种公共组件
|-- static					// 静态文件目录
|	|	|-- news_qa_auto.css		// 页面详情内容css
|-- .babelrc					// ES6语法编译配置
|-- .editorconfig				// 代码编写规格配置
|-- .postcssrc.js
|-- index.html					// 入口html文件
|-- package.json				// 项目及工具的依赖配置文件
|-- package-lock.json				// 记录项目及工具的版本号的文件
|-- README.md					// readme说明
.
```

## 声明
>『知乎』是 知乎. Inc 的注册商标。本软件与其代码非由知乎创作或维护。软件中所包含的信息与内容皆违反版权与知乎用户协议。本项目所有文字图片等稿件内容均由知乎提供，获取与共享之行为或有侵犯知乎权益的嫌疑。若被告知需停止共享与使用，本人会及时删除整个项目。请您了解相关情况，并遵守知乎协议。


