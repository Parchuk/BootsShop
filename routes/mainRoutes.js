const express = require("express");
const mainController = require("../controller/mainController");


const router = express.Router();

router.get("/", mainController.index);
router.get("/faq", mainController.faq);
router.get("/contact", mainController.contact);
router.get("/delivery", mainController.delivery);
router.get("/forgetpass", mainController.forgetpass);
router.get("/legal_notice", mainController.legal_notice);
router.get("/product_details/:id", mainController.product_details);
router.get("/products", mainController.products);
router.get("/special_offer", mainController.special_offer);
router.get("/tac", mainController.tac);
router.get("/product_summary", mainController.getCart);
router.post("/product_summary", mainController.postCart);
router.get('/orders', mainController.getOrders);
router.post('/make-order', mainController.postOrders);
router.post('/remove-cart-product', mainController.removeCartProduct);
router.post('/minus-cart-product', mainController.minusCartProduct);
router.post('/plus-cart-product', mainController.plusCartProduct);
module.exports = router;