const express = require("express");
const app = express();
const cors =require("cors");
app.use(express.json());
app.use(cors());

const {addmessage,selectmessage}= require("./user");
const req = require("express/lib/request");

app.get("/users",async(req,res)=>{
    const list= await selectmessage();
    res.json(list);
});

app.post("/addUser",async (req,res)=>{
    const user =req.body;
    await addmessage(user);
    res.json({message :"message added"});
});

app.listen(4000,(console.log("server started successfully")))