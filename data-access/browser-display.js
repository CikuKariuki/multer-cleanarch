const makeDB = require('../controllers/postpicture')
const dotenv = require('dotenv');

dotenv.config()
//put makedb in postpicure
var str = ""

module.exports = function display(){
    const db = makeDB.postPicture()
    var cursor = db.collection(process.env.picturecollection)
    cursor.each((err,item)=>{
        if(item!=null){
            str = str + item.username
        }
    });

}