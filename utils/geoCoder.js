const NodeGeocoder = require('node-geocoder');
require('dotenv').config();
const mockUsersService = require('../services/mockUsersService');
const fs = require('fs');
const batchPromises = require('batch-promises');

function getDBData() {


    mockUsersService.getAllUsers().then((data) => {
        var newArray = [];
        data.forEach(element => {
            let obj = {
                _id: element._id,
                address: (element.location.street.number + " " + element.location.street.name + ", " + element.location.city + ", " + element.location.country),
                coordinates: {
                    latitude: "",
                    longitude: ""
                }
            };
            newArray.push(obj);
        });
        console.log(newArray);

        fs.writeFile('./data.json', JSON.stringify(newArray, null, 4), function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log("JSON saved to file complete");
            }
        });

    }).catch((err) => {
        console.log(`could not get all users`);
        console.log(err);
    });
}

function getCoordinates() {

    let geocoder = NodeGeocoder(
        {
            provider: "google",
            apiKey: process.env.GEOCODE_API_KEY,
            httpAdapter: 'https',
            formatter: null,
        }
    );


    fs.readFile('./utils/data/data.json', 'utf8', (err, dataArray) => {
        if (err) {
            console.log("File read failed:", err)
            return
        }
        dataArray = JSON.parse(dataArray);
        batchPromises(20, dataArray, currentData => new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(currentData);;
            }, 10000);
        }).then((result) => {
            geocoder.geocode(result.address).then((newData) => {
                console.log(`....................................`)
                let item = dataArray.find((value, index) => value._id == result._id);
                console.log(item);
                if (newData[0].latitude != undefined && newData[0].longitude != undefined) {
                    item.coordinates.latitude = "" + newData[0].latitude;
                    item.coordinates.longitude = "" + newData[0].longitude;
                    fs.appendFile('./utils/data/newData.json', (JSON.stringify(item, null, 2) + ",\n"), function (err) {
                        if (err) throw err;
                    });
                }
                console.log(item);
                console.log(`....................................`)
            })

        }));
    })
}

function updateDBData (){
    let dataArray = fs.readFileSync('./utils/data/newData.json', 'utf8',(err)=>{
        if(err) throw err;
    });
    dataArray = JSON.parse(dataArray);

    dataArray.forEach(element => {
        mockUsersService.updateCoordinates(element).then((data)=>{
            console.log(data);
        }).catch((err)=>{
            throw err;
        });
    });
}