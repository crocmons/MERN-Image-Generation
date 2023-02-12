import express from "express";
import * as dotenv from "dotenv"
import cors from "cors";
import connectDB from "./mongodb/connect.js"
import postRoutes from "./routes/postRoutes.js"
import dalleRoutes from "./routes/dalleRoutes.js"


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit:"50mb"}));
app.use("/api/v1/post",postRoutes);
app.use("/api/v1/dalle",dalleRoutes);



app.get("/",(req,res)=>{
    res.send ("Welcome to the DALL-E AI!")
})


const server = async()=>{

   try{
     connectDB(process.env.MONGO_URL);
     app.listen(5000,()=>{
         console.log("Server has started")
     })
   }catch(err){
      console.log(err)
   }


}
server();