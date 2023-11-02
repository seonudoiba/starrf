const express = require('express')
const router = express.Router()
const { isAuthenticated, isAdmin } = require("../middleware/auth");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const {
    createUser,
    activation,
    login,
    getuser,
    logout,
    updateUser,
    updateAvatar,
    updateAddress,
    deleteUser,
    updatePassword,
    getUserId,
    adminGetUsers,
    adminDeleteUser,
   
} = require('../controller/user')


router.post("/create-user", createUser);
router.post("/activation",catchAsyncErrors(activation));
router.post("/login-user", catchAsyncErrors(login));
router.get("/getuser",isAuthenticated,catchAsyncErrors(getuser));
router.get( "/user-info/:id", catchAsyncErrors((getUserId)));
router.get("/logout",catchAsyncErrors(logout));
router.put("/update-user-info",isAuthenticated,catchAsyncErrors(updateUser));
router.put("/update-avatar",isAuthenticated,catchAsyncErrors(updateAvatar));
router.put( "/update-user-addresses", isAuthenticated,catchAsyncErrors(updateAddress));
router.delete( "/delete-user-address/:id", isAuthenticated, catchAsyncErrors(deleteUser));
router.put("/update-user-password", isAuthenticated, catchAsyncErrors(updatePassword));
router.get( "/admin-all-users", isAuthenticated, isAdmin("Admin"), catchAsyncErrors(adminGetUsers));
router.delete("/delete-user/:id", isAuthenticated, isAdmin("Admin"), catchAsyncErrors(adminDeleteUser));

module.exports = router;
