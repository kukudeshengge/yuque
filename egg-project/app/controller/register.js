'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx } = this;
        let { user, pwd } = ctx.request.body;
        let flagData = await this.service.user.conditionSearchUser(user);
        if (flagData.length) {
            ctx.body = { code: 1, msg: '注册失败，用户名已存在' }; return;
        }
        let res = await this.service.user.addUser(user, pwd);
        if (res.affectedRows === 1)
            ctx.body = { code: 0, msg: '注册成功' };
    }
}

module.exports = HomeController;
