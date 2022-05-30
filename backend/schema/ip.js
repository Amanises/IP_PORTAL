const mongoose = require('mongoose') ; 



const ipSchema = new mongoose.Schema({
    sldc : String,
    ip : String,
    activeFrom : {
        type : Date,
        immutable : true,
        default : ()=> Date.now(),
    },
    activeTill : {
        type : Date,
        default : ()=> Date.now(),
    },
    submitBy : String,
    activeNow : Boolean,
})

module.exports = mongoose.model("ip",ipSchema);