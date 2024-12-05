const databaseconnect = require('./mongodb');
const main = async ()=>{
    let data = await databaseconnect();
    data = await data.find({}).toArray();
    console.log(data);
}
main();