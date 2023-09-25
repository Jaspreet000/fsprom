const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt")

const {userModel} = require("./models/user-model.js");
const {userModel2} = require("./models/user-model.js");
const {userModel3} = require("./models/user-model.js");
const {connection} = require("./configs/db.js")

const app = express();
app.use(cors());
app.use(express.json());



app.post("/setq",async(req,res) => {
    const {subject,question,opt1,opt2,opt3,opt4,answer} = req.body;

    if(subject == "" || question == "" || opt1 == "" || opt2  == "" || opt3 == "" || opt4 == "" || answer == "" || answer>5 || answer<1)
    {
        return res.send({"msg":"Please fill all the options correctly."})
    }
    const alreadyExist = await userModel2.find({question});

    try {
        if(alreadyExist[0]){
            return res.send({"msg":"Question already exists !"});
        }
        else{
            const user = new userModel2({subject,question,opt1,opt2,opt3,opt4,answer});
            await user.save();
            res.send({"msg":"Your question is added successfully !"});
        }

    } catch (error) {
        res.status(404).send({"msg":"Something went wrong !"});
    }

});

app.get("/quedata/:subject",async(req,res)=>{

    const data = await userModel2.find({subject:req.params.subject});
    res.send(data);
})

app.post("/scores",async(req,res)=>{
    const {name,score,subject}=req.body;
    try{
        const userrr = new userModel3({name,score,subject});
        await userrr.save();
        res.send({"msg":"Data saved successfully !"});
    }
    catch(error)
    {
        res.status(404).send({"msg":"Something went wrong !"});
    }

})



app.post("/register",async(req,res) => {
    const {name,email,password} = req.body;

    if(name == "" || email == "" || password == "")
    {
        return res.send({"msg":"Please fill all credentials and password."})
    }

    const alreadyExist = await userModel.find({email});

    try {
        if(alreadyExist[0]){
            return res.send({"msg":"User already exists !"});
        }
        else{
            bcrypt.hash(password, 5 , async(err,hash) => {
                const user = new userModel({name,email,password:hash});
                await user.save();
                res.send({"msg":"Your account is created successfully !"});
            });
        }

    } catch (error) {
        res.status(404).send({"msg":"Something went wrong !"});
    }

});

app.post("/login",async (req,res) => {
    const {email,password} = req.body;

    if(email == "" || password == "")
    {
        return res.send({"msg":"Please fill all credentials and password."})
    }

    const alreadyExist = await userModel.find({email});

    try {
        if (alreadyExist[0]) {
            bcrypt.compare(password,alreadyExist[0].password,async (err,result) =>{
                if(result)
                {
                    res.send({"msg":"User logged in successfully !",user:alreadyExist});
                }
                else{
                    res.send({"msg":"Please check your password first !"});
                }
            })
            
        } else {
            return res.send({"msg":"Please create your account first and then login !"});
        }

    } catch (error) {
        res.status(404).send({"msg":"Something went wrong !"});
    }

});

app.listen(8080,async ()=>{
    try {
        await connection
        console.log("DB is connected!");
    } catch (error) {
        console.log("error");
        
    }
    console.log("Server is running at PORT 8080");
})