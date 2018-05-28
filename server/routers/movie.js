/**
 * @author liugang
 * @date 2018/5/25
 * @description 电影相关路由
 */

let createRouter = require('../tools/createRouter');

let movieHome = require('../modules/movie/home');

const routerList = [
  {
    path: '/movie/getHotShow',
    dataFun: movieHome.hotShow
  },
  {
    path: '/movie/getLatestHotMovie',
    dataFun: movieHome.latestHotMovie
  },
  {
    path: '/movie/getLatestHotTv',
    dataFun: movieHome.latestHotTv
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
];

module.exports = createRouter(routerList);
