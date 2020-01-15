'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.index.index); 
  router.get('/getData', controller.data.index);
  router.post('/login', controller.login.index);
  router.post('/register', controller.register.index);
  router.get('/getTabList', controller.getTabList.index);
  router.get('/getStore', controller.textStore.index.getStoreData);
  router.delete('/store/delete', controller.textStore.index.deleteItem);
  router.get('/store/getStoreItem', controller.textStore.index.getStoreItem);
  router.put('/store/resetStoreItem', controller.textStore.index.resetStoreItem);
  router.post('/store/createItem', controller.textStore.index.createItem);
  router.get('/doc/getData', controller.docStore.index.getData);
  router.delete('/doc/removeItem', controller.docStore.index.remove);
  router.get('/doc/docItem', controller.docStore.index.docItem);
  router.put('/doc/resetItem', controller.docStore.index.resetItem);
  router.post('/doc/createItem', controller.docStore.index.createItem);
  router.get('/work/getData', controller.operation.index.getData);
  router.delete('/work/removeItem', controller.operation.index.remove);
  router.put('/work/add', controller.operation.index.addWork);
};
