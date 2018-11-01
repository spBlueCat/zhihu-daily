import axios from  'axios';

axios.defaults.baseURL = 'http://47.106.107.188:8888';//增加默认的请求的路径 http://47.106.107.188:8888
// 拦截器
axios.interceptors.response.use((res) => {
  return res.data; // 在这里统一拦截结果 把结果处理成res.data
});

//最新的日报新闻数据,返回的是一个promise对象
export default {
  //最新新闻数据
  getLatestNewsApi(){
    return axios.get('/zhihu');
  },
  //过往新闻数据
  getBeforeNews(date){
    return axios.get(`/zhihu/before_news/${date}`, {
      //设置发送参数时所使用的格式
      headers: {'content-type': 'application/json'},
      //将date参数发送给后端
      params: {
        date
      }
    })
  },
  //新闻详情页数据
  getNewsDetailApi(id){
    return axios.get(`/zhihu/news_detail/${id}`,{
      params:{
        id
      }
    })
  },
  //详情页的额外数据
  getNewsDetailExtraApi(id){
    return axios.get(`/zhihu/news_detail_extra/${id}`,{
      params:{
        id
      }
    })
  },
  //侧边栏主题数据
  getThemesNameList(){
    return axios.get('/zhihu/themes_name_list');
  },
  //侧边栏主题列表数据
  getThemeList(id){
    return axios.get(`/zhihu/theme_list/${id}`,{
      params:{
        id
      }
    })
  }
};






