'use strict';

const Controller = require('egg').Controller;
const tabData = require('../../config/tabList');

class HomeController extends Controller {
    async index() {
        let { ctx } = this;
        let role = ctx.info.role;
        let res = await this.service.tabList.findList(role);
        let arr = res.map(val => tabData[val.token]);
        let newArr = [];
        arr.forEach(item => {
            let index = newArr.findIndex(val => val.classType === item.classType);
            if (index !== -1) {
                newArr[index].children.push({
                    title: item.title,
                    to: item.to,
                    id: item.id
                })
                return;
            }

            newArr.push({
                icon: item.icon,
                title: item.classType,
                id: item.id,
                classType: item.classType,
                children: [
                    {
                        title: item.title,
                        to: item.to,
                        id: item.id
                    }
                ]
            });
        })
        ctx.body = { code: 0, msg: '成功', data: newArr };
    }
}

module.exports = HomeController;
