const { createRequest, getAllRequest } = require("../controllers/requestController");
const requireLogin = require("../middleware/requireLogin");

const router = require("express").Router();

router.post("/", createRequest)
router.get("/all", requireLogin, getAllRequest)

module.exports = router;