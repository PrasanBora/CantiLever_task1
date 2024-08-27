
const port = 4000;
const express = require("express");
const app = express();

const mongoose =  require("mongoose");
const jwt = require("jsonwebtoken");
const multer  = require("multer");

const path = require("path");
const cors = require("cors");
require('dotenv').config();
const url = process.env.MONGO_URL;


app.use(express.json());
app.use(cors());


mongoose.connect(url);

//api creation

app.get("/",(req,res)=>{
    res.send("Expess is running");
    
})

// image storage 

const storage = multer.diskStorage({
    destination: './upload/images',
    filename : (req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }//ext name to get the file extension 
})

const upload = multer({storage:storage})

// upload endpoint 


app.use('/images',express.static('upload/images'))

app.post("/upload",upload.single('product'), (req,res)=>{
  res.json({
    success:1,
    image_url:`http://localhost:${port}/images/${req.file.filename}`
  })
})

// schema for product creation 

const Product = mongoose.model("Product",{
    id:{ 
        type: Number,
        required:true },
        name:{
          type:String,
          required:true,
        },
        image:{
          type:String,
          required:true,
        },
        category:{
          type:String,
          required:true,
        },
        new_price:{
          type:Number,
          required:true,
        },
        old_price:{
          type:Number,
          required:true,
        },
        date:{
          type:Date,
          default:Date.now,
        },
        avilable:{
          type:Boolean,
          default:true,
        },  
})

app.listen(port,(error)=>{
    if(!error)
    {
        console.log("Server running on Port " + port)
    }
    else 
      console.log("Error "+error)
})




