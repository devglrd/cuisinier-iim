import mysql from "mysql";


let db = mysql.createConnection({
    host : "35.240.51.250",
    user: "root",
    password : "",
    database : "cuisiniers"
});

export default db;