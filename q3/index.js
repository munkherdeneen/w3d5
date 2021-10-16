const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended: true}));
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/css", express.static(path.join(__dirname, "../q2", "css")));

app.get('/', (req, res) => {	
	const date = new Date();
	const hour = date.getHours();
	let resourceFile = path.join(__dirname, "public", "night.html");
	
	if(6 <= hour && hour <= 18) {
		resourceFile = path.join(__dirname, "public", "day.html");
	}
	
	res.sendFile(resourceFile);
});

app.post("/result", (req, res) => {
	let {name, age} = req.body;
	
	console.log(req.url, req.method, req.headers);
	if (!name) {
		name = "person";
	}
	if (!age) {
		age = "99";
	}
	
	res.send(`Welcome ${name} with age of ${age}`);
});

app.listen(3000);