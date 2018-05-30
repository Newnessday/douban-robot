/**
 * @author liugang
 * @date 2018/5/25
 * @description
 */

let Koa2 = require('koa2');
let app = new Koa2();
let ko = require('koa-router');
let dd = new ko();

// let axios = require('axios');
//
// axios('https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p34855.jpg').then(res => {
//   console.log(res)
// })
//
// dd.get('/test', ctx => {
//   ctx.type='html'
//   ctx.body = '<h1>dfdfM</h1><img src="https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/pZ9w_UH8WGfscel_avatar_uploaded1494932442.25.jpg" />'
// })

let movieRouter = require('./routers/movie');

app.use(movieRouter.routes());
// app.use(dd.routes())


app.listen(3333);


