const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    serviceID: {
        type : String,
        required : true,
        unique : true 
    } ,

    exp: {
        type : String
        
    } ,
    
    comment : {
        type : String
    }

})

const Feedback = new mongoose.model("Feedback" , feedbackSchema);
module.exports = Feedback ;