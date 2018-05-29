/**
 * @author liugang
 * @date 2018/5/29
 * @description 解析url参数
 */

let url = require('url');
let querystring = require('querystring');

module.exports = urlStr => (querystring.parse(url.parse(urlStr).query));

