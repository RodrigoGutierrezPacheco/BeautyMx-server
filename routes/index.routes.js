const router = require("express").Router();
const authRoutes = require("./auth.routes");
const productsRoutes = require("./products.routes")

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/auth", authRoutes);
router.use("/productos", productsRoutes)

module.exports = router;
