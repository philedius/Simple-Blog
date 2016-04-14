var express = require('express');
var path = require('path');

var app = express();
var port = 5000;
app.set('views', path.join(__dirname, 'public', 'views'));

app.set('view engine', 'jade');
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));

app.get('/', function (req, res) {
	res.render('index', {image: '03.jpg', title: 'Infinity Milk', description: 'The Greater Symbol & The Hash!'});
});

app.get('/article', function (req, res) {
	res.render('article', {image: '04.jpg', title: 'King Of Limbs', description: 'Song One Puzzle Puzzles Puzzled Puzzle Puzzlers.'});
});

app.listen(port, function()	{
	console.log('Listening on port ' + port);
});