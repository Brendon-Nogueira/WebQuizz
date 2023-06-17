const express = require("express");
const controller = require("../controller/controler");
const router = express.Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.get("/categoria/:categoria", controller.getByCategory)
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);

module.exports = router;