const router = require('express').Router()
const {addToDb, getFromDb, showTime} = require("./brain")

router.get("/", (req, res)=>{
    res.send("yes i'm workinhg")
})

// data example: {"Station ID": 1068, "RFID ID": "B1 B2 B3", "Scale Weight": 100}

router.post("/", (req,res)=>{
    let data = JSON.parse(JSON.stringify(req.body))
    console.log(typeof(data))
    try{
        let index = addToDb(data)
        showTime(index)
        res.send("done")
    }catch(err){
        console.log(err)
        res.send(err)
    }
})

router.get("/db", (req, res)=>{
    res.send(getFromDb())
})

module.exports = router