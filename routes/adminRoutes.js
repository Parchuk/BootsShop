const express = require("express");
const AdminController = require("../controller/adminController");

const router = express.Router();

router.get("/admin/", AdminController.adminIdex);
router.get("/admin/add_product", AdminController.adminAddProduct);
router.get("/admin/product_details", AdminController.adminProductDetails);
router.get("/admin/product_list", AdminController.adminProductList);
router.post("/admin/add_product", AdminController.adminAddProductPost);
router.get("/admin/products_delete/:id", AdminController.adminProductDelete);
router.get("/admin/products_edit/:id", AdminController.adminProductEdit);
router.post('/admin/product_editConfirm/:id', AdminController.adminEditConfirm);
router.get('/admin_page', AdminController.adminPage);
router.get('/admin/orders', AdminController.getOrders);
router.post('/remove-cart-product-admin', AdminController.removeCartProductAdmin);
router.post('/plus-cart-product-admin', AdminController.plusCartProductAdmin);
router.post('/minus-cart-product-admin', AdminController.minusCartProductAdmin);



module.exports = router;