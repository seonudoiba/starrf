const express = require('express')
const router = express.Router()
const { isAuthenticated, isAdmin, isSeller } = require("../middleware/auth");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const {
    createWithdraw,
    getWithdrawalRequest,
    updateWithdrawalRequest,
   
} = require('../controller/withdraw');


router.post(
    "/create-withdraw-request",
    isSeller,
    catchAsyncErrors(createWithdraw));

router.get("/get-all-withdraw-request",
            isAuthenticated,
            isAdmin("Admin"),
            catchAsyncErrors(getWithdrawalRequest));

                router.put(
                    "/update-withdraw-request/:id",
                    isAuthenticated,
                    isAdmin("Admin"),
                    catchAsyncErrors(updateWithdrawalRequest));



module.exports = router;
