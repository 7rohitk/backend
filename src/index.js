// require('dotenv').config({ path: './.env' });  // isse bhi hota hai 

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from './app.js'

dotenv.config({ 
    path: './.env' 
});

console.log("Environment Variables Loaded:", process.env.MONGODB_URL);


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {     
        console.log(`Server is running on port ${process.env.PORT}`);
        
    })
}).catch((error) => {
    console.log("mongodb connection failed !!!!! : ",error);
})


  
 
 

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
