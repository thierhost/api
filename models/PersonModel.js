var db = require('./db.js').db;
///////// creation de models pour la base de données
var Person = db.define('person', {        // 'person' will be the table in the database as well as the model id
    // properties
    name    : String,                     // you can use native objects to define the property type
    surname : { type: "text", size: 50 }  // or you can be specific and define aditional options
}, {
    // options (optional)
});

Person.sync(function (err) {
    !err && console.log("done!");
});

exports.Person = Person;