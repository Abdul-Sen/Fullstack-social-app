// require mongoose and setup the Schema
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userSchema = require('../schemas/userSchema');
require('dotenv').config();

// let UserCollection = mongoose.model(process.env.DB_USERS, userSchema); //env in our current case, itemStore

/**
* Opens the default mongoose connection.
* connect to the localhost mongo running on default port 27017
* @returns status code.
* @0 - connected successfully
* @-1 - connection error
*/
module.exports.connectToUserDB = async function () {
    try {
        const DB_URL = process.env.DB_ROOT + process.env.DB_USERS;
        console.log(`Connecting to ${DB_URL}`);

        mongoose.set('useUnifiedTopology', true);
        mongoose.set('useNewUrlParser', true);
        
        var db1 = await mongoose.createConnection(DB_URL);
          
        const UserModel = db1.model('users', userSchema);
        let res = await UserModel.find({}).exec();
        console.log(res);

        
        // var db = await mongoose.connect(DB_URL); //returns psudo-promise;

        return 0;
    }
    catch (err) {
        console.log("Failed to connect to MongoDB instance");
        console.log(err);
        return -1;
    }
}


/**
* Get the list of all the users in the DB, dont know why but you can do it.
* @returns ArrayList<User>
*/
module.exports.getAllUsers = async function () {
    return await UserCollection.find({}).exec(); // Exec returns promises
}

/**
 * Adds new user to the MongoDB user collection
 * @param userData { username: required, password: required, }
 */
module.exports.createNewUser = async function(userData) {

         let salt = await bcrypt.genSalt(12);

         let hash = await bcrypt.hash(userData.password,salt);

         userData.password = hash;

        let result = await UserCollection.create(userData);
        return result;
}

/**
 * Validates user credentials against MongoDB
 * @param userCred { username: required, password: required }
 * @returns a JWT token that user can use to access restricted routes for a limited time
 */
module.exports.loginUser = async function(userCred) {
    
    let dbUser = await UserCollection.findOne({ userName: userCred.userName }).exec();

    let matchingPassword = await bcrypt.compare(userCred.password,dbUser.password);

    console.log(`password matching? ${matchingPassword}`);
    if(matchingPassword){

       let token =  jwt.sign(userCred,process.env.PRIVATE_KEY,{
           expiresIn: "30min"
       });
       return token;       
    }
    return -1;
}

/**
 * Verifies a token against private key
 * @param token a JWT token
 */
module.exports.verifyToken = async function(token){

    // Wrapping it in promise to be consistant with the API
    return new Promise((resolve,reject)=>{
        jwt.verify(token,process.env.PRIVATE_KEY,(validationError, authData)=>{
            if(validationError)
            {
                console.log(validationError);
                reject("failed to verify");
            }
            resolve("verified");
        })
    })
}