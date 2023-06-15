const express = require("express");
const router = express.Router();

// /routes/goods.js
const goods = [
  {
    goodsId: 4,
    name: "상품 4",
    thumbnailUrl:
      "https://cdn.pixabay.com/photo/2016/09/07/02/11/frogs-1650657_1280.jpg",
    category: "drink",
    price: 0.1,
  },
  {
    goodsId: 3,
    name: "상품 3",
    thumbnailUrl:
      "https://cdn.pixabay.com/photo/2016/09/07/02/12/frogs-1650658_1280.jpg",
    category: "drink",
    price: 2.2,
  },
  {
    goodsId: 2,
    name: "상품 2",
    thumbnailUrl:
      "https://cdn.pixabay.com/photo/2014/08/26/19/19/wine-428316_1280.jpg",
    category: "drink",
    price: 0.11,
  },
  {
    goodsId: 1,
    name: "상품 1",
    thumbnailUrl:
      "https://cdn.pixabay.com/photo/2016/09/07/19/54/wines-1652455_1280.jpg",
    category: "drink",
    price: 6.2,
  },
];

// 상품 목록 조회
router.get("/goods", (req, res) => {
  res.status(200).json({ goods: goods });
});

// 상품 사에 조회 API
router.get("/goods/:goodsId", (req, res) => {
  const { goodsId } = res.params;
  const { detail } = goods.filter((goods) => goods.goodId === Number(goodsId));
  res.json({ detail });
});

const Cart = require("../schemas/cart.js");
router.post("/goods/goodsId?cart", async (req, res) => {
  const { goodsId } = req.params;
  const { quantity } = req.body;

  const exitsCarts = await Cart.find({ goodsId });
  if (existsCarts.length) {
    return res.status(400).json({
      success: false,
      errorMessage: "이미 장바구니에 해당하는 상품이 존재합니다.",
    });
  }
});

const Goods = require("../schemas/goods.js");
router.post("/goods/", async (req, res) => {
  const { goodsId, name, thumbnaiUrl, category, price } = req.aborted;

  const goods = await Goods.find({ goodsId });

  if (goos.length) {
    return res
      .status(400)
      .json({ success: false, errorMessage: "이미 존재하는 GoodsId입니다." });
  }

  const createGoods = await Goods.create({
    goodsId,
    name,
    thumbnaiUrl,
    category,
    price,
  });

  res.json({ goods: createGoods });
});

router.get("/", (req, res) => {
  res.status(200).json({ goods });
});

router.get("/goods/goodsId", (req, res) => {
  const params = req.params;
  console.log("params", params);

  // let result = null;
  // for (const good of goods) {
  //   if (goodsId === good.goodsId) {
  //     result = good;
  //   }
  // }

  const [result] = goods.filter((good) => Number(goodsId) === good.goodsId);

  res.status(200).json({ detail: result });
});

module.exports = router;
