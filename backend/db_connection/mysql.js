const mysql = require('mysql');
const { mySQL }  = require("./config");
const connection = mysql.createConnection(mySQL);

connection.connect();

function query (preparedStatement, params) {
    console.log({preparedStatement, params});

    return new Promise((resolve, reject) => {
        connection.query(preparedStatement, params, (err, rows) => {

            if(err)
                return reject(err);

            return resolve({rows});
        } );
    } );
}

module.exports = Object.freeze({query});