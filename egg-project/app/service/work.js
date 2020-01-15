const Service = require('egg').Service;

class UserService extends Service {
    async add(item) {         
        return await this.app.mysql.insert('operation', item);
    }
}

module.exports = UserService;