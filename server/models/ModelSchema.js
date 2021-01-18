const mongoose = require('mongoose');
const infoSchema = mongoose.Schema({ 
   name: String,
   status: String,
   date: Number,
   comment: String
});
module.exports = mongoose.model("emailCollection", infoSchema);

