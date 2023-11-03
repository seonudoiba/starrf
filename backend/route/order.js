const express = require('express')
const router = express.Router()
const { isAuthenticated, isAdmin, isSeller } = require("../middleware/auth");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");


const {
    createOrders,
    getUserOrder,
    getSellerOrder,
    updateOrderStatus,
    orderRefund,
    acceptOrderRefund,
    adminGetOrders
} = require('../controller/order')

router.post("/create-order", catchAsyncErrors(createOrders));
router.get(
    "/get-all-orders/:userId",
    catchAsyncErrors(getUserOrder));
router.get(
    "/get-seller-all-orders/:shopId",
    catchAsyncErrors(getSellerOrder));
router.put(
    "/update-order-status/:id",
    isSeller,
    catchAsyncErrors(updateOrderStatus));
router.put(
    "/order-refund/:id",
    catchAsyncErrors(orderRefund));
router.put(
    "/order-refund-success/:id",
    isSeller,
    catchAsyncErrors(acceptOrderRefund));
router.get(
    "/admin-all-orders",
    isAuthenticated,
    isAdmin("Admin"),
    catchAsyncErrors(adminGetOrders));

module.exports = router