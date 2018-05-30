/**
 * @author liugang
 * @date 2018/5/30
 * @description 影片相关视频
 */

let cheerio = require('cheerio');
let promise = require('../../../tools/promise');

const list = async ({ id }) => {
  return await promise({
    url: `https://movie.douban.com/subject/${id}/trailer`,
    callback(html, resolve){
      let data = {
        prevue: [], //预告片
        fragment: [], //片段
        interesting: [],  //花絮
      }
      let $ = cheerio.load(html);
      let videoList = $('.mod');  //页面中会有三个mod列表，分别对应【预告片，花絮，片段】
      videoList.each(function(index){
        let dataKey = ['prevue', 'fragment', 'interesting'];
        $(this).find('li').each(function(){
          let self = $(this);
          data[dataKey[index]].push({
            id: self.find('.pr-video').attr('href').match(/\d+/)[0],
            image: self.find('img').attr('src'),
            name: self.find('p').eq(0).text(),
            timeLength: self.find('em').text(),
            review: (self.find('.trail-meta a').text() || '0'.match(/\d+/))[0],
            createTime: self.find('.trail-meta span').text()
          })
        });
      });
      console.log(data)
      resolve(data);
    }
  });
}

module.exports = list;
