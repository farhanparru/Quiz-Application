const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


const userSchema = new mongoose.Schema({
   fullName:{
    type:String,
    required:true,
    trim:true,
    minlength:3
   },

   email:{
    type:String,
    required:true,
    trim:true,
    unique:true,
    lowercase:true,
    match: [/^\S+@\S+\.\S+$/, 'Email is invalid']
   },

   password:{
    type:String,
    required:true,
    trim:true,
    minlength:8,
   }
})


// Hash Password before saving

userSchema.pre('save', async function (next) {
    
})