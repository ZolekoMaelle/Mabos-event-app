const mysql=require('mysql')

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'evena'
});

connection.connect((err)=>{
    if(err){
        console.error('erreur de connection à la base de données:',err);
        return;
    }
    console.log('connection à la base de données reuissie.');
});

module.exports=connection;