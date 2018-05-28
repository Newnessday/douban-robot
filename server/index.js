/**
 * @author liugang
 * @date 2018/5/25
 * @description
 */

let Koa2 = require('koa2');
let app = new Koa2();

let movieRouter = require('./routers/movie');

app.use(movieRouter.routes());

app.listen(3333);


