const express = require("express");
const app = express();
const port = 3000; // 포트 번호 변경

const cartRouter = require("./routers/cart.js");
const goodsRouter = require("./routers/goods.js");
const connect = require("./schemas");
connect();

app.use(express.json());
app.use("/api", [cartRouter, goodsRouter]);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post("/", (req, res) => {
  res.send("기본 URI에 POST 메소드가 정상적으로 실행되었습니다.");
});

app.get("/", (req, res) => {
  const obj = {
    "'KeyKey": "value입니다.",
    이름입니다: "이름일까요?",
  };

  res.json(obj);
});

app.get("/:id", (req, res) => {
  console.log(req.params);

  res.send(":id URI에 정상적으로 반환되었습니다.");
});

app.on("error", (err) => {
  console.error("Server error:", err);
});

//
