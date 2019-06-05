const express = require('express');
const app = express();
const path=require('path');

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/angularpage.html'));
});

app.listen(2000);
console.log("server listening @ 2000");