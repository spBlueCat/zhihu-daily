<template>
  <div class="slide-bar forbid-scroll-wrap">
    <transition name="fade" @touchmove.stop.prevent>
      <!-- 这部分功能主要是关闭侧栏菜单，类似一层遮罩的效果 -->
      <div class="menu-mask" v-show="isShowSlideBar" @click="hideSlide" @touchmove.prevent></div>
    </transition>
    <transition name="slide-fade">
      <!-- 侧栏部分 -->
      <div class="slide-content" v-show="isShowSlideBar" ref="slideContent">
          <div class="wrapper">
            <div class="slide-bar-header">
              <div class="header-top"></div>
              <div class="header-bottom">
                <div class="collection">
                  <div class="logo">
                    <img src="../assets/collect.svg">
                  </div>
                  <div class="text">
                    <span>我的收藏</span>
                  </div>
                </div>
                <div class="download">
                  <div class="logo">
                    <img src="../assets/download.svg">
                  </div>
                  <div class="text">
                    <span>离线下载</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide-bar-list">
              <ul class="theme-list">
                <router-link tag="li" to="/home" @touchstart.native="hideSlide" @touchend.native="isActive($event)"  class="theme goHome active">
                  <span class="logo"><img src="../assets/home.svg"></span><span style="margin-left: 1rem;">首页</span></router-link>
                <li  v-for="item in ThemesNameList.others" :key="item.id" :sid="item.id" class="theme goThemeList" @touchstart="isScrolling=false" @touchmove="isScrolling=true"  @touchend="isActive($event);getThemeIdApi(item.id);getThemeListApi(item.id)">
                  <span class="themes-name">{{item.name}}</span>
                  <span class="themes-logo"><img src="../assets/add.svg" alt=""></span>
                </li>
              </ul>
            </div>
          </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import { mapState,mapActions } from 'vuex';
  import BScroll from 'better-scroll';
  import $ from 'jquery';
  export default {
    data() {
      return {
        ThemesNameList: [],
        isScrolling:false,
      }
    },
    created(){
      this.getThemesNameListApi();
    },
    mounted(){

    },
    methods: {
      ...mapActions([
        'getCurrentThemeId',
        'getCurrentThemeList'
      ]),
      hideSlide: function () {
        this.$store.dispatch('hideSlideBar');
      },
      getThemesNameListApi() {
        this.$api.getThemesNameList().then((res) => {
          console.log(res);
          this.ThemesNameList = res;
          this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.slideContent, {
              bounce:false,
              click: true,
              stopPropagation:true
            })
          });
        }).catch((error) => {
          console.log(error);
        })
      },
      getThemeIdApi(id){
          if (this.isScrolling===false) {
            this.getCurrentThemeId(id);
            this.hideSlide();
            this.$router.push({name: 'theme_list', params: {id: id}});
          }
      },
      getThemeListApi(id) {
        if (this.isScrolling === false) {
          this.$api.getThemeList(id).then((res) => {
            console.log(res);
            this.getCurrentThemeList(res);
          }).catch((e) => {
            console.log(e);
          })
        }
      },
     isActive(event){
        let themes = document.querySelectorAll('.theme');
       for(let i=0,len=themes.length;i<len;i++){
         themes[i].classList.remove('active');
       }
        if(event.currentTarget.nodeName === 'LI'){
          event.currentTarget.classList.add('active');
        }
      }
    },
    computed: {
      ...mapState([
        'currentThemeId',
        'currentThemeList'
      ]),
      isShowSlideBar() {
        return this.$store.getters.isShowMethod;
      },
    }
  }
</script>

<style lang="scss" scoped>
  $Blue: #65ccff;
  $B: #000;
  $F: #FFF;
  .fade-enter-to, .fade-leave-to {
    transition: opacity 0.3s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
  .slide-fade-enter-to, .slide-fade-leave-to {
    transition: transform 0.3s;
    transform: translate(0px, 0px);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    opacity: 0;
    transform: translate(-286px, 0px);
    transition: opacity 0.3s ease-in-out 0.3s, transform 0.3s ease-in-out;
  }
  .change:hover img {
    -webkit-transform: translate(0px, 0px);
    transform: translate(0px, 0px);
    opacity: 1;
  }

  .menu-mask {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 1;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.5);
  }

  .slide-content {
    position: fixed;
    width: 75%;
    background: #e5e5e5;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1100;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    pointer-events: auto;
    .wrapper{
      height: auto;
      .slide-bar-header {
        display: flex;
        align-items: flex-end;
        width: 100%;
        height: 7.5rem;
        background: $Blue;
        .header-bottom {
          width: inherit;
          line-height: 1.5rem;
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-bottom: 1rem;
          .collection, .download {
            flex-grow: 1;
            .logo {
              display: inline-block;
              padding-left: .75rem;
              vertical-align: middle;
            }
            .text {
              display: inline-block;
              vertical-align: middle;
              padding-left: .75rem;
              span {
                font-size: 1.4rem;
                color: #FFF;
              }
            }
          }
        }
      }
      .theme-list {
        background: $F;
        padding-left: 0;
        height: auto;
        li {
          font-size: 1.8rem;
        }
        .goHome {
          color: $Blue;
          padding: 1rem;
        }
        .goThemeList {
          width: inherit;
          color: $B;
          padding: 1rem;
          .themes-logo {
            width: inherit;
            float: right;
            margin-right: 3rem;
          }
        }
      }
    }
  }
  .active {
    background: rgba(214, 214, 214, 0.56);
  }
</style>
