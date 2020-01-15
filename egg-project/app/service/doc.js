const Service = require('egg').Service;

class UserService extends Service {
    async data() {
        return await this.app.mysql.select('doc_list');
    }
    async remove(docid) {
        return await this.app.mysql.delete('doc_list', { docid })
    }
    async docItem(docid) {
        return await this.app.mysql.select('doc_list', { where: { docid } });
    }
    async resetItem(item) {
        return await this.app.mysql.update('doc_list', item, { where: { docid: item.docid } });
    }
    async createItem(item) {
        return await this.app.mysql.insert('doc_list', item);
    }
}

module.exports = UserService;