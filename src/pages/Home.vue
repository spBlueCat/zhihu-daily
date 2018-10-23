<template>
  <div id="home">
      <home-header></home-header>
      <swiper-slide ></swiper-slide>
      <div class="news-list">
        <news-today ></news-today>
        <news-before></news-before>
      </div>
  </div>
</template>

<script>
    import swiperSlide from '../components/Swiper';
    import newsToday from  '../components/news-today';
    import  newsBefore from '../components/news-before';
    import homeHeader from '../components/home-header';
    import { mapState,mapActions } from 'vuex';
    export default {
      created(){
        this.getLatestNewsData();
      },
      methods:{
        getLatestNewsData(){
          this.$api.getLatestNewsApi().then((res)=>{
            this.getLatestNews(res);
            /*this.$store.dispatch('getLatestNews',res);*/
          }).catch((error)=>{
              console.log(error);
            });
        },
        ...mapActions([
          'getLatestNews'
        ])
      },
      computed:{
        ...mapState([
          'latestNews',
        ]),
      },
      components: {
        swiperSlide,
        newsToday,
        newsBefore,
        homeHeader
      }
    }
</script>

<style lang="less" scoped>
</style>
