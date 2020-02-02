const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const mockUsersSchema = new Schema({
    "gender": String,
    "name" : {
        "title" : String,
        "first": String,
        "last" : String
    },
    "location": {
        "street": {
            "number": Number,
            "name": String
        },
        "city": String,
        "state": String,
        "country": String,
        "postcode": Number,
        "coordinates": {
            "latitude": String,
            "longitude": String
        },
        "timezone": {
            "offset": String,
            "description": String
        },
        "email": String,
        "dob": {
            "date": Date,
            "age": Number
        },
        "registered": {
            "date": Date,
            "age": Number
        },
        "phone": String,
        "cell": String,
        "id": {
            "name": String,
            "value": String
        },
        "picture": {
            "large": String,
            "medium": String,
            "thumbnail": String
        },
        "nat": String
    }
}, {timestamps: true});

module.exports = mockUsersSchema;