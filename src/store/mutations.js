import * as types from './mutations-type'

const  mutations = {
  [types.SHOW_BAR](state){
    state.isShow=true;
  },
  [types.HIDE_BAR](state){
    state.isShow=false;
  },
  [types.GET_LATEST_NEWS](state,latestNews){
    state.latestNews = latestNews;
  },
  [types.GET_CURRENT_NEWS_DETAIL](state,currentNewsDetail){
    state.currentNewsDetail = currentNewsDetail;
  },
  [types.GET_CURRENT_NEWS_DETAIL_EXTRA](state,currentNewsDetailExtra){
    state.currentNewsDetailExtra = currentNewsDetailExtra;
  },
  [types.GET_NEWS_DETAIL_ID] (state, id) {
    state.id = id;
    let index = state.ids.indexOf(id);
    state.nextId = state.ids[++index];
  },
  [types.GET_CURRENT_THEME_ID](state,currentThemeId){
    state.currentThemeId = currentThemeId;
  },
  [types.GET_CURRENT_THEME_LIST](state,currentThemeList){
    state.currentThemeList = currentThemeList;
  },
  [types.GET_CURRENT_THEME_DETAIL](state,currentThemeDetail){
    state.currentThemeDetail = currentThemeDetail;
  }
}

export  default mutations
