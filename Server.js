const express= require('express');
const app= express();


app.get('/',(req,res)=>{
    res.send('Hello from Jenkins Pipeline again again this time is the last!');

});

app.listen(3000, ()=>{
    console.log("server listening on port 3000");

});

