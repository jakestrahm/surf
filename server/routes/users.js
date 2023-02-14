const express = require("express")
const router = express.Router()
const {
    getUsers,
    getUser,
    deleteUser
} = require('../controllers/user')

router
    .route("/")
    .get(getUsers)

router
    .route("/:username")
    .get(getUser)
    //TODO authorize for admin
    .delete(deleteUser)

module.exports = router;
