/**
 * @file mock 上传图片
 * @author leon <ludafa@outlook.com>
 */

const Koa = require('koa');
const KoaRouter = require('koa-router');
const Handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');
const cors = require('kcors');

let app = new Koa();
let imageRouter = new KoaRouter();

let template = Handlebars.compile(fs.readFileSync(path.join(__dirname, 'index.hbs'), 'utf8'));

imageRouter.use(cors());
imageRouter.post('/image', async ctx => {
    ctx.body = 'https://placeimg.com/640/480/animals';
});

imageRouter.get('/', async ctx => {
    ctx.body = template({
        title: 'test'
    });
});

app.use(imageRouter.routes());
app.use(imageRouter.allowedMethods());
app.listen(8818);
console.log('server start');
