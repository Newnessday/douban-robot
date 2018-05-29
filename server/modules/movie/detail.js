/**
 * @author liugang
 * @date 2018/5/29
 * @description 电影详情
 */

let cheerio = require('cheerio');
let promise = require('../../tools/promise');
let createResponse = require('../../tools/createResponse');

// 影人信息
const movieActors = async id => {
  let data = [];
  return await promise({
    url: `https://movie.douban.com/subject/${id}/celebrities`,
    callback(body, resolve){
      let $ = cheerio.load(body);
      $('.celebrity').each(function(){
        let self = $(this);
        let production = [];
        self.find('.works a').each(function(){
          production.push($(this).text());
        });

        data.push({
          image: self.find('.avatar').css('background-image').replace(/url|\(|\)/g, ''),
          name: self.find('.name a').text(),
          role: self.find('.role').text(),
          production
        });
      });
      resolve(data);
    }
  })
}

// 评论

// 喜欢这部电影的人也喜欢的其他电影
const movieRecommennd = async id => {
  let data;
  return await promise(({
    url: ``
  }))
}

const movieDetail = id => {

  let actors;
  movieActors(id).then(data => actors = data);

  return promise({
    url: `https://movie.douban.com/subject/${id}/`,
    callback(body, resolve){
      let $ = cheerio.load(body);
      let recommend = [];


      $('.recommendations-bd dl').each(function(){
        let self = $(this);
        recommend.push({
          image: self.find('img').attr('src'),
          name: self.find('img').attr('alt'),
          id: self.find('a').attr('href').match(/\d+/)[0],
        })
      });

      let data = {
        name: $('.year').prev().text(), //影片名称
        year: $('.year').text(), //影片年份
        poster: $('.nbgnbg img').attr('src'), //影片海报
        info: $('#info').html(),  //影片信息
        intro: $('.short span').text(), //剧情简介
        actors, //演员
        recommend,  //推荐
      };

      resolve(createResponse({
        data,
        msg: `豆瓣电影【【${data.name}】】详情数据`,
      }))
    }
  })
}



module.exports = movieDetail;
