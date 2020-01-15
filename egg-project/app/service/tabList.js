const Service = require('egg').Service;

class UserService extends Service {
    async findList(title) {
        return await this.app.mysql.select('tabList',{where:{title}});
    }
}

module.exports = UserService;