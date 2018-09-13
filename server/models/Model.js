import db from "../db/config";

export default class Model {
    constructor(){
        this.table = "";
    }
    
    getWhere = (name, value) => {
        const sql = `SELECT * FROM ${this.table} WHERE ${name} = "${value}"`;
        return sql;
    }


    getWhereOrder = (name, value, orderBy, orderedValue) => {
        const sql = `SELECT * FROM ${this.table} WHERE ${name} = ${value} ORDERBY ${orderBy} ${orderedValue}`;
        return sql;
    }


    all = () => {
        const sql = `SELECT * FROM ${this.table};`;
        return sql;
    }

    allOrder = (orderBy, orderedValue) => {
        const sql = `SELECT * FROM ${this.table} ORDERBY ${orderBy} ${orderedValue}`
        return sql;
    }


    insert = (data) => {
        const name = [];
        let value = [];
        let i = 0;
        for(var prop in data) {
            name[i] = `${prop}`;

            value[i] = `"${data[prop]}"`;

            i++;
        }
        let stringName = name.join();
        let dataName = value.join();
        const sql = `INSERT INTO ${this.table} (${stringName}) VALUES (${dataName})`;
        return sql;
    }

    delete = (id) => {
        console.log(id);
        const sql = `DELETE FROM ${this.table} WHERE id = "${id}"`;
        return sql;
    }
}
