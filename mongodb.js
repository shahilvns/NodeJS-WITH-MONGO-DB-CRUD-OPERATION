const {MongoClient} = require('mongodb');
const MongoUrl = 'mongodb://127.0.0.1:27017';
const Client = new MongoClient(MongoUrl);
const Database = 'University';

async function dbconnection() {
    let result = await Client.connect();
    let db = result.db(Database);
    return db.collection('Student');
}
module.exports = dbconnection;