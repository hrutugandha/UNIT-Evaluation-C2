const express = require("express")
const Master = require("../models/master.model")

const router = express.Router()

router.post('',async(req,res)=>{
    const master = await Master.create(req.body)
    res.send({master})
})

module.exports = router