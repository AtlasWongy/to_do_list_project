const mysql = require('mysql');
var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "g5y2Pw9C",
    database: "todolistdatabase"
});

connection.connect((err)=>{
    if(!err)
    {
        console.log("Connected");
    }
    else
    {
        console.log(err);
    }
});

module.exports = connection;