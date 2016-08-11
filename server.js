'use strict';
// link des modules
var express = require('express');
var bodyParser = require('body-parser');
var sha1 = require('sha1');
var app = express();
// Activation du body parser pour recuperer les requetes POST from the forms
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// creation d'un repertoire public
app.use(express.static(__dirname+'/public'));
// definition du repertoir des views
app.set('views',__dirname+'/views');


// linkk des models
var Person = require('./models/PersonModel.js').Person;
var User   = require('./models/UsersModel').User;


// creation des routes et de l'api rest
app.get('/users',function (req,resp) {
    // on renvoie l'ensemble des users au format Json
    User.find(function (err,users) {
        if(err){
            // Il y'a une erreur on fait une 404
            console.log("erreur dans la recuperaion des users");
        }else{
            // les users sont recuperés et se trouvent dans la variable users
            resp.json(users);
            //resp.render('users.ejs',{users:users});
        }

    })
});
app.post('/user',function(req,resp){
    // ici on enregistre un nouveau user
    var user = {
        nom     : req.body.nom,
        prenom  : req.body.prenom,
        login   : req.body.login,
        password: sha1(req.body.password),  // on va hasher le password en sha1
    };
    User.create(user,function (err,user) {
       if(err){
           //handle one error
           console.log("error");
       } else{
           resp.json(user);
       }
    });

});

app.delete('/user/:id',function (req,resp) {
    // recuperation de l'id
    var id = req.params.id;
    console.log(id);
    User.get(id,function (err,user) {
        if(err){
            // handle one error  !! Unknown user
            console.log("utlisateur inexistant");
        }else{
            user.remove(function(err){
                if(err){
                    // impossible for removing this user
                }else{
                    // yeah deal !! this user is getting out of our database
                 console.log("well done !!!! lol");
                resp.json({"ok":"ok"});
                }
            })
        }
    })

});
app.put('/',function (req,resp) {

});
app.get('/handle',function (req,resp) {
    resp.render('index.ejs');
});
app.get('/handler',function (req,resp) {
    resp.render('index2.ejs');
})

app.listen(3000);
