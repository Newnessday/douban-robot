/**
 * @author liugang
 * @date 2018/5/29
 * @description 影片评论信息
 */

let promise = require('../../../tools/promise');
let cheerio = require('cheerio');
let axios = require('axios');

const comment = async ({
                        id,
                        start = 0,
                        limit = 20,
                        sort = 'new_score',
                        percent_type = '',  //空：全部，h：好评；m：一般；l：差评
                       }) => {
  // start=20&limit=20&sort=time&status=P&percent_type=
  promise({
    url: `https://movie.douban.com/subject/${id}/comments`,
    callback(body, resolve){
      let $ = cheerio.load(body);

    }
  })
}


function test(){
  let p = {
    start: 20,
    limit: 20,
    sort: 'new_score',
    status: 'P',
    percent_type: ''
  }
  // request({
  //   url: 'https://movie.douban.com/j/search_subjects?type=tv&tag=%E5%9B%BD%E4%BA%A7%E5%89%A7',
  //   method: 'get',
  //   // body: JSON.stringify({
  //   //   "page_limit": 2
  //   // }),
  //   body: 'page_limit=1'
  // }, (error, response, body) => {
  //   console.log(body)
  // })

  axios({
    url: 'https://movie.douban.com/subject/26914824/comments',
    params: {
      start: 0,
      limit: 20,
      sort: 'new_score',
      status: 'P',
      'percent_type': ''
    }
  }).then(response => {
    console.log(response.data)
  })



}
test()