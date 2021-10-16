const express = require('express');
const app = express();

app.get('/', (req, res) => {
	let name = req.query.name;
	let age = req.query.age;
	
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