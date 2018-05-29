/**
 * @author liugang
 * @date 2018/5/28
 * @description 生成路由
 */

let koa2Router = require('koa-router');
let urlParse = require('./urlParse');

let router = new koa2Router();

const createRouter = async options => {
  return router.get(options.path, async ctx => {
    console.log(urlParse(ctx.request.url))
    ctx.body = await options.dataFun();
  })
}

module.exports = routerList => {
  routerList.map(itemRouter => createRouter(itemRouter));
  return router;
}

