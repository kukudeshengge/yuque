
const url = require('url');

module.exports = options => {
    return async (ctx, next) => {
        let pathVal = url.parse(ctx.url).pathname;
        let arr = options.filter(val => val.path == pathVal);
        if (arr.length) {
            let res = await ctx.service.work.add({
                date: new Date().toLocaleDateString().replace(/\//g, '-') +'  '+ new Date().toLocaleTimeString(),
                title: ctx.info.user,
                value: arr[0].text
            });
        }
        await next();
    }
}