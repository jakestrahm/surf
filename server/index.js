const express = require('express')
const dotenv = require('dotenv')
const helmet = require('helmet')
const hpp = require('hpp')
const cors = require('cors')
const knex = require('./db/db')
const userRouter = require('./routes/user')

//set port
dotenv.config()
const PORT = process.env.PORT || 6006

//create express instance
const app = express()

//middleware
app.use(helmet())
app.use(hpp())

//routes
app.use('/api/v1/user', userRouter)

//listen for requests
app.listen(PORT, console.log(`listening on ${PORT}`))

//handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`error: ${err.message}`);

    //close server and exit process
    server.close(() => process.exit(1));
})
