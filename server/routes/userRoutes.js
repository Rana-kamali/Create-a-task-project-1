const express = require('express');
const userSchema = require("../models/userSchema");
const router = require('./internalRouts');


router.post("/login", (req, res) => {
    const requestBody = [{ email: req.body.email, password: req.body.password }];
    console.log("req body: " ,requestBody);
    userSchema.create(requestBody).then((data) => {
        console.log("getting data ", data);
    })
    res.send("you have logged in")
})



module.exports = router;