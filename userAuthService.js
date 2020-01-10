// require mongoose and setup the Schema
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
require('dotenv').config();

const Schema = mongoose.Schema;

// define the user schema
const userSchema = new Schema({
    "userName": {
        type: String,
        required: true,
        unique: true
    },
    "password": String,
    "email": {
        type: String,
        required: true,
        unique: true
    },
    "lastActiveAt": {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

let UserCollection = mongoose.model(process.env.DB, userSchema); //env in our current case, itemStore



/**
* Opens the default mongoose connection.
* connect to the localhost mongo running on default port 27017
* @returns status code.
* @0 - connected successfully
* @-1 - connection error
*/
module.exports.connectToUserDB = async function () {
    try {
        const DB_URL = process.env.DB_ROOT + process.env.DB;
        console.log(`Connecting to ${DB_URL}`);

        mongoose.set('useUnifiedTopology', true);
        mongoose.set('useNewUrlParser', true);
        var db = await mongoose.connect(DB_URL); //returns psudo-promise;

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

    /**
     * STEPS:
     * 1 - Validate data
     * 2 - hash bcrypt
     * 3 - Store in DB
     */

     // TODO TODAY

     

// let guestUser = new UserCollection({
//     userName: "GuestUser",
//     password: "Guest#!@123",
//     email: "guestEmail@domain.com",
//     lastActiveAt: "2020-01-01",
// });

// guestUser.save((err)=>{
//     if(err) {
//         console.log("There was an error saving the GusetUser company");
//       } else {
//         console.log(`The guestUser company was saved to the ${process.env.DB} collection`)
//       }
//         // exit the program after saving
//         process.exit();
// });

}