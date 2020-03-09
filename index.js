var express = require('express'),
    app = express();

    app.get('/', function(req, res){
        res.json({message: "Hi there from express!"});
    })

    app.get('/happy', function(req, res){
        res.send(":)");
    })

app.listen(3000, function(){
    console.log("app is running on port 3000");
})