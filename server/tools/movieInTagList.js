/**
 * @author liugang
 * @date 2018/5/28
 * @description 根据tag和type，返回相关数据
 */

let promise = require('./promise');
let createResponse = require('./createResponse');

module.exports = options => {

  let typeName = {
    tv: '电视剧',
    movie: '电影'
  }

  let defaultOptions = {
    type: 'movie',
    pageLimit: 50
  }

  Object.assign(defaultOptions, options);

  return promise({
    url: `https://movie.douban.com/j/search_subjects?type=${defaultOptions.type}&tag=${encodeURIComponent(defaultOptions.tag)}&page_limit=50&page_start=0`,
    callback: (body, resolve) => {

      let data = [];

      // 统一数据格式
      body.subjects.map(item => {
        data.push({
          id: item.id,
          image: item.cover,
          name: item.title,
          rating: {
            type: '',
            value: item.rate
          }
        });
      });

      resolve(createResponse({
        data,
        msg: `豆瓣${defaultOptions.tag}${typeName[defaultOptions.type]}数据`
      }));
    }
  });
}
