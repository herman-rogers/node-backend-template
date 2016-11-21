var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes');
var cors = require('cors');
var app = express();

app.set('port', (process.env.PORT || 5000));

//MiddleWare
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

routes.appRouter(app);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

exports.app = app;
