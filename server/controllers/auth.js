//TODO add status codes to responses
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const knex = require("../db/db")

exports.getSelf = async (req, res) => {
    try {
        const self = await knex('users')
            .where('id', req.user[0].id)

        res.json({
            self
        })
    }
    catch (err) {
        console.error(err)
        res.json({
            errorMessage: err.message,
        })
    }

}

exports.deleteSelf = async (req, res) => {
    try {
        await knex('users')
            .where('id', req.user[0].id)
            .del()

        res.json({
            success: true,
        })
    }
    catch (err) {
        console.error(err)
        res.json({
            errorMessage: err.message,
        })
    }

}

exports.signUp = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 12)
        const queryResult = await knex('users')
            .insert({
                username: req.body.username,
                email: req.body.email,
                password_hash: hashedPassword,
            },
                ['id']
            )

        res.json({
            newUserId: queryResult
        })
    }
    catch (err) {
        console.error(err)
        res.json({
            errorMessage: err.message,
        })
    }

}

//TODO  REFRESH TOKEN
exports.signIn = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            throw new Error('provide an email and password')
        }

        const user = await knex('users')
            .select('*')
            .where('email', email)

        const retrievedPasswordHash = user[0].password_hash
        const isMatch = await bcrypt.compare(password, retrievedPasswordHash)

        if (!isMatch) {
            throw new Error("wrong password or email")
        }

        const payload = { email: email }
        const secret = process.env.JWT_SECRET
        const token = jwt.sign(payload, secret)

        res.json({ token, user })
    }
    catch (err) {
        console.error(err)
        res.json({
            errorMessage: err.message,
        })
    }
}

exports.signOut = async (req, res) => {
    try {
        //is this is dependent on how the token is stored on the frontend?
    }
    catch (err) {
        console.error(err)
        res.json({
            errorMessage: err.message,
        })
    }
}
