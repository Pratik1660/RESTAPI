import mongoose from "mongoose";

//connect mongoose
mongoose.connect("mongodb://127.0.0.1:27017/Sample", {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Successfully connected to the DB")
})
.catch((err)=>{
    console.log(err)
})

export default mongoose;

