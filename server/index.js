/**
 * @author liugang
 * @date 2018/5/25
 * @description
 */

let Koa2 = require('koa2');
let cors = require('koa-cors');

let app = new Koa2();

let movieRouter = require('./routers/movie');

app.use(cors());
app.use(movieRouter.routes());

app.listen(6688);


