const router = require("express").Router();
const VAParksController = require("../../controllers/vaparkcontroller");

router.route("/").get(VAParksController.findAll);
router.route("/:park_id").get(VAParksController.findOne);
router.route("/:park_id/new").post(VAParksController.create);
router.route("/:park_id/:comment_id").delete(VAParksController.remove);

module.exports = router;
