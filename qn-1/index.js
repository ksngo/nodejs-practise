const express = require('express')
const hbs = require('hbs')

let app = express()

app.set('view engine', 'hbs')

app.use(express.static('public'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.get("/", function(req,res){
    res.render("index")
})

app.get("/about", function(req,res){
    res.send("<h1>About My Website</h1>")
})

// app.get("/greet/:name", (req,res)=>{
//     let input = req.params.name
//     console.log(input)
//     res.send("hello " +input)
// })


app.get("/add/:n1/:n2", (req,res)=>{
    let n1 = parseInt(req.params.n1)
    let n2 = parseInt(req.params['n2'])
    let total = n1 + n2
    res.send("total =" + total)
})


app.get("/greet/form", (req,res)=>{
    
    res.render("form")
})

app.post("/greet/form", function(req,res){
    let returned = req.body.input
    res.send("hi "+ returned)
})

app.get("/find_average", (req,res)=>{
    
    res.render("form_numbers")
})

app.post("/find_average", (req,res)=>{
    
    average = (parseInt(req.body.input1) + parseInt(req.body.input2) + parseInt(req.body.input3))/3

    res.send("average is "+ average)
})


app.get("/feedback", (req,res)=>{
    
    res.render("form_feedback")
})

app.post("/feedback", (req,res)=>{
    
    console.log(req.body)

    let name = req.body.username
    let find = req.body.find
    let helpful = Array.isArray(req.body.helpful) ? req.body.helpful : [req.body.helpful]

    res.render("form_response", {
        "name" :name,
        "find" :find,
        "helpful" : helpful
    })
})

//end of routes

app.listen(3000, ()=>{
    console.log("server started")
})