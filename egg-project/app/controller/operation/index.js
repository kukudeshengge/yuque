'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async getData() {
        let data = await this.service.operation.data();
        this.ctx.body = { code: 0, msg: '成功', data };
    }
    async remove() {
        let { id } = this.ctx.request.body;
        let data = await this.service.operation.remove(id);
        if (data.affectedRows === 1) {
            this.ctx.body = { code: 0, msg: '删除信息成功' }; return
        }
        this.ctx.body = { code: 0, msg: '删除信息失败' };
    }
    async addWork() {
        let { workItem } = this.ctx.request.body;
        let data = await this.service.operation.add(workItem);
        console.log(data);
        this.ctx.body = { code: 0, msg: '新增工作成功' };
    }
}

module.exports = HomeController;
