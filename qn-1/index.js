const express = require('express')

let app = express()

app.get("/", function(req,res){
    res.send("Jack and Jill went up the hill")
})

app.get("/about", function(req,res){
    res.send("<h1>About My Website</h1>")
})

app.get("/greet/:name", (req,res)=>{
    let input = req.params.name
    console.log(input)
    res.send("hello " +input)
})


app.get("/add/:n1/:n2", (req,res)=>{
    let n1 = parseInt(req.params.n1)
    let n2 = parseInt(req.params['n2'])
    let total = n1 + n2
    res.send("total =" + total)
})

app.listen(3000, ()=>{
    console.log("server started")
})