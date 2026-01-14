const mysql = require('mysql2');


const dbserver={
    host: "localhost",
    user: "root",
    password: "Sai@1406",
    database: 'customers'
};
const connection=mysql.createConnection(dbserver);
connection.connect(function(err){
    if(err){
        console.log("Connection Unsucessful.."+err)
    }
    else{
        console.log("Connection Sucessful.." )
    }
});

module.exports = connection;
