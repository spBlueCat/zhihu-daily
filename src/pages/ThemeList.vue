<template>
  <div class="themeList">
    <div class="hd">
      <div class="hd-top">
        <div class="nav-logo" @click="showSlideBar"></div>
        <div class="home">{{this.currentThemeList.name}}</div>
      </div>
    </div>
    <div class="banner">
        <img :src="this.currentThemeList.background" alt="">
        <span class="title"  v-text="this.currentThemeList.description" ></span>
        <span class="image-source" v-text="this.currentThemeList.image_source"></span>
    </div>
    <div class="bd">
      <div class="editors">
         <span class="position">主编</span>
          <ul class="avatar">
            <li v-for="item in this.currentThemeList.editors">
              <img :src="item.avatar">
            </li>
          </ul>
      </div>
      <div class="theme-list">
        <ul class="item-list">
          <li class="item" v-for="item in this.currentThemeList.stories" :key="item.id" @click="getNewsDetailId(item.id)" >
            <div class="item-left"><span>{{item.title}}</span></div>
            <div class="item-right" v-if="item.images"><img :src="item.images[0]" alt=""></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    import { mapState,mapActions } from 'vuex';
    export default {
        name: "ThemeList",
        data(){
          return{
            listNum:19,
          }
        },
        mounted(){
          let _this = this;
        },
        methods:{
          ...mapActions([
            'getCurrentNewsDetail',
            'getCurrentNewsDetailExtra'
          ]),
          showSlideBar:function(){
            this.$store.dispatch('showSlideBar')
          },
          getNewsDetailId(id){
            this.$api.getNewsDetailApi(id).then((res)=>{
              this.getCurrentNewsDetail(res);
              this.$router.push({name:'news_detail',params:{id:id}});
            }).catch((error)=>{
              console.log(error);
            });
            this.$api.getNewsDetailExtraApi(id).then((res)=>{
              this.getCurrentNewsDetailExtra(res);
            }).catch((error)=>{
              console.log(error);
            });
          },
        },
      computed:{
          ...mapState([
            'currentThemeList'
          ]),
      }
    }
</script>

<style lang="scss" scoped>
  $Blue: #65ccff;
  $B:#000;
  $F:#FFF;
.themeList{
  overflow: hidden;
  .hd{
    width: 100%;
    height: 4.5rem;
    background: $Blue;
    position: fixed;
    z-index: 999;
    .hd-top{
      width: 90%;
      height: inherit;
      margin: auto;
      display: flex;
      align-items: center;
      .nav-logo{
        width: 1.5rem;
        height: .2rem;
        color: $F;
        border-top: .2rem $F solid;
        border-bottom: .2rem $F solid;
        padding:.3rem 0;
        background-clip:content-box;
        background-color: $F;
        box-sizing: content-box;
      }
      .home{
        margin-left: 4rem;
        color: $F;
        font-size:1.2rem;
      }
    }
  }
  .banner{
      height: 20rem;
      margin-top: 1rem;
      position: relative;
      overflow-y: hidden;
      z-index: 99;
      img{
        position: absolute;
        bottom: -6rem;
        width: 100%;
      }
      .title{
        position: absolute;
        top: 10.5rem;
        padding: 2.5rem 1.5rem;
        line-height: 2rem;
        color: #fff;
        font-size: 1.6rem;
      }
      .image-source{
        position: absolute;
        right: 8px;
        bottom: 10px;
        font-size: 12px;
        color: #ccc;
      }
    }
  .bd{
    width: 96%;
    height: auto;
    margin:0 auto;
    .editors{
      width: 100%;
      height: 4rem;
      font-size: 1.2rem;
      line-height: 4rem;
      padding-left: 1rem;
      color: rgba(143, 143, 143, 0.51);
      .position{
        float: left;
      }
      .avatar{
        float: left;
        display: flex;
        img{
          width: 3rem;
          height: 3rem;
          margin-right: 1rem;
          border-radius: 50%;
        }
      }
    }
    .theme-list{
      margin-top: .5rem;
      .item-list{
        display: flex;
        flex-direction: column;
        padding-left: 0;
        .item{
          display: flex;
          height: 9rem;
          border: 1px solid #cccccc;
          background: #FFF;
          border-radius: .5rem;
          margin-bottom: .6rem;
          .item-left{
            display: flex;
            align-items: center;
            width: 90%;
            padding-left: 1rem;
            padding-right: 1rem;
            font-size: 1.5rem;
          }
          .item-right{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40%;
            img{
              width: 80%;
              height: 80%;
            }
          }
        }
      }
    }
  }

}

</style>
