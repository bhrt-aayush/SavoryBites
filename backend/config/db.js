import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://ayu:1122@cluster0.crrax0u.mongodb.net/fyp-savorybytes').then(()=>{
       console.log('DB connected') ;
    })
}