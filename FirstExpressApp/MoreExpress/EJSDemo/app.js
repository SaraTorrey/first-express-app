let express = require("express");
let request = require( "request" );
let app = express();
let bodyParser = require( "body-parser" );


app.use(bodyParser.urlencoded({extended: true}));
app.use( express.static( "public" ) );
app.set( "view engine", "ejs" );

app.get( "/results", function ( req, res ) {
    let query = req.query.search;
    let url = "https://amdbapi.com/?s=" + query;
    request( url, function ( error, response, body ) {
        if ( !error && response.statusCode == 200 ) {
            let data = JSON.parse( body )
            res.render( "results", {data: data} );
        }
    } );
} );

let friends = ["Liz", "Mandy", "Pam", "Kim"];

app.get( "/", function ( req, res ) {
    res.render( "home" );
} );

app.post( "/addfriend", function ( req, res ) {
    var newFriend = req.body.newfriend ;
    friends.push( newFriend );
    res.redirect( "/friends" );
} );

app.get( "/friends", function ( req, res ) {
    res.render( "friends", {friends : friends} );
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