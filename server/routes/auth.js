const express = require("express")
const router = express.Router()
const {
    signUp,
    signIn,
    signOut,
    getSelf,
    deleteSelf
} = require('../controllers/auth')
const { protect } = require('../middleware/auth')


router
    .route("/signup")
    .post(signUp)

router
    .route("/signin")
    .post(signIn)

router
    .route("/signout")
    .post(signOut)

router
    .route("/deleteself")
    .delete(protect, deleteSelf)

router
    .route("/getself")
    .get(protect, getSelf)

module.exports = router;
