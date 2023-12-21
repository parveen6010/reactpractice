const express = require("express");
const connectDB = require("./db/config");
const dotenv = require("dotenv");
 const User = require("./db/User") 
const cors = require("cors");
// const User = require("./db/User");
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors());

// app.get("/",(res,resp) =>{
//     resp.send("working...")
// })

 app.post("/register", async (req,resp)=>{
    let user = new User(req.body);
    let res = await user.save();
    resp.send(res);
 })

 

app.listen(5000); 