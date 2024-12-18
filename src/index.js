// require('dotenv').config({ path: './.env' });  // isse bhi hota hai 

import dotenv from "dotenv";
import connectDB from "./db/index.js";
  
dotenv.config({ 
    path: './.env' 
});

console.log("Environment Variables Loaded:", process.env.MONGODB_URL);


connectDB()

 
 
 

// approach 1 

// import express from "express";
// const app = express();


// (async () => {
    
//     try {
        
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//         console.log("Database connected");
        
//         app.on("error", (error) => {
//             console.log("ERROR : " , error);
//             throw error;
//         })
        
//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         })
//     } 
//      catch (error) {
//         console.log(error);
//     }
// })();
