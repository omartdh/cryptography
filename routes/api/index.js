const router = require("express").Router();
const cryptoRoutes = require("./cryptos");

// crypto routes
router.use("/cryptos", cryptoRoutes);

module.exports = router;
