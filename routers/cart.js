const express = require("express");
const cart = require("../schemas/cart");
const router = express.Router();

const Cart = require("../schemas/cart.js");
const goods = require("../schemas/goods.js");

// localhost:3000/api/carts GET Method
router.get("/carts", async (req, res) => {
  const carts = await Cart.find({});
  //   {
  //     (goodsId, quantity),
  //     (goodsId, quantity);
  //   }

  const goodsId = cart.map((cart) => {
    return cart.goodsId;
  });
  // [2, 11, 19];

  const goods = await Goods.find({ goodsId: goodsIds });
  // goods에 해당하는 모든 정보를 가지고 올건데,
  // 만약 goodsIds 변수 안에 존재하는 값일 때만 조회하라.

  const result = carts.map((cart) => {
    return {
      quantity: cart.quantity,
      goods: goods.find((item) => item.goodsId === cart.goodsId),
    };
  });

  res.json({
    carts: result,
  });

  return {
    quantity: cart.quantity,
    goods: goods.find((item) => item.goodsId === cart.goodsId),
  };
});

module.exports = router;
