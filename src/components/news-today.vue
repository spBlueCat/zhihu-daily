<template>
    <div class="news-today">
        <div class="title">今日热闻</div>
        <ul class="item-list">
            <li class="item" v-for="item in this.$store.state.latestNews.stories" :key="item.id"  @click="getNewsDetailId(item.id)" >
                <div class="item-left"><span>{{item.title}}</span></div>
                <div class="item-right"><img :src="item.images[0]" alt=""></div>
            </li>
        </ul>
    </div>
</template>

<script>
  import { mapActions } from 'vuex';
  export default {
    name: "newsToday",
    data(){
      return {

      }
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

    }
  }
</script>

<style lang="scss" scoped>
    .news-today{
        width: 96%;
        height: auto;
        margin:0 auto;
        .title{
            width: 100%;
            height: 4rem;
            font-size: 1.2rem;
            line-height: 4rem;
            padding-left: 1rem;
            color: rgba(143, 143, 143, 0.51);
        }
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
                    width: 70%;
                    padding-left: 1rem;
                    padding-right: 2rem;
                    font-size: 1.5rem;
                }
                .item-right{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 30%;
                    img{
                        width: 80%;
                        height: 80%;
                    }
                }
            }
        }
    }
</style>
