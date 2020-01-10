//I think since this file is dependent on so much it should be in the detail/outermost level.

const express = require('express');
const dotenv = require('dotenv');
const MongoClient = require('mongodb').MongoClient;
const multer = require('multer');
dotenv.config()
const app = express()

//setting restrictions for types f files that can be uploaded
const fileFilter = (req, file,cb)=>{
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/gif'){
        cb(null, true);
    }else{
    cb(null, false);
}
} 
//detailed way of storing the uploaded files
const storage= multer.diskStorage({
    destination: (req, file, cb)=>{
        //choosing where the files will be stored
        cb(null, './uploads');
    },
    filename: (req,file,cb)=>{
        //choosing how the files shall be named.
        cb(null, new Date().toISOString()+ file.originalname)
    }
})
const upload = multer({
    storage: storage,
    limits:{
        fileSize: 1024 * 1024 *5
    },
    fileFilter: fileFilter
});



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
