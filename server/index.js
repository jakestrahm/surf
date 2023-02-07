const express = require('express')
const dotenv = require('dotenv')
const knexConfig = require('./db/knexfile')
const helmet = require('helmet')
const hpp = require('hpp')
const cors = require('cors')

dotenv.config()
const PORT = process.env.PORT || 6006

const knex = require('knex')(knexConfig[process.env.NODE_ENV])
const app = express()
const router = express.Router()

app.use(helmet())
app.use(hpp())

//routes
/* temp... */
app.use(router)
router.get("/", async (_, res) => {

    const q = await knex
        .select("*")
        .from('test')

    res.json({
        data: q
    })
})
/* ... */

app.listen(PORT, console.log(`listening on ${PORT}`))

//handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`error: ${err.message}`);

    //close server and exit process
    server.close(() => process.exit(1));
})
