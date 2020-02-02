require('dotenv').config();
const mongoose = require('mongoose')
const mockUsersSchema = require('../schemas/mockUserSchema');

(async () => {
    try {
        const DB_URL = process.env.DB_ROOT + process.env.DB_MOCKUSERS;
        console.log(`Connecting to ${DB_URL}`);

        mongoose.set('useUnifiedTopology', true);
        mongoose.set('useNewUrlParser', true);

        var db = await mongoose.createConnection(DB_URL);
        db.on('error', (err)=>{
            console.log("db1 error!");
            console.log(err);
          });
          
          db.once('open', ()=>{
            console.log("db1 success!");
          });
          
        var MockUserModel = db.model(process.env.DB_MOCKUSERS,mockUsersSchema,process.env.DB_MOCKUSERS); //TODO: Convert to let or const?
        
        return MockUserModel;
    }
    catch (err) {
        console.log("Failed to connect to MongoDB instance");
        console.log(err);
        return -1;
    }
})();

module.exports.getAllUsers = async function () {
    
    return await MockUserModel.find({}).exec(); // Exec returns promises
}