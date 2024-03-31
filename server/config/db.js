const mongoose = require("mongoose");

mongoose.set('strictQuery', false);


mongoose.connect("mongodb+srv://22it144:22it144@cluster0.hedxglw.mongodb.net/blog_application").then(()=>{
    console.log("connected!");
}).catch((err)=>{
    console.log(err);
})