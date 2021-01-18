const express = require('express');
const mongoose = require('mongoose');
const internalRouts = require("./routes/internalRouts");
const modelSchema = require("./models/ModelSchema");
const userSchema = require("./models/userSchema");

mongoose.connect('mongodb://localhost:27017/eventManagement', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const app = express()
const port = 3000;

app.use(express.json());

app.use("/internal", internalRouts);
app.get('/', function (req, res) {
  res.send(` app is listening at http://localhost:${port}`)
})
 

app.listen(port,()=>
console.log(` app is listening at http://localhost:${port}`)
);