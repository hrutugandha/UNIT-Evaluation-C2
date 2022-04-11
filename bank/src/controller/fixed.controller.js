const express = require("express")
const Fixed = require("../models/fixed.model")
const router = express.Router()

router.post("",async(req,res)=>{
    // const fixed = await Fixed.create(req.body)
    // return res.send({fixed})
    let today = new Date().toISOString().slice(0, 10)

    const startDate  = req.body.startDate;
    const endDate    = today;
    
    const diffInMs   = new Date(endDate) - new Date(startDate)
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    
    
    console.log(diffInDays);
})

module.exports = router