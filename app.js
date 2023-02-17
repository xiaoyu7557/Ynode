let koa = require("koa")
let route = require("koa-route")
let cors = require("koa2-cors")
let User = require("./model/user.js")

let app = new koa()
app.use(cors())

app.use(route.get('/', async ctx => {
  ctx.response.body = {
    status: 1,
    Message: '成功'
  }
}))

app.listen(3003, "0.0.0.0", function () {
  console.log("监听成功")
})