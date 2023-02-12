import mongoose from "mongoose";

const connectDB =(url)=>{
    mongoose.set("strictQuery", true);
    mongoose.connect(url)
    .then(()=>{
        console.log("Connected with MongoDB!")
    })
    .catch((err)=>{
        console.log(err)
        console.error("Failed to connected with MongoDB!")
    })
}

export default connectDB;