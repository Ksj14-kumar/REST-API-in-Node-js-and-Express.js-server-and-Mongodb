const express = require('express');
const mongoose = require('mongoose');



const Schema= new mongoose.Schema({
    name:{type:String, required:true,trim:true},
    last:{type:String, required:true,trim:true},
    age:{type:Number, required:true},
    salary:{
        type:Number,
        required:true,
        trim:true
    },
    date:{type:Date, default:Date.now()}
})


module.exports=mongoose.model("data1",Schema)


