const express = require ('express')
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.json());

app.use(express.static('./dist'));
app.use(express.static('./'));

app.listen(8000, () =>{
    console.log("server got started");
})

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/dist/index.html'));
});




app.get('/data', (req,res)=>{
    console.log("Data success")
    fs.readFile('./public/2.json', 'utf-8', (err, data)=>{
        if(err) throw err;
        res.send(data);
    })
    
})
app.get('/public/images/*', (req,res)=>{
    console.log(path.join(__dirname, req.url))

    fs.readFile(path.join(__dirname, req.url), 'utf-8', (err, data)=>{
        if(err) throw err;
        res.writeHead(200, {'Content-Type': 'image/jpeg'})
        res.write(data);
    })
    
})