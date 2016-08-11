var db = require('./db.js').db;

var User = db.define('user', {        
    // properties
    prenom    : String,                     
    nom       : String,
    login     : String,
    password  : String
}, {
    // options (optional)
});

// creation du model User dans la base de données
User.sync(function (err) {
    !err && console.log("done!");
});

exports.User = User;