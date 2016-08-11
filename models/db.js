'use strict';
/*
Inclusion des module de gestion de la base de données
 */
var orm = require("orm");
var mysql = require('mysql');
// connexion à la base de données
var db  = orm.connect("mysql://root:@127.0.0.1/api");

// si la connexion c'est bien passé on fait un console.log
db.on("connect", function (err, db) {
    console.log("databse connecte");
});

// En cas d'erreur sur la connexion à la base de données
db.on("error",function (err,db) {
    console.log("database exception ");
});
// exportation du module db 
 exports.db = db;
