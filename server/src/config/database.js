import mongoose from  "mongoose";
import env from "./env.js";

const connectDB = async ()=>{
     try{
        const connection = await mongoose.connect(env.MONGO_URI);
        console.log("mongo connected successfully");
        console.log(`MongoDB connected: ${connection.connection.host}`);
        console.log(`Database: ${connection.connection.name}`);
    }
    catch(error){
        console.log("database connection failed");
        console.error(error.message);
        procsess.exit(1);
    }
};
//connection events 
mongoose.connection.on("connected",()=>{
    console.log("Mongodb connnection established");
});
mongoose.connection.on("disconnected",()=>{
    console.log("connection disconnnected ");
});
mongoose.connection.on("errror",(error)=>{
    console.log("mongo error: ",error.message);
});
export default connectDB;
