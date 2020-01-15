'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = { code: 0, msg: '成功', data: await this.service.user.allDataList() };
  }
}

module.exports = HomeController;
