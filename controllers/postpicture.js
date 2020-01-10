

module.exports={
    postPicture: function(){
        const db = makeDB()
        const posted = db.collection(process.env.picturecollection).insertOne({username: 'One Republic', picture: 'picture path', caption: 'But ever since I met you no vacancy...', date: Date.now()})
        console.log(posted)
    }
}