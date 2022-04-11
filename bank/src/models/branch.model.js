const mongoose = require("mongoose")

const branchSchema = new mongoose.Schema({
    name:{type:String,required:true},
},
{
    versionKey: false,
    timestamps: true,
})

module.exports = mongoose.model("branch",branchSchema)
