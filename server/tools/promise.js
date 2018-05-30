/**
 * @author liugang
 * @date 2018/5/28
 * @description 异步请求
 */

let axios = require('axios');

module.exports = params => {

  let defaultParams = {

  }

  Object.assign(defaultParams, params);

  return new Promise(resolve => {

    axios(defaultParams).then(response => {
      params.callback && params.callback(response.data, resolve);
    })

    // request(config.url, (error, response, body) => {
    //   config.callback && config.callback(body, resolve);
    // });
  })
}

