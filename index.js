const Koa = require('koa');
const app = new Koa();
var port = process.env.port||3000;

app.use(ctx => {
    ctx.body = 'Hello Koa';
});

app.listen(process.env.port||3000, () => {
    console.log(`Server started on port`);
});