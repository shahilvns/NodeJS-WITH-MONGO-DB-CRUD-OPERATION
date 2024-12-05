const dbconnect = require('./mongodb');
const update = async ()=>{
    let data = dbconnect();
    let result = (await data).updateOne(
        {name:'Ankita Singh'},{
            $set:{name:'Subharti singh', age:45, emial:'subharti@gmai.com'}
        }
    );
    console.log('Data update Successful');
}
update();