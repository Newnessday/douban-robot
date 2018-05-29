/**
 * @author liugang
 * @date 2018/5/25
 * @description 豆瓣电影首页相关数据
 */

let cheerio = require('cheerio');

let promise = require('../../tools/promise');
let movieInTagList = require('../../tools/movieInTagList');
let createResponse = require('../../tools/createResponse');

// 正在热映
const hotShow = () => {
  return promise({
    url: 'https://movie.douban.com/',
    callback(body, resolve){
      let $ = cheerio.load(body);
      let data = [];
      // 正在热映
      $('#screening .ui-slide-content > li').each(function(){
        let self = $(this);
        let name = self.attr('data-title');
        let image = self.find('img').attr('src');
        let id = self.attr('data-trailer');
        if(name){
          data.push({
            id: id.match(/\d+/)[0],
            name,
            image,
            rating: {
              type: self.find('.rating-star').text() || self.find('.rating-type').text(),  //评分来源，除豆瓣外还有【媒体评分】一项
              value: self.find('.subject-rate').text() || '暂无评分'
            }
          })
        }
      });

      resolve(createResponse({
        data,
        msg: '豆瓣电影首页正在热映部分数据'
      }));

    }
  })
}

// 最近热门电影
const latestHotMovie = ({ tag = '热门'}) => {
  return movieInTagList({
    tag
  });
}

// 最近热门电视剧
const latestHotTv = ({ tag = '热门' }) => {
  return movieInTagList({
    type: 'tv',
    tag
  });
}

// 热门推荐
const hotRecommond = () => {
  return promise({
    url: 'https://movie.douban.com',
    callback(body, resolve){
      let data = [];
      let $ = cheerio.load(body);
      $('#gallery-frames .ui-slide-item').each(function(){
        let self = $(this);
        data.push({
          image: self.find('img').attr('src'),
          title: self.find('h3').text(),
          description: self.find('p').text()
        });
      });
      resolve(createResponse({
        data,
        msg: '豆瓣电影首页下方热门推荐数据'
      }))
    }
  })
}

// 最受欢迎的影评
const loveFilmReview = () => {
  return promise({
    url: 'https://movie.douban.com',
    callback(body, resolve){
      let data =[];
      let $ = cheerio.load(body);
      $('#reviews .review').each(function(){
        let self = $(this);
        data.push({
          image: self.find('img').attr('src'),
          title: self.find('h3').attr('title'),
          content: self.find('.review-content').text(),
          author: self.find('.review-meta a').eq(0).text(),
          movieName: self.find('img').attr('alt'),
          rating: self.find('.review-meta span').attr('class')
        })
      });
      resolve(createResponse({
        data,
        msg: '豆瓣电影最下方，最受欢迎的影评'
      }));
    }
  })
}

// 本周口碑榜
const goodRanking = () => {
  return promise({
    url: 'https://movie.douban.com',
    callback(body, resolve){
      let data = [];
      let $ = cheerio.load(body);
      $('#billboard tr').each(function(){
        let self = $(this);
        let selfA = self.find('a');
        data.push({
          id: selfA.attr('href').match(/\d+/)[0],
          name: selfA.text()
        })
      });
      resolve(createResponse({
        data,
        msg: '豆瓣电影首页右侧本周口碑榜数据'
      }))
    }
  })
}


module.exports = {
  hotRecommond,
  goodRanking,
  loveFilmReview,
  latestHotTv,
  latestHotMovie,
  hotShow
};


