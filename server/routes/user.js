const express = require("express")
const router = express.Router()
const { getUsers, getUser, postUser } = require('../controllers/user')

router
    .route("/")
    .get(getUsers)
    .post(postUser)

router
    .route("/:id")
    .get(getUser)

module.exports = router;
