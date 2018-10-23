<template>
    <div class="news-detail">
        <div class="hd">
            <div class="header-top">
              <div class="popularity logo">
                <img src="../assets/popularity.svg">
                <span class="popularity_num" v-text="this.currentNewsDetailExtra.popularity"></span>
              </div>
              <div class="comments logo">
                <img src="../assets/comments.svg">
                <span class="comments_num" v-text="this.currentNewsDetailExtra.comments"></span>
              </div>
              <div class="collect logo">
                <img src="../assets/collect.svg">
              </div>
              <div class="goback logo" @click="goback">
                <img src="../assets/goback.svg">
              </div>
            </div>
        </div>
        <div class="banner" v-if="this.currentNewsDetail.image || this.currentNewsDetail.background">
            <img :src="this.currentNewsDetail.image">
            <span class="title" v-text="this.currentNewsDetail.title"></span>
            <span class="image-source" v-text="this.currentNewsDetail.image_source"></span>
        </div>
      <div class="bd" v-html="this.currentNewsDetail.body">
      </div>
    </div>
</template>

<script>
    import { mapState,mapActions } from 'vuex';
  export default {
    data(){
      return {

      }
    },
    mounted(){
      console.log(this.currentNewsDetail);
      console.log(this.currentNewsDetailExtra);
    },
    methods:{
      ...mapActions([
        'changeNewsDetailId',
      ]),
      goback() {
        this.$router.go(-1);
      }
    },
    computed:{
      ...mapState([
        'currentNewsDetail',
        'currentNewsDetailExtra',
        'currentThemeList'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  $Blue: #65ccff;
  $B:#000;
  $F:#FFF;
  .news-detail{
      overflow: hidden;
    .hd{
      width: 100%;
      height: 4.5rem;
      background: $Blue;
      position: fixed;
      z-index: 999;
      .header-top {
        width: 90%;
        height: 2.25rem;
        margin:1.5rem auto;
        .logo{
          position: relative;
          width: 2rem;
          height: inherit;
          margin-right: 2.5rem;
          text-align: center;
        }
        .popularity{
          float: right;
        }
        .comments{
          float: right;
        }
        .collect{
          float: right;
        }
        .goback{
          float: left;
          img{
            position: absolute;
            top: -0.5rem;
            left: 0;
          }
        }
        .popularity_num,.comments_num{
          position: absolute;
          top: .2rem;
          left: 2.25rem;
          font-size: 1.4rem;
          color: #FFF;
        }
      }
    }
    .banner{
      height: 20rem;
      margin-top: 2rem;
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
      position: absolute;
      top: 4rem;
      width: 100%;
    }
  }


</style>
