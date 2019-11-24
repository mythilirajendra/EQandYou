var express=require("express");
var bodyParser=require("body-parser");
var path = require('path');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/volunteer');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
	console.log("connection succeeded");
})

var app=express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: true
}));

app.post('/sign_up', function(req,res){
	var name = req.body.name;
	var email =req.body.email;
	var phone =req.body.phone;

	var data = {
		"name": name,
		"email":email,
		"phone":phone
	}
db.collection('details').insertOne(data,function(err, collection){
		if (err) throw err;
		console.log("Record inserted Successfully");

	});

	res.sendFile('sub_success.html', { root : __dirname});
})


app.get('/',function(req,res){
res.set({
	'Access-control-Allow-Origin': '*'
	});

res.sendFile('index.html', { root : __dirname});
});

app.get('/join_page',function(req,res){
res.set({
	'Access-control-Allow-Origin': '*'
	});

res.sendFile('join_page.html', { root : __dirname});
});

app.get('/1234',function(req,res){
res.set({
	'Access-control-Allow-Origin': '*'
	});

res.sendFile('1234.html', { root : __dirname});
});




app.listen(3000);




console.log("server listening at port 3000");
