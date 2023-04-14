const { getAProperty, getAllProperties, createAList, deleteAList, updateAProperty } = require("../controllers/propertyController")
const requiredLogin = require("../middleware/requireLogin")

const router = require("express").Router()

router.get("/all", getAllProperties)
router.get("/:id", getAProperty)
router.post("/", createAList)
router.delete("/:id", deleteAList)
router.patch("/id", requiredLogin, updateAProperty)

module.exports = router