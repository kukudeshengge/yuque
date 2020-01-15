'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async getData() {
        let data = await this.service.doc.data();
        this.ctx.body = { code: 0, msg: '成功', data };
    }
    async remove() {
        let { docid } = this.ctx.request.body;
        let data = await this.service.doc.remove(docid);
        if (data.affectedRows === 1) {
            this.ctx.body = { code: 0, msg: '删除文档成功' }; return
        }
        this.ctx.body = { code: 0, msg: '删除文档失败' };
    }
    async docItem() {
        let { docid } = this.ctx.query;
        let data = await this.service.doc.docItem(docid);
        this.ctx.body = { code: 0, msg: '查询文档单项成功', data: data[0] };
    }
    async resetItem() {
        let { item } = this.ctx.request.body;
        let data = await this.service.doc.resetItem(item);
        if (data.affectedRows === 1) {
            this.ctx.body = { code: 0, msg: '编辑文档单项成功' }; return;
        }
        this.ctx.body = { code: 1, msg: '编辑文档单项失败' };
    }
    async createItem() {
        let { item } = this.ctx.request.body;
        item.createName = this.ctx.info.user;
        item.date = new Date().toLocaleDateString().replace(/\//g, '-');
        let data = await this.service.doc.createItem(item);
        if (data.affectedRows === 1) {
            this.ctx.body = { code: 0, msg: '添加文档单项成功' }; return;
        }
        this.ctx.body = { code: 1, msg: '添加文档单项失败' };
    }
}

module.exports = HomeController;
