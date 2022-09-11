var express = require('express');
var multer = require('multer');
var upload = multer();
const cors = require("cors");
var path = require('path');
const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')
const port = new SerialPort({ path: 'COM3', baudRate: 9600 })
const parser = new ReadlineParser()
port.pipe(parser)
parser.on('data', console.log)

// const p = new Readline();
// port.pipe(p);

var app = express();

// app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload.array()); 


app.post('/update', function(req, res){
    console.log(req.body);
    // serialport.list().then (
    //     ports => ports.forEach(port =>console.log(port.path)),
    //     err => console.log(err)
    //   )
    str=""
    for(var x =0;x<12;x++){
        if(req.body.data[x]>40)str+="L"
        else str+="H"
    }
    console.log(str);
      port.write(str);
    res.send("hi")
 });

  app.get('/',(request, response)=>response.sendFile(path.join( __dirname + '/index.html')));
app.listen(4000);