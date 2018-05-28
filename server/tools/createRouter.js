/**
 * @author liugang
 * @date 2018/5/28
 * @description 生成路由
 */

let koa2Router = require('koa-router');
let router = new koa2Router();

const createRouter = async options => {
  return router.get(options.path, async ctx => {
    let data = await options.dataFun();
    ctx.body = data;
  })
}

module.exports = routerList => {
  routerList.map(itemRouter => createRouter(itemRouter));
  return router;
}

