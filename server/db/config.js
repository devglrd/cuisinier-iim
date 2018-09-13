import mysql from "mysql";


let db = mysql.createConnection({
    host : "127.0.0.1",
    user: "root",
    password : "",
    database : "cuisiniers"
});

export default db;