const express = require('express')
const app = express()
const path = require('path');
app.use(express.json())
app.use(express.static("public"));



app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    // res.end('Hi there, Server is working')
});



app.listen(3000 , () => {
console.log('Server is running on port 3000....')
});


