const express = require('express');
const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");
const router = express.Router();


router.post("/login", (req, res) => {
    const body = req.body;
    console.log("req body: " ,body);
    const passwordHash = bcrypt.hashSync(body.password, 10);
    console.log("password hash : ", passwordHash);

    const user = { email: body.email , password: passwordHash };
    console.log("user: ", user)
    userModel.create(user).then((data) => {
        console.log("getting data ", data);
    })
    res.send("you have logged in")
})



module.exports = router;