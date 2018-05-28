/**
 * @author liugang
 * @date 2018/5/28
 * @description 异步请求
 */

let request = require('request');

module.exports = config => {

  let defaultConfig = {

  }

  return new Promise(resolve => {
    request(config.url, (error, response, body) => {
      config.callback && config.callback(body, resolve);
    });
  })
}

