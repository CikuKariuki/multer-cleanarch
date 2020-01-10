const client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopoloy: true})

module.exports = function makeDB(){
    if(!client.isConnected()){
        client.connect()
    }
    return client.db(process.env.picturedb)
}