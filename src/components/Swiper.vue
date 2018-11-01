<template>
    <div class="banner">
        <!--<div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in this.$store.state.latestNews.top_stories" :key="item.id" @click="getNewsDetailId(item.id)">
                    <img :src='item.image' alt="">
                    <div class="mask"></div>
                    <p class="title">{{item.title}}</p>
                </div>
            </div>
            &lt;!&ndash; 如果需要分页器 &ndash;&gt;
            <div class="swiper-pagination"></div>
        </div>-->
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide class="swiper-slide" v-for="item in this.$store.state.latestNews.top_stories" :key="item.id" >
          <img :src='item.image' alt="">
          <div class="mask" @click="getNewsDetailId(item.id)"></div>
          <p class="title">{{item.title}}</p>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import { mapState,mapActions } from 'vuex';
  export default {
    name: 'carousel',
    data(){
      return{
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    },
    mounted(){
      /*new Swiper('.swiper-container',{
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay:{
          delay:3000,
          allowTouchMove:true,
        },
        touches:{
          touchRatio:2,
          followFinger:true
        }
      })*/
      this.swiper.slideTo(3, 1000, false);
    },
    methods:{
      ...mapActions([
        'getCurrentNewsDetail',
        'getCurrentNewsDetailExtra'
      ]),
      getNewsDetailId(id){
        this.$api.getNewsDetailApi(id).then((res)=>{
          this.getCurrentNewsDetail(res);
          this.$router.push({name:'news_detail',params:{id:id}})
        }).catch((err)=>{
          console.log(err);
        });
        this.$api.getNewsDetailExtraApi(id).then((res)=>{
          console.log(res);
          this.getCurrentNewsDetailExtra(res);
        }).catch((err)=>{
          console.log(err);
        });
      }
    },
    computed:{
      ...mapState([
        'latestNews',
        'currentNewsDetail',
        'currentNewsDetailExtra',
        ]),
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    components:{
      swiper,
      swiperSlide
    }
  }
</script>

<style lang="scss" scoped>
    .banner{
      overflow: hidden;
      height: 22rem;
      z-index: 1;
      .swiper-container{
        width: 100%;
        height: 100%;
        overflow:hidden;
        position: relative;
        img{
          position: absolute;
          margin: auto;
          width: 100%;
          height: 100%;
          z-index:1;
        }
        .mask{
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index:2;
          background: linear-gradient(to top, rgba(24, 24, 24, 0.59),rgba(255,255,255,0));
        }
        .title{
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          color: #FFF;
          font-size: 1.8rem;
          z-index:3;
        }
      }
    }


</style>
