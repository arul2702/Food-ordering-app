import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://arulkarthip2021csea:6380288138@cluster0.2lxefqc.mongodb.net/food-del').then(()=>console.log("DB connected"))
}