const Koa = require('koa');
const app = new Koa();
var port = process.env.port || 3000;

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

app.use(async (ctx) => {
    ctx.body = 'Hello Koa this is a new project';
});

app.listen(process.env.port || 3000, () => {
    console.log(`Server started on port`);
});

module.exports = app.callback();