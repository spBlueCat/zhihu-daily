<template>
    <div>
        <div class="news-before" v-for="(itemList,index) in beforeNewsList" :key="index">
            <div class="title">{{itemList.date}}</div>
            <ul class="item-list">
                <li class="item" v-for="item in itemList.stories" :key="item.id" @click="getNewsDetailId(item.id)">
                    <div class="item-left"><span>{{item.title}}</span></div>
                    <div class="item-right"><img :src="item.images[0]" alt=""></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
  import { mapActions } from 'vuex';
  export default {
    data(){
      return {
        //apiDate 存放yyyy-mm-dd格式的日期,用于发送请求时传递参数以及表示当前旧新闻的时间
        apiDate:'',
        //beforeDate 用于存放从api中获取的过往新闻的数据
        beforeData:[],
        beforeNewsList:[],
      }
    },
    mounted(){
      let _this=this;
      _this.getApiDate();
      window.addEventListener('scroll',_this.throttle(_this.getBeforeNewsData,500,1000));
    },
    methods: {
      ...mapActions([
        'getCurrentNewsDetail',
        'getCurrentNewsDetailExtra'
      ]),
      //格式化日期
      getApiDate() {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1; //获取当前月份的日期
        month = month >= 10 ? month : "0" + month;
        let day = date.getDate();
        day = day >= 10 ? day : "0" + day;
        let ymd = year + "" + month + "" + day;
        this.apiDate = ymd;
      },
      throttle(func, wait, mustRun) {
    var timeout,
      startTime = new Date();
    return function() {
      var context = this,
        args = arguments,
        curTime = new Date();
      clearTimeout(timeout);
      // 如果达到了规定的触发时间间隔，触发 handler
      if(curTime - startTime >= mustRun){
        func.apply(context,args);
        startTime = curTime;
        // 没达到触发间隔，重新设定定时器
      }else{
        timeout = setTimeout(func, wait);
      }
    };
  },
      //加载过往新闻事件
      getBeforeNewsData() {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //滚动条的垂直偏移
        let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight; //元素的整体高度
        let clientHeight = document.documentElement.clientHeight || document.body.clientHeight; //元素的可见高度
         //滚动到底部触发请求，获取过往新闻数据，并改变数据重新渲染页面
        if (scrollTop + clientHeight >= scrollHeight-100) {
          let _this = this;
            _this.$api.getBeforeNews(_this.apiDate).then((res) => {
              //将获取的数据赋值给beforeData
              _this.beforeData = res;
              //将获取的数据的date赋值给apiDate便能够得到前一天的日期
              _this.apiDate = res.date;
              // 将过往新闻放入一个数组用于v-for循环渲染
              _this.beforeNewsList.push(_this.beforeData);
              /*let list = new Set(this.beforeNewsList);
              list.add(this.beforeNewsList);
              this.beforeNewsList = Array.from(list);*/
            }).catch((error) => {
              console.log(error);
            })

        }
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
  }
</script>

<style lang="scss" scoped>
    .news-before{
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
