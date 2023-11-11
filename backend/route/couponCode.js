const express = require('express')
const router = express.Router()
const { isAuthenticated, isAdmin, isSeller } = require("../middleware/auth");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const {
    createCoupon,
    getCoupon,
    deleteCoupon,
    getcouponName
} = require("../controller/couponCode");

// create coupon code
router.post("/create-coupon-code", isSeller, catchAsyncErrors(createCoupon));
router.get("/get-coupon/:id", isSeller,catchAsyncErrors(getCoupon));
router.delete("/delete-coupon/:id",isSeller,catchAsyncErrors(deleteCoupon));
router.get("/get-coupon/:name",catchAsyncErrors(getcouponName));

module.exports = router;