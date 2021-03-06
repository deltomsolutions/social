const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const userAuth = require("./routes/auth");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true},() =>{
    console.log("Connected to MongoDB")
});





//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

//app.get("/",(req,res)=>{
   // res.send("welcome to my homepage")
//})

//app.get("/users",(req,res)=>{
   // res.send("welcome to my users")
//})

app.use("/api/users", userRoute);
app.use("/api/auth", userAuth);



app.listen(8800,() =>{
    console.log("Backend server started")
})