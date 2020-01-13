//this is where the DB is initialised

const MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost';


const client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopoloy: true})

module.exports = function makeDB(){
    if(!client.isConnected()){
        client.connect()
    }
    return client.db(process.env.picturedb)
}