const dbconnect = require('./mongodb');
const del = async ()=>{
    let data = await dbconnect();
    // let result = await data.deleteOne(  //Delete One to one data
    //     {Age:40}
    // );
    let result = await data.deleteMany({Age:45})
    console.log('Data Delete Successful',result);
}
del();