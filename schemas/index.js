const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/test")
    .catch((err) => console.log(err));
};

mongoose.connection.on("error", (err) => {
  console.err("몽고디비 연결 에러", err);
});

module.exports = connect;
