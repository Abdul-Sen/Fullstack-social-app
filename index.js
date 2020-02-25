const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const userAuthService = require('./services/userAuthService');
const mockUsersService = require('./services/mockUsersService');
const commentService = require('./services/commentsService');
const { check, validationResult, sanitizeBody } = require('express-validator');
const {query} = require('express-validator/check')
const cors = require('cors')


const app = express();
// ! Middleware setups
// Allow cors
app.use(cors())

// JSON parser middleware to interpret JSON body requests
app.use(bodyParser.json({ type: 'application/json' }))


// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));


// middleware function to authenticate token from a request header. Request should be
// in following form: Authorization: Bearer <access_token>
function verifyToken(req,res,next)
{	
	// grab token from header
	const bearerHeader = req.headers['authorization'];
	
	// check if bearer is undefind
	if(typeof bearerHeader !== 'undefined')
	{
		const tokenArray = bearerHeader.split(' ');
		const token = tokenArray[1];

		userAuthService.verifyToken(token).then((data)=>{
			
			next();

		}).catch((err)=>{

			console.log(err);

			res.status(403).json({
				error: "Token authentication failed"
			});

		})
	}
	else{

		//Forbidden
		res.sendStatus(403).json({
			message: "Need a token to access"
		});
	}

	//send token to verify
}


// logins user and sends JWT token
app.post('/api/login',[
	check('userName').isLength({min: 6}).isAlphanumeric()
], (req,res)=>{
	
	errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		console.log("validation failed");
		console.log(errors.array());
		return res.status(422).json({ errors: errors.array() });
	  }

	userAuthService.loginUser(req.body).then((data)=>{

		res.json({
			token: data
		});

	}).catch((err)=>{

		console.log(err);
		res.send("failed to login user");
	})

});


// e.g http://localhost:5000/api/getMockPage/?page=20
app.get('/api/getMockPage',[
	query('page').isNumeric().withMessage("only numeric value allowed").isLength({min:1}).withMessage("you need to pass in a page number")	
],(req,res)=>{
	let reg = /^\d+$/;
	if(reg.test(req.query.page)) //! Temporary solution while i figure out why isNumeric is not behaving as expected
	{
		mockUsersService.queryPages(req.query.page).then((data)=>{
			res.json(data);
		}).catch((err)=>{
			console.log(`error happened`);
			console.log(err);
			res.send(`error`);
		})
	}
});


// An api endpoint for registering new users
app.post('/api/register', [
	check('userName').isLength({min: 6}).withMessage("username must be at least 6 characters long").isAlphanumeric().withMessage("only alphanumeric characters allowed for username"),
	check('password').isLength({min: 5 }).withMessage("password must be minimum of 5 characters long"),
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
app.get('/api/getListSecure', verifyToken, (req, res) => {
	var list = ["item1", "item2", "item3"];
	res.status(200).json(list);
});

// An api endpoint that returns a short list of items
app.get('/api/getList', (req, res) => {
	var list = ["item1", "item2", "item3"];
	res.status(200).json(list);
});


app.get('/api/getAllUsers', (req,res)=>{

	userAuthService.getAllUsers().then((data)=>{
		console.log(data);
		res.json(JSON.stringify(data));
	}).catch((err)=>{
		console.log(err);
		res.send("failed");
	})
	
})

app.get('/api/getAllComments', (req,res)=>{

	commentService.getAllComments().then((data)=>{
		console.log(data);
		res.json(JSON.stringify(data));
	}).catch((err)=>{
		console.log(err);
		res.send("failed");
	})	
})


app.get('/api/getAllMockUsers', (req,res)=>{

	mockUsersService.getAllUsers().then((data)=>{
		console.log(data);
		res.json(JSON.stringify(data));
	}).catch((err)=>{
		console.log(err);
	})
	
})

app.get(`/api/threadComments/:threadID`,(req,res)=>{
	console.log(req.params);
	commentService.getThreadComments(req.params.threadID).then((data)=>{
		console.log(data);
		res.status(200).json(data);
	}).catch((err)=>{
		console.log(err);
		res.status(500).json({"error":`failed to load data`,"details":JSON.stringify(err)});
	})
})

//todo : Validate to make sure json has parent
app.post('/api/addReply', (req,res)=>{
	commentService.addReply(req.body).then((data)=>{
		console.log(`data is...`);
		console.log(data);
		res.status(200).send("comment chain updated");
	}).catch((err)=>{
		console.log(err);
		res.status(500).send('error updating comment chain');
	})
})

//todo : Validate to make sure json has parent
app.post('/api/addComment', (req,res)=>{

	commentService.addComment(req.body).then((data)=>{
		res.status(200).send("comment added"); //TODO: There shouldn't be a reponse to post request
	}).catch((err)=>{
		console.log(err);
	})
	
})


// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const HTTP_PORT = process.env.PORT || 5000;
app.listen(HTTP_PORT,onHttpStart);

function onHttpStart(){
	console.log("server listening to requests on port " + HTTP_PORT);
}