const { MongoClient } = require('mongodb');
require('dotenv').config();

let dbConnection
const uri = process.env.DB_URI;

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(uri)
        .then((client) => {
           dbConnection =  client.db()
           return cb()
        })
        .catch(err => {
            console.log(err);
            return cb(err)
        })
    },
    getDb: () => dbConnection
}