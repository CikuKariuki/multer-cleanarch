module.exports={
    getPicture: function(){
        // const db = makeDB()
        // const gotten = db.collection(process.env.picturecollection).find()
        // console.log(gotten)
        var cursor = db.collection(process.env.picturecollection).find()
        cursor.each((err, doc)=>{
            console.log(doc)
        })
    }
}