console.log("internal routes connected");
const express = require("express");

const router = express.Router();



router.get('/', (req, res) => {
  res.send(` app is listening at http://localhost:3000/internal`)
})
router.post('/add', (req, res) => {
  res.send("you have submitted post")
})
module.exports = router;