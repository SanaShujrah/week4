var express=require('express')
var router = express.Router()

//http://localhost:3000/students/
router.get('/',(req,res)=>
{
    res.send("Welcome to my home page RouteR1")
})

//http://localhost:3000/students/about
router.get('/about',(req,res)=>
{
    res.send("Welcome to my about page of RouteR1")
})

module.exports=router