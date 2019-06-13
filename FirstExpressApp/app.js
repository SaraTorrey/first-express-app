var express = require( "express" );
var app = express();

app.get( "/", function ( req, res ) {
    res.send( "I'm Sara!" );
} );

app.get( "/bye", function ( req, res ) {
    res.send( "Baaaaai!" );
} );


app.get( "/kitty", function ( req, res ) {
    console.log( "cat" );
    res.send( "meow!" );
} );


app.listen(3000, process.env.IP, function (  ) {
    console.log("Server has started.")
});