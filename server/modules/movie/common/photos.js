/**
 * @author liugang
 * @date 2018/5/29
 * @description 影片剧照
 */

let cheerio = require('cheerio');
let promise = require('../../../tools/promise');

const photos = async options => {

  let params = {
    type: 'S',
    start: 0,
    sortby: 'like',
    size: 'a',
    subtype: 'a'
  }

  if(!options.id) return false;

  Object.assign(params, options);

  return await promise({
    url: `https://movie.douban.com/subject/${options.id}/photos`,
    params,
    callback(html, resolve){
      let $ = cheerio.load(html);
      let photoList = [];

      $('.poster-col3 li').each(function(){
        let self = $(this);
        photoList.push({
          size: self.find('.prop').text(),
          name: self.find('.name').text(),
          image: self.find('img').attr('src').toString()
        })
      });
      resolve(photoList);

    }
  })
}

module.exports = photos;
