let mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/hairpin", {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
mongoose.connection.on("connected", function () {
  console.log("数据库链接成功")
})
mongoose.connection.on("error", function (err) {
  console.log(err)
})
mongoose.connection.on("close", function () {
  console.log("数据库链接断开连接")
})
module.exports = mongoose
