var express = require("express");
var app = express();

app.use( express.static( "public" ) );
app.set( "view engine", "ejs" );

app.get( "/", function ( req, res ) {
    res.render( "home" );
} );

app.get( "/fallinlovewith/:thing", function ( req, res ) {
    let thing = req.params.thing;
    res.render( "love.ejs", {thingVar: thing});
} );

app.get( "/posts", function ( req, res ) {
    let posts = [
        {title: "Post 1", author: "Sara"},
        {title: "Funny Bunny", author: "Shabnam"},
        {title: "Super Cute Cat", author: "Susan"}
    ];
    res.render("posts", {posts: posts})
} );

app.listen(3000, process.env.IP, function (  ) {
    console.log("Server is listening!")
});