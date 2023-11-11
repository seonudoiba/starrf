const express = require('express')
const router = express.Router()
const { isAuthenticated, isAdmin, isSeller } = require("../middleware/auth");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const { createEvent, getEvent, getEventId, deleteEvent, adminGetEvent } = require("../controller/event");

// create event
router.post("/create-order",catchAsyncErrors(createEvent));

router.post("/create-event",catchAsyncErrors(createEvent));

router.get("/get-all-events",getEvent);

router.get(
    "/get-all-events/:id",
    catchAsyncErrors(getEventId));

router.delete(
    "/delete-shop-event/:id",
    catchAsyncErrors(deleteEvent));

router.get(
    "/admin-all-events",
    isAuthenticated,
    isAdmin("Admin"),
    catchAsyncErrors(adminGetEvent));


module.exports = router;