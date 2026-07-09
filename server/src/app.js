import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import env from "./config/env.js";

const app = express();
app.use(helmet()); //security middleware
//cors
app.use(
    cors({
        origin:env.CLIENT_URL,
        credentials:true,
    })
);
//body parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//cookies 
app.use(cookieParser());
//Logger
app.use(morgan("dev"));
//health check route
app.get("/api/v1/health",(req,res)=>{
    res.status(200).json({
        sucess:true,
        message:"zara-perfume api  is running",
        environment:env.NODE_ENV,
        timestamp:new Date().toISOString(),
    });
});


import notFound from "./middleware/notFound.middleware.js";
import errorHandler from "./middleware/error.middleware.js";

// Routes will come here later

app.use(notFound);
app.use(errorHandler);

export default app;

