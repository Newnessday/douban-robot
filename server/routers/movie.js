/**
 * @author liugang
 * @date 2018/5/25
 * @description 电影相关路由
 */

let createRouter = require('../tools/createRouter');

let movieHome = require('../modules/movie/home');
let movieDetail = require('../modules/movie/detail');

const routerList = [
  // 首页相关
  {
    path: '/movie/getHotShow',
    dataFun: movieHome.hotShow
  },
  {
    path: '/movie/getLatestHotMovie',
    dataFun({ params }){
      return movieHome.latestHotMovie(params);
    }
  },
  {
    path: '/movie/getLatestHotTv',
    dataFun({ params }){
      return movieHome.latestHotTv(params);
    }
  },
  {
    path: '/movie/getHotRecommond',
    dataFun: movieHome.hotRecommond
  },
  {
    path: '/movie/getGoodRanking',
    dataFun: movieHome.goodRanking
  },
  {
    path: '/movie/getLoveFilmReview',
    dataFun: movieHome.loveFilmReview
  },
  // 详情页相关
  {
    path: '/movie/getMovieDetail',
    dataFun({ params }){
      return movieDetail(params.id);
    }
  }
];

module.exports = createRouter(routerList);
