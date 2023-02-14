exports.getUsers = async (_, res) => {
    try {
        const users = await knex
            .select("*")
            .from('users')

        res.json({
            users
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
        const user = await knex
            .select("*")
            .from('users')
            .where('username', req.params.username)

        if (user.length == 0) {
            throw new Error(`no account with username ${req.params.username}`)
        }

        res.json({
            user
        })
    }
    catch (err) {
        console.error(err)
        res.json({
            errorMessage: err.message
        })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const affected = await knex('users')
            .where('id', req.params.id)
            .del()

        if (!affected) {
            throw new Error(`no user with id ${req.params.id}`)
        }

        res.json({
            success: true
        })
    }
    catch (err) {
        console.error(err)
        res.json({
            errorMessage: err.message,
        })
    }
}

