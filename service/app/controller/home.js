'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;


// RESTful APP 前后端，简单和约束性
// 请求方式： get获取资源  post新建资源  put更新资源  delete删除资源

