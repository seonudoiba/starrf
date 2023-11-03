const express = require('express')
const router = express.Router()
const { isAuthenticated, isAdmin, isSeller } = require("../middleware/auth");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const {
    createShop,
    activateUser,
    shopLogin,
    getSeller,
    logout,
    getShopInforId,
    updateShopAvatar,
    updateShopinfo,
    adminGetUsers,
    adminDeleteUser,
    updatePayment,
    deletePayment,
   
} = require('../controller/shop');

router.post("/create-shop", catchAsyncErrors(createShop));
router.post("/activation", catchAsyncErrors(activateUser));
router.post("/login-shop", catchAsyncErrors(shopLogin));
router.get("/getSeller", isSeller, catchAsyncErrors(getSeller));
router.get("/logout", catchAsyncErrors(logout));
router.get( "/get-shop-info/:id", catchAsyncErrors(getShopInforId));
router.put("/update-shop-avatar", isSeller, catchAsyncErrors(updateShopAvatar));
router.put("/update-shop-info", isSeller, catchAsyncErrors(updateShopinfo));
router.get( "/admin-all-sellers", isAuthenticated, isAdmin("Admin"), catchAsyncErrors(adminGetUsers));
router.delete("/delete-seller/:id", isAuthenticated, isAdmin("Admin"), catchAsyncErrors(adminDeleteUser));
router.put("/update-payment-methods", isSeller, catchAsyncErrors(updatePayment));
router.delete("/delete-withdraw-method", isSeller, catchAsyncErrors(deletePayment));

module.exports = router;
