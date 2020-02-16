require('dotenv').config();
const mongoose = require('mongoose')
const mockUsersSchema = require('../schemas/mockUserSchema');

//! Single instance run
var MockUserModel = (() => {
    try {
        const DB_URL = (process.env.ATLAS ? process.env.ATLAS : (process.env.DB_ROOT + process.env.DB_MOCKUSERS));
        console.log(`Connecting to ${DB_URL}`);

        mongoose.set('useUnifiedTopology', true);
        mongoose.set('useNewUrlParser', true);

        const db = mongoose.createConnection(DB_URL);
        db.on('error', (err)=>{
            console.log("db1 error!");
            console.log(err);
          });
          
          db.once('open', ()=>{
            console.log("mockusers success!");
          });
          
         return (db.model(process.env.DB_MOCKUSERS,mockUsersSchema,process.env.DB_MOCKUSERS));
    }
    catch (err) {
        console.log("mockUsers Failed to connect to MongoDB instance");
        console.log(err);
        return -1;
    }
})();

module.exports.getAllUsers = async function () {
    
    return await MockUserModel.find({}).exec(); // Exec returns promises
}


/**
* Returns the requested page of documents from collection
* @param pageNumber 
        numeric value of the page you requested
* @returns {object} 
*        containing query results in `docs` property 
*        and metadata information that can be used to determine
*        if more pages exist
*/
module.exports.queryPages = async function(pageNumber) {
   let docsTen = await MockUserModel.paginate({},{page:pageNumber, limit: 10});

   return docsTen;
}