const express = require("express")
const router = express.Router()
const UsersModel = require("../schema/users-schema")

router.post("/register", (req, res) => {
    const data = req.body

    UsersModel.count({ "email": data.email }, (err, count) => {
        if (count > 0) {
            res.send("Email already exists, Please Log In")
        }
        const user = new UsersModel(data)
        user.save()
        res.send("successfully added user")
    })
})

router.post("/login", (req,res)=>{
    const data = req.body
    UsersModel.exists({"email":data.email, "password":data.password}, (err, data)=>{
        if(err || !data){
            res.send("user not logged in")
        }
        res.send("user  logged in")
    })
})

module.exports = router