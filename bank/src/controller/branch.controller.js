const express = require("express")
const Branch = require("../models/branch.model")

const router = express.Router()

router.post('',async (req,res)=>{
    const branch = await Branch.create(req.body)
return res.send({branch})
})
router.post('/gif',async (req,res)=>{
    const branch = await Branch.create(req.body)
return res.send({branch})
})
module.exports = router