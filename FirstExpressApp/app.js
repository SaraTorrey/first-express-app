var express = require( "express" );
var app = express();

app.get( "/", function ( req, res ) {
    res.send( "Hi! Welcome to my exercise!" );
} );

app.get( "/speak/:animal", function ( req, res ) {
    var sound = {
        pig: "oink",
        cow: "moo",
        dog: "woof",
        frog: "rebbit",
        duck: "quack"
};

    var animal = req.params.animal.toLowerCase();
    var sound = sound [animal];
    res.send( "The " + animal + " says  " + sound );
} );

/*app.get( "/", function ( req, res ) {
    res.send( "Hi! Welcome to my exercise!" );
} );

app.get( "/repeat/:message/:times", function ( req, res ) {
    var message = req.params.message;
    var times = Number(req.params.times);
    var result = "";

    for ( var i = 0; i < times; i++ ) {
        result += message + " ";
    }
    res.send( result );
} );

app.listen(3000, process.env.IP, function (  ) {
    console.log("Server has started.")
});*/