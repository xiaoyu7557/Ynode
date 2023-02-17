let mongoose = require("./mongod.js")
let seauser = mongoose.Schema
let userS = new seauser({
  userName: { type: String },
  passWard: { type: String }
})
module.exports = mongoose.model("user", userS)