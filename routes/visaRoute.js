const { getAll, deleteVisa, createVisa } = require("../controllers/visaController")

const router = require("express").Router()

router.get("/all", getAll)
router.delete("/:id", deleteVisa)
router.post("/", createVisa)

module.exports = router