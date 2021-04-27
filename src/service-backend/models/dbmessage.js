const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    message: {
        type : String,
        required : true
    } 

})

const Message = new mongoose.model("Message" , messageSchema);
module.exports = Message ;