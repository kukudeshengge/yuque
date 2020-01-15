const url = require('url');
const jwt = require('jsonwebtoken');

function getIsToken(token, keys) {
    return new Promise(res => {
        jwt.verify(token, keys, (error, result) => {
            if (error) throw error;
            res(result);
        })
    })
}


module.exports = options => {
    return async (ctx, next) => {
        if (options.includes(url.parse(ctx.url).pathname)) {    //白名单内不进行校验
            await next();
            return;
        }
        let token = ctx.get('token');
        if (!token) {                        //没有登陆权限
            ctx.body = { code: 1, msg: '没有权限' }; return;
        }
        let info;
        try {
            info = await getIsToken(token, 'xiaoxu');
        } catch (error) {
            ctx.body = { code: 1, msg: '权限无效' };
            return;
        }

        ctx.info = info;
        await next();
    }
}