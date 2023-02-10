
const express=require('express');

const app=express();


app.get('/',(req,res)=>{
    res.send('umesh is a genius.......')
})


app.get('/newuser',(req,res)=>{
    res.send('new user added')
app.listen(5000,()=>{
    console.log('server is running');
})

 
