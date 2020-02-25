require('dotenv').config();
const mongoose = require('mongoose')
const CommentsSchema = require('../schemas/commentsSchema');

//! Single instance run
var CommentsModel = (() => {
    try {
        const DB_URL = (process.env.ATLAS ? process.env.ATLAS : (process.env.DB_ROOT + process.env.DB_COMMENTS));
        console.log(`Connecting to ${DB_URL}`);


        const db = mongoose.createConnection(DB_URL,{useNewUrlParser: true, useFindAndModify: false ,dbName:process.env.DB_COMMENTS, useUnifiedTopology: true});

        db.on('error', (err)=>{
            console.log("db1 error!");
            console.log(err);
          });
          
          db.once('open', ()=>{
            console.log("comments success!");
          });
          
         return (db.model(process.env.DB_COMMENTS,CommentsSchema,process.env.DB_COMMENTS));
    }
    catch (err) {
        console.log("comments service Failed to connect to MongoDB instance");
        console.log(err);
        return -1;
    }
})();

/**
 * ! CRUD - Create comment - addComment - addReply
 */


module.exports.addComment = async function (comment){ 

    let result = await CommentsModel.create(comment);
    return result;
}

module.exports.addReply = async function(comment)
{
    console.log(comment);
    let result = await CommentsModel.replaceOne({
        "_id": comment._id
    },
    comment
    );
        return result;
}

module.exports.getThreadComments = async function(threadID)
{
    let resultDoc = await CommentsModel.find({"parentID": threadID}).exec();
    console.log(resultDoc);
    return resultDoc;
}

module.exports.getAllComments = async function () {
    
    return await CommentsModel.find({}).exec(); // Exec returns promises
}


// /**
// * Returns the requested page of documents from collection
// * @param pageNumber 
//         numeric value of the page you requested
// * @returns {object} 
// *        containing query results in `docs` property 
// *        and metadata information that can be used to determine
// *        if more pages exist
// */
// module.exports.queryPages = async function(pageNumber) {
//    let docsTen = await MockUserModel.paginate({},{page:pageNumber, limit: 10});

//    return docsTen;
// }
  