const Service = require('egg').Service;

class UserService extends Service {
    async data() {
        return await this.app.mysql.select('text_store');
    }
    async deleteItem(beid) {
        return await this.app.mysql.delete('text_store', { beid })
    }
    async getStoreItem(beid) {
        return await this.app.mysql.select('text_store', { where: { beid } });
    }
    async resetStoreItem(item) {
        return await this.app.mysql.update('text_store', item, { where: { beid: item.beid } });
    }
    async createItem(item) {
        return await this.app.mysql.insert('text_store', item);
    }
}

module.exports = UserService;