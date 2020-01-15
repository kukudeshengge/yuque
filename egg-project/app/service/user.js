const Service = require('egg').Service;

class UserService extends Service {
    async allDataList() {               //查询全部数据
        return await this.app.mysql.select('aaa');
    }
    async conditionSearchUser(user) {        //查询用户名
        return await this.app.mysql.select('aaa', { where: { user } });
    }
    async addUser(user, password) {
        return await this.app.mysql.insert('aaa', { id: null, user, password });  //新增用户
    }
}

module.exports = UserService;