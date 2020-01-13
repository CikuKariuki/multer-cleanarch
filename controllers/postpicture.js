const makeDB = require('../data-access/db-init')

module.exports={
    postPicture: function(){
        const db = makeDB()
        const posted = db.collection(process.env.picturecollection).insertOne({username: 'Ray', picture: '/uploads/2020-01-10T07:49:34.578Zray-princess and the frog.png', caption: 'Never take directions from a gator', date: Date.now()})
        console.log(posted)
    }
}