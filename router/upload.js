const route = require('koa-route');
const path = require('path')

module.exports = (app) => {
  // 处理文件上传请求
  app.use(route.post('/upload', async (ctx) => {
    // 拼接文件 URL
    const file = ctx.request.files.file   //ctx.request.files.file中的file需要与前端使用的名称保持一致
    if (!file.filepath) {
      return ctx.response.body = {
        status: 2,
        message: '上传失败'
      }
    }
    const basename = path.basename(file.filepath) //传入绝对路径返回的basename为文件名称+拓展名
    if (basename) {
      ctx.response.body = {
        status: 1,
        url: `${ctx.origin}/uploads/${basename}` //ctx.origin为http://localhost:3000
      }
    } else {
      ctx.response.body = {
        status: 2,
        message: '上传失败'
      }
    }
  }));
}