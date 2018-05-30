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
    ctx.body = await options.dataFun({
      params: urlParse(ctx.request.url)
    });
  })
}

module.exports = routerList => {
  routerList.map(itemRouter => createRouter(itemRouter));
  return router;
}

