
import  Vue from 'vue';
import  Vuex from 'vuex';
import  logger from 'vuex/dist/logger';
Vue.use(Vuex);

let state = {
  isShow:false, //判断侧边栏是否显示
  latestNews:[], // 今日新闻数据
  ids:[], //新闻id数组
  id:'', //当前新闻详情页的id
  nextId:'', //下一篇新闻的id
  currentNewsDetail:[],//当前新闻详情页数据
  currentNewsDetailExtra:[],//当前新闻详情页额外数据
  currentThemeId:'',//当前主题页id
  currentThemeList:'',//当前主题列表数据
  currentThemeDetail:[],//当前主题详情页数据
  isFirstLoad: true, // 是否是第一次进入首页
};
import  mutations from './mutations'
import  getters from './getter'
import  actions from './actions'
export  default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  strict:true,
  plugins:[logger()]
});
