const express = require('express')
var cors=require('cors');
const app= express();
const port= process.env.PORT || 5000;

app.use(cors());
const courses=require('./data/courses.json');
const details=require('./data/details.json');

app.get('/course',(req,res)=>{
    res.send(courses);
})
app.get('/details',(req,res)=>{
    res.send(details);
})

app.get('/details/:id',(req,res)=>{
    console.log(req.params);
    const id=req.params.id;
    
    const selectedDetails=details.find(n=>n.id===id);
    res.send(selectedDetails);
})

app.listen(port,()=>{
    console.log('course Running on port', port)
})