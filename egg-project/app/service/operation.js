const Service = require('egg').Service;

class UserService extends Service {
    async data() {
        return await this.app.mysql.select('operation');
    }
    async remove(id) {
        return await this.app.mysql.delete('operation', { id })
    }
    async add(workItem) {
        return await this.app.mysql.insert('operation', workItem);
    }
}

module.exports = UserService;