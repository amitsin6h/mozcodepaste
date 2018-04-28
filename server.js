var express =         require('express')
var http =            require('http');
var path =            require("path");


var app = module.exports = express();

app.set('views', __dirname + '/app');
app.use(express.static(path.join(__dirname, 'app')));


require('./server/routes.js')(app);

app.set('port', process.env.PORT || 8080);
http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});
