const mongoose = require("mongoose")

const masterSchema = new mongoose.Schema({
    Balance:{type:Number,required:true,default:0},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true,unique:true},
    branchId:{type:mongoose.Schema.Types.ObjectId,ref:"branch",required:true},
},
{
    versionKey: false,
    timestamps: true,
})

module.exports = mongoose.model("master",masterSchema)
