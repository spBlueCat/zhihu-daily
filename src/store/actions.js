import * as types from './mutations-type';

export default {
  showSlideBar:({commit})=>{
    commit(types.SHOW_BAR);
  },
  hideSlideBar:({commit})=>{
    commit(types.HIDE_BAR);
  },
  getLatestNews:({commit} , latestNews)=>{
    commit(types.GET_LATEST_NEWS, latestNews);
  },
  getCurrentNewsDetail:({commit},currentNewsDetail)=>{
    commit(types. GET_CURRENT_NEWS_DETAIL, currentNewsDetail);
  },
  getCurrentNewsDetailExtra:({commit},currentNewsDetailExtra)=>{
    commit(types. GET_CURRENT_NEWS_DETAIL_EXTRA, currentNewsDetailExtra);
  },
  getNewsDetailId: ({ commit }, id) => {
    commit(types.GET_NEWS_DETAIL_ID, id);
  },
  getCurrentThemeId:({commit},currentThemeId)=>{
    commit(types.GET_CURRENT_THEME_ID, currentThemeId);
  },
  getCurrentThemeList:({commit},currentThemeList)=>{
    commit(types.GET_CURRENT_THEME_LIST, currentThemeList);
  },
  getCurrentThemeDetail:({commit},currentThemeDetail)=>{
    commit(types.GET_CURRENT_THEME_DETAIL, currentThemeDetail);
  },
}
