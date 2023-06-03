const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())


const data = [
    {
        id: 0,
        text: "demo 0"
    },
    {
        id: 1,
        text: "demo 1"
    },
    {
        id: 2,
        text: "demo 2"
    },
    {
        id: 3,
        text: "demo 3"
    },
] 

app.get("/manas",(req,res)=>{
    console.log("request made");
    res.send(data)
})

app.listen(8080,()=>{
    console.log("listening");
})