const mysql=require("mysql");
const Promise =require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo ={
    host:"localhost",
    user: "root",
    password :"cdac",
    database :"project1"
}

async function addmessage(user){
    const connection =mysql.createConnection(dbinfo);
   await  connection.connectAsync();
   let sql='insert into user(message) values(?)'
   await connection.queryAsync(sql,[user.message]);
   await connection.endAsync();
}

let user={
    message:"hello are u there"
}

async function selectmessage()
{
    const connection=mysql.createConnection(dbinfo);
    await  connection.connectAsync();
    let sql='select * from user';
    const list = await connection.queryAsync(sql,[]);
    await connection.endAsync();
    console.log("hii")

    return list
}

module.exports={addmessage,selectmessage}