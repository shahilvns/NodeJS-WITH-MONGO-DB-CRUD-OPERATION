dbconnect = require('./mongodb');

//Read Data Old Modern 
dbconnect().then((res)=>{
    res.find({}).toArray().then((data)=>{
        console.log(data);
    })
})

//Read Data / Find Data new Modern Code
// const main = async ()=>{
//     let data = await dbconnect();
//     data = await data.find().toArray();
//     console.log(data);                                                                                                                                                                                      
// }
// main();