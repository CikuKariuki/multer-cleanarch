const makeDB = require('../data-access')
module.exports={
    deletePicture: function(){
        const db = makeDB()
        const deleted = db.collection(process.env.picturecollection).deleteOne({username: 'One Republic', picture: 'picture path', caption: 'But ever since I met you no vacancy...'})
        console.log(deleted)
    }
}