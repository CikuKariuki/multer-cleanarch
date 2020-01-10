module.exports={
    updatePicture: function(){
         const db = makeDB()
         const updated = db.collection(process.env.picturecollection).findOneAndUpdate({caption:'picture.caption'}, {$set:{caption:'updated caption'}})
         console.log(updated)
    }
}