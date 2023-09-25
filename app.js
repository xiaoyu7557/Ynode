const koa = require("koa")
const route = require("koa-route")
const cors = require("koa2-cors")
const koaStatic = require('koa-static')
const koabody = require("koa-body")
const bodyParser = require('koa-bodyparser');
const path = require('path')
const app = new koa()
app.use(cors())
app.use(koabody({
  multipart: true, //支持图片文件
  formidable: {
    uploadDir: path.join(__dirname, '/public/uploads'), //设置上传目录
    keepExtensions: true, //保留拓展名
  }
}))
app.use(koaStatic(path.join(__dirname, 'public')))
app.use(bodyParser())

require('./router/user')(app)

app.use(route.get('/test', async ctx => {
  ctx.response.body = {
    status: 1,
    Message: '成功'
  }
}))

app.listen(3000, "0.0.0.0", () => {
  console.log("监听成功")
})