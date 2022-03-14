const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const connect = () => {
    return mongoose.connect("mongoose://localhost:27017/evaluation")
}


//USER schema
const userSchema = new mongoose.Schema({
    "first_name": {type: String, required:true},
    "last_name": {type: String, required:true},
    "age": {type: String,required:true},
    "email": {type: String, required:true},
    "address": {type: String, required:true},
},
{
    timestamps: true,
    versionkey: false,
});

const user = mongoose.model("user",userSchema);

const BranchDetailSchema = new mongoose.Schema({
    "account_number": {type: String, required:true},
    "IFSC": {type: String,required:true},
    "MICR": {type: String, required:true},
    "userId":{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    }
},
{
    timestamps: true,
    versionkey: false,
});

const BranchDetailUser = mongoose.model("BranchDetailuser",BranchDetailSchema);


const MasterAccountSchema = new mongoose.Schema({
    "balance": {type: String, required:true},
    "userId":{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    }
},
{
    timestamps: true,
    versionkey: false,
});

const MasterAccountUser = mongoose.model("MasterAccountuser",MasterAccountSchema);


const SavingsAccountSchema = new mongoose.Schema({
    "balance": {type: String, required:true},
    "account_numberID": {
        type: mongoose.Schema.Types.ObjectId,
        ref:"BranchDetailUser",
        required:true,
    },
    "userId":{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    "interestRate" :{type: String, required:true}
},
{
    timestamps: true,
    versionkey: false,
});

const SavingsAccountUser = mongoose.model("SavingsAccountuser",SavingsAccountSchema);


const FixedAccountSchema = new mongoose.Schema({
    "balance": {type: String, required:true},
    "account_numberID": {
        type: mongoose.Schema.Types.ObjectId,
        ref:"BranchDetailUser",
        required:true,
        unique: true,
    },
    "userId":{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    "startDate" :{type: String, required:true},
    "InterestRate" :{type: String, required:true}
},
{
    timestamps: true,
    versionkey: false,
});

const FixedAccountUser = mongoose.model("FixedAccountuser",FixedAccountSchema);

app.get("/users", async(req,res) =>{
    try{
        const User = await user.find().lean().exec();

        return res.status(200).send({users:users});
    }catch(err){
        err.status(500);
        err.send({message:"something went wrong!"})
    }
})

app.post("/savingAccount", async(req,res) => {
    try{
        const User = await user.create(req.body);

        return res.status(201).send(SavingsAccountUser);
    }
catch(err){
    return res.status(500).send({message: err.message})
}
})

app.post("/FixedAccount", async(req,res) =>{
    try{
        const User = await user.create(req.body);

        return res.status(201).send(FixedAccountUser);
    }
catch(err){
    return res.status(500).send({message: err.message})
}
});


app.listen(5000, async() =>{
    try{
        await connect();
    }catch(err){
        console.log(err)
    }
    console.log("Listening on port 5000...");
})
