const express = require("express");
const router = express.Router();

router.get('/',(req,res)=>{
    console.log("api");
    res.status(200).json({message:"successfully connected"})
})

module.exports = router;
