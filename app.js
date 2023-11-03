import express from "express";
import bodyParser from "body-parser";

import productRoute from "./routes/product.js"

import mongoose from "./db/connect.js";

const app= express();
const port= 7000;


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());

app.use("/api/v1", productRoute)


app.listen(port, (err)=>{
    if(err){
        console.log(`Error in Running the server: ${err}`)
    }

    console.log(`Listening to the port http://localhost:${port}`);
    
});