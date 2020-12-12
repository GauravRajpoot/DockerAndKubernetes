const express = require('express');

const app= express();

app.get('/',(req,res) =>{
res.send('Gaurav exploring docker');
});

app.listen(5050,()=>{
    console.log('Listening on port 5050');
})


