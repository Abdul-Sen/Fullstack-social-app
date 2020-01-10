const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const userAuthService = require('./userAuthService');
const { check, validationResult, sanitizeBody } = require('express-validator');


const app = express();

// JSON parser middleware to interpret JSON body requests
app.use(bodyParser.json({ type: 'application/json' }))


// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));


// An api endpoint for registering new users
app.post('/api/register', [
	check('userName').isLength({min: 6}).isAlphanumeric(),
	check('password').isLength({min: 5 }),
	check('email').isEmail().normalizeEmail(),
] , (req, res) => {

	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		console.log("validation failed");
		console.log(errors.array());
		return res.status(422).json({ errors: errors.array() });
	  }
	
	userAuthService.createNewUser(req.body).then((functionResponse)=>{

		console.log(functionResponse);

		res.send("user created");	

	}).catch((err)=>{

		console.log(err.message);

		if(err.code === 11000)
		{
			res.send("username or email already exists");
		}

		res.send("failed to create new user");
		
	})
	
});

// An api endpoint that returns a short list of items
app.get('/api/getList', (req, res) => {
	var list = ["item1", "item2", "item3"];
	res.json(list);
	console.log('Sent list of items');
});



// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const HTTP_PORT = process.env.PORT || 5000;
app.listen(HTTP_PORT,onHttpStart);

function onHttpStart(){
	console.log("server listening to requests on port " + HTTP_PORT);
	console.log("Starting DB");
	(async ()=>{
		let status = await userAuthService.connectToUserDB();
		if(status === 0)
		{
			console.log("connected to Users database");
		}
		else if(status === -1)
		{
			console.log("failed to connect to database");
		}
		else {
			console.log("Unexpected response");
			console.log (status);
		}

	})();
	
}