const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {	
	res.send(`
		<div>
			<form action="result" method="post">
				<label for="name"> Name </label>
				<input type="text" id="name" placeholder="Your name" name="name"/>
				<label for="age"> Age </label>
				<input type="text" id="age" placeholder="Your age" name="age"/>
				<button type="submit">Submit Query</button>
			</form>
		</div>
	`);
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