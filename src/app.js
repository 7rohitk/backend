import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(cors(    
    
    {
     origin : process.env.CORS_ORIGIN,
     credentials : true
    }
))

app.use(express.json({limit : "16kb"}));  
app.use(express.urlencoded({extended : true , limit : "16kb"}));
app.use(express.static("public"));

app.use(cookieParser()); // send and receive cookies from user - use by only server


// routes import
import userRoutes from "./routes/user.routes.js";

// routes declaration   
app.use("/api/v1/user", userRoutes)
// http://localhost:8000/api/v1/user/register

 
export {app}




