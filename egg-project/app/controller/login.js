'use strict';

const Controller = require('egg').Controller;
const jwt = require = require('jsonwebtoken');
class HomeController extends Controller {
    async index() {
        const { ctx } = this;
        let { user, pwd } = ctx.request.body;
        let res = await this.service.user.conditionSearchUser(user);
        if (!res.length) {
            ctx.body = { code: 1, msg: '用户名不存在' }; return;
        }
        if (pwd != res[0].pwd) {
            ctx.body = { code: 1, msg: '密码错误' }; return;
        }
        let token = jwt.sign({ ...res[0] }, 'xiaoxu');
        ctx.body = { code: 0, msg: '登陆成功', data: token, user };
    }
}

module.exports = HomeController;
