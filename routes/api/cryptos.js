const router = require("express").Router();
const cryptosController = require("../../controllers/cryptosController");

// Matches with "/api/cryptos"
router.route("/")
  .get(cryptosController.findAll)
  .post(cryptosController.create);

// Matches with "/api/cryptos/:id"
router
  .route("/:id")
  .get(cryptosController.findById)
  .put(cryptosController.update)
  .delete(cryptosController.remove);

  router
    .route("/search/:title")
    .get(cryptosController.findByTitle)

module.exports = router;
