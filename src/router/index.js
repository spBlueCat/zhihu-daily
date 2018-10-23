import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/', redirect: '/home'
    },
    {path:'/home',
      component:()=>import("../pages/Home.vue"),
      meta: {keepAlive:true,title:'知乎日报',name:"referrer",content:"never"},
    },
    {path:'/news_detail/:id',
      name:'news_detail',
      component:()=>import("../pages/NewsDetail.vue"),
      meta: {keepAlive:true,title:'知乎日报',name:"referrer",content:"never"}
    },
    {path:'/theme_list/:id',
      name:'theme_list',
      component:()=>import("../pages/ThemeList.vue"),
      meta:{keepAlive:true,title:'知乎日报',name:"referrer",content:"never"}
    },
    {
      path: '*', redirect: '/home'
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})
