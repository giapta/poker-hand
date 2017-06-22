// PACKAGES //
var express =  require("express");
var path = require("path");
var app = express();
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static(__dirname));

// ROUTER //
app.get("/*", function(req, res){
    res.render("index", {
        name: 'GiapTA bbbb'
    });
});


const port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Server is running on port "+ port +"...");
});
