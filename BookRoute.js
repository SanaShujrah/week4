var express=require('express')
var router = express.Router()

//http://localhost:3000/books/


router.get('/',(req,res)=>{
    res.send('Get all books')
})

router.post('/',(req,res)=>{
    res.send('send all books')
})

router.put('/',(req,res)=>{
    res.send('update all books')
})

router.delete('/',(req,res)=>{
    res.send('delete all books')
})
module.exports=router