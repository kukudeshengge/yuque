/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    mysql: {    // 配置mysql数据库
      client: {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'root',
        database: 'parent',
      },
      app: true,
      agent: false
    }
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1578453746291_6251';

  // add your middleware config here
  config.middleware = ['jwt', 'workState'];
  config.jwt = require('./whiteList');
  config.workState = require('./workList');
  // add your user config here
  const userConfig = {
    security: {  //关闭安全防护
      csrf: false
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
