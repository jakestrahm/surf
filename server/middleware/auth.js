const jwt = require('jsonwebtoken');
const knex = require('../db/db')

exports.protect = async (req, _, next) => {

    let token = req.headers.authorization?.startsWith('Bearer') &&
        req.headers.authorization.split(' ')[1]

    if (!token) {
        return next(new Error('not permitted to access this route'))
    }

    try {
        const secret = process.env.JWT_SECRET
        const decoded = jwt.verify(token, secret)

        //why? gives us access to the curent user in the req/res object
        req.user = await knex('users')
            .select('*')
            .where('email', decoded.email)

        next()
    } catch (err) {
        return next(new Error('not permitted to access this route'))
    }

}
