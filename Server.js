const express= require('express');
const app= express();


app.get('/',(req,res)=>{
    res.send("Helluu from sanchit V1");

});

app.listen(3000, ()=>{
    console.log("server listening on port 3000");

});

