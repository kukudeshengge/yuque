'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async getStoreData() {
        let data = await this.service.textStore.data();
        this.ctx.body = { code: 0, msg: '成功', data };
    }
    async deleteItem() {
        const { beid } = this.ctx.request.body;
        let data = await this.service.textStore.deleteItem(beid);
        if (data.affectedRows === 1) {
            this.ctx.body = { code: 0, msg: '删除知识库成功' }; return;
        }
        this.ctx.body = { code: 0, msg: '删除知识库失败' };
    }
    async getStoreItem() {
        const { beid } = this.ctx.query;
        let data = await this.service.textStore.getStoreItem(beid);
        this.ctx.body = { code: 0, msg: '返回知识库单项数据', data: data[0] };
    }
    async resetStoreItem() {
        let { item } = this.ctx.request.body;
        let data = await this.service.textStore.resetStoreItem(item);
        if (data.affectedRows === 1) {
            this.ctx.body = { code: 0, msg: '更新知识库成功' }; return;
        }
        this.ctx.body = { code: 1, msg: '更新知识库失败' };
    }
    async createItem() {
        let { item } = this.ctx.request.body;
        item.date = new Date().toLocaleDateString();
        item.createName = this.ctx.info.user;
        let data = await this.service.textStore.createItem(item);
        if (data.affectedRows === 1) {
            this.ctx.body = { code: 0, msg: '新增知识库单项成功' }; return;
        }
        this.ctx.body = { code: 1, msg: '新增知识库单项失败' };
    }
}

module.exports = HomeController;
