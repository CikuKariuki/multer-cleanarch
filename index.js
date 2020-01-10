//I think since this file is dependent on so much it should be in the detail/outermost level.

const express = require('express');
const dotenv = require('dotenv');
const MongoClient = require('mongodb').MongoClient;
const multer = require('multer');
const upload = multer({dest: 'uploads/'})
dotenv.config()
const app = express()


app.post('/instagramnode',upload.single('picture'), async(req,res)=>{
    console.log(req.file)
    var request = req.body
    //display here ya cursor to find all pictures.
    
    //returning on the server the result
    res.send(request)
    console.log(request)

})

//exiting the server
process.on('SIGINT', () => {console.log('Exited server');process.exit(); })


//initiating the server
var port = 3000
var server = app.listen(port, ()=>{
    console.log('listening');
});
