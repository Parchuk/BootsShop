const express = require("express");
const AdminController = require("../controller/adminController");
const { isAdmin } = require("../helper/auth-helper");

const router = express.Router();

router.get("/admin/", isAdmin, AdminController.adminIdex);
router.get("/admin/add_product", isAdmin, AdminController.adminAddProduct);
router.get("/admin/product_details", isAdmin, AdminController.adminProductDetails);
router.get("/admin/product_list", isAdmin, AdminController.adminProductList);
router.post("/admin/add_product", isAdmin, AdminController.adminAddProductPost);
router.get("/admin/products_delete/:id", isAdmin, AdminController.adminProductDelete);
router.get("/admin/products_edit/:productId", isAdmin, AdminController.adminProductEdit);
router.post('/admin/product_editConfirm/:productId', isAdmin, AdminController.adminEditConfirm);
router.get('/admin_page', isAdmin, AdminController.adminPage);
router.get('/admin/orders', isAdmin, AdminController.getOrders);
router.post('/remove-cart-product-admin', isAdmin, AdminController.removeOrderItem);
router.post('/plus-cart-product-admin', isAdmin, AdminController.plusItemOrder);
router.post('/minus-cart-product-admin', isAdmin, AdminController.minusItemOrder);
router.post('/remove-order-product-admin', isAdmin, AdminController.removeOrder);





module.exports = router;