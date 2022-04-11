const mongoose = require('mongoose')

const savingSchema = new mongoose.Schema({
    masterId:{type:mongoose.Schema.Types.ObjectId,ref:"master",required:true,unique:true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    accNum:{type:Number,required:true,unique:true},
    interestRate:{type:Number,required:true},
    balance:{type:Number,required:true}
},{
    versionKey: false,
    timestamps: true,
})

module.exports = mongoose.model('savings',savingSchema)