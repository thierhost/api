'use strict';
// link des modules
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// Activation du body parser pour recuperer les requetes POST from the forms
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// recuperation du model Person
var Person = require('./models/PersonModel.js').Person;

// creation d'un repertoire public
app.use(express.static(__dirname+'/public'));

// definition du repertoir des views
app.set('views',__dirname+'/views');

// creation des routes et de l'api rest
app.get('/',function (req,resp) {
    // recuperation des infos from de la bdd en mongobd via le module mongooss
    resp.render('index.ejs');
});
app.post('/',function(req,resp){
    var people ={
        name: req.body.name,
        surname: req.body.surname
    };
    Person.create(people,function (error,people) {
        if (error){
            console.log("errreur");
        }else{
            resp.json(people);
        }
    })
 //   console.log(name);
});

app.delete('/',function (req,resp) {

});
app.put('/',function (req,resp) {

});

app.listen(3000);
