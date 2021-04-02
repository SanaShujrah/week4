                         //Express Route

var express=require('express')
var R1=require('./RouteR1')
var BooksR=require('./BookRoute')
var app=express()

//http://localhost:3000/books

app.use('/books',BooksR)



//http://localhost:3000/students
app.use('/students',R1)

var server=app.listen(3000, ()=>{
    console.log("The server is running on port # 3000")
})