const express=require('express');
const mongoose = require("mongoose");
const Student=require('./model/student.model');
const app=express();
const port=3000;

app.get("/api/student",async(req,res)=>{
    try{
        const student=await Student.find();
        res.json(student);
    }catch(err){
        res.status(500).json({success:false,message:err.message});
    }
})



mongoose.connect('mongodb://localhost:27017/UniversityDB').then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.error('Error connecting to MongoDB:',err);
})
app.listen(port,()=>{
    console.log("Server is running on port 3000");
})