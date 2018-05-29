/**
 * @author liugang
 * @date 2018/5/29
 * @description 影片评论信息
 */

let promise = require('../../../tools/promise');
let cheerio = require('cheerio');

const comment = async ({
                        id,
                        start = 0,
                        limit = 20,
                        sort = 'new_score',
                        percent_type = '',  //空：全部，h：好评；m：一般；l：差评
                       }) => {
  return await promise({
    url: `https://movie.douban.com/subject/${id}/comments`,
    params: {
      start,
      limit,
      sort,
      percent_type
    },
    callback(body, resolve){
      let $ = cheerio.load(body);
      let commentList = [];

      $('.mod-bd .comment-item').each(function(){
        let self = $(this);
        commentList.push({
          pepole: self.find('.avatar a').attr('title'),
          pic: self.find('.avatar img').attr('src'),
          content: self.find('p').text(),
          rating: ((self.find('.rating').attr('class') || '').match(/\d+/) || [])[0],
          time: self.find('.comment-time').text(),
          votes: self.find('.votes').text()
        })
      });

      resolve(commentList);
    }
  });
}

module.exports = comment;
