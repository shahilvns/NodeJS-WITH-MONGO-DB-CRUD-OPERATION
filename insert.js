// Insert Data from one to one
// const dbconnect = require('./mongodb');
// const add = async ()=>{
//     let data = await dbconnect();
//     let result = await data.insertOne({name:'Priya singh', Age:40, course:'B.com', email:'priya@gmail.com'});
//     console.log(result);
// }
// add();
//inser Data Multiple Data
const dbconnect = require('./mongodb');
const add = async ()=>{
    let data = await dbconnect();
    let result = await data.insertMany(
        [
            {name:'sakshi singh', Age:38, course:'B.com', email:'sakshi@gmail.com'},
            {name:'shanu singh', Age:35, course:'B.com', email:'shanu@gmail.com'},
            {name:'supriya singh', Age:30, course:'B.com', email:'supriya@gmail.com'},
            {name:'shreya singh', Age:31, course:'B.com', email:'shreya@gmail.com'},

        ]
    );
    console.log(result);
}
add();

//Insert Data from One to one
// const databaseconnect = require('./mongodb');
// const main = async ()=>{
//     let data = await databaseconnect();
//     data = await data.insertOne({name:'Purnvasi Steel', Age:34, course:'BA', email:'purnvasi@gmail.com'});
//     console.log(data);
// }
// main();
