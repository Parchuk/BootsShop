const express = require("express");
const mainController = require("../controller/mainController")

const router = express.Router();

router.get("/", mainController.index)
router.get("/faq", mainController.faq)
router.get("/contact", mainController.contact)
router.get("/delivery", mainController.delivery)
router.get("/forgetpass", mainController.forgetpass)
router.get("/legal_notice", mainController.legal_notice)
router.get("/login", mainController.login)
router.get("/product_details", mainController.product_details)
router.get("/product_summary", mainController.product_summary)
router.get("/products", mainController.products)
router.get("/register", mainController.register)
router.get("/special_offer", mainController.special_offer)
router.get("/tac", mainController.tac)


module.exports = router;