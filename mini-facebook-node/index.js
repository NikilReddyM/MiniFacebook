const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser")
const UsersRouter = require("./router/users-router")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


require("./db-connection")
app.use('/users', UsersRouter)



app.listen(port, () => {
    console.log(`Mini-facebook-app listening at http://localhost:${port}`)
})