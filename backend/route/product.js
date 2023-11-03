const express = require('express')
const router = express.Router()
const { isAuthenticated, isAdmin, isSeller } = require("../middleware/auth");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const {
    createProduct,
    getShopProduct,
    deleteShopProduct,
    getProducts,
    addReview,
    adminGetProducts,
} = require('../controller/product')

router.post("/create-product", catchAsyncErrors(createProduct));    
router.get("/get-all-products-shop/:id", catchAsyncErrors(getShopProduct));
router.delete("/delete-shop-product/:id", isSeller, catchAsyncErrors(deleteShopProduct));
router.get("/get-all-products", catchAsyncErrors(getProducts));
router.post("/create-new-review", isAuthenticated ,catchAsyncErrors(addReview));
router.get("//admin-all-products", isAdmin("Admin") , isAuthenticated ,catchAsyncErrors(adminGetProducts));


module.exports = router;
