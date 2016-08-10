var orm = require("orm");
var mysql = require('mysql');
var db  = orm.connect("mysql://root:@127.0.0.1/api");
//demarrage de la base données
db.on("connect", function (err, db) {
    console.log("databse connecte");
});

db.on("error",function (err,db) {
    console.log("database exception ");
});
 exports.db = db;
