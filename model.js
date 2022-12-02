const mongoose = require('mongoose');

let Registeruser = new mongoose.Schema({
    username :{
        type : String,
        required : true,
    },
    email :{
        type : String,
        required : true,
        unique : true,
    },
    phoneno :{
        type : Number,
        required:true,
    },
    password :{
        type : String,
        required:true,
    },
    confirmpassword : {
        type : String,
        required : true,
    },
    place :{
        type : String,
        required:true,
    },
})

module.exports = mongoose.model('Registeruser',Registeruser)