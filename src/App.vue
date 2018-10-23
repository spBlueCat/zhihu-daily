<template>
  <div id="app">
    <keep-alive>
      <!--缓存的页面-->
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <transition>
      <!--正常访问的页面-->
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <slide-bar></slide-bar>
  </div>
</template>

<script>

  import  Home from './pages/Home';
  import slideBar from './components/slide-bar';
export default {
  name:'app',
  components:{
    Home,
    slideBar
  },
  data(){
    return{
      isShowSidebar: false
    }
  },
  created() {
    this.isShowSidebar = false;
  }
}
</script>

<style lang="scss">
    html{
        font-size: 12px;
    }

    body{
        background: rgba(214, 214, 214, 0.43);
        -webkit-overflow-scrolling:touch;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ul{
        list-style: none;
    }

    a{
        text-decoration: none;
    }




    @import "../static/news_qa.auto.css";
</style>
