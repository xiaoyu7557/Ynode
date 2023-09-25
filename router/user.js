const router = require('koa-route');
const User = require('../model/user.js')

module.exports = (app) => {
  app.use(router.get('/user', async (res) => {
    let list = await User.find()
    res.response.body = {
      status: 1,
      result: list
    }
  }))
}