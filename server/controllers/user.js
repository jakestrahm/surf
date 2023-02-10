const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const knex = require("../db/db")

exports.getUsers = async (_, res) => {
    //todo further refining?
    try {
        const queryResult = await knex
            .select("*")
            .from('users')

        res.json({
            data: queryResult
        })
    }
    catch (err) {
        console.error(err)
        res.json({
            errorMessage: err.message
        })
    }
}

exports.getUser = async (req, res) => {
    try {
        const queryResult = await knex
            .select("*")
            .from('users')
            .where('id', req.params.id)

        res.json({
            data: queryResult
        })
    }
    catch (err) {
        console.error(err)
        res.json({
            errorMessage: err.message
        })
    }
}

exports.postUser = async (req, res) => {
    try {
        const queryResult = await knex
            .

            res.json({
                data: queryResult
            })
    }
    catch (err) {
        console.error(err)
        res.json({
            errorMessage: err.message
        })
    }
}
