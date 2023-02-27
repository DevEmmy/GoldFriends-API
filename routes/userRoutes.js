const { signUp, signIn, makeUserAnAdmin, getAllUsers } = require("../controllers/userController")
const router = require("express").Router()
const requireLogin = require("../middleware/requireLogin")

router.post("/sign-up", signUp);
router.post("/sign-in", signIn);
router.patch("/make-staff/:id", requireLogin, makeUserAnAdmin)
router.get("/all", getAllUsers)

module.exports = router