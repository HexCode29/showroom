const fetch = require("node-fetch");
const data = require("../data/data.json");

// const cloudinary = require("cloudinary").v2;


// cloudinary.config({
//     cloud_name: "blogpost",
//     api_key: "388384354365747",
//     api_secret: "BxvVjuvkAWaTSITNCABoOBFrBXI",
//   })

// var data = [];

// cloudinary.api.resources({type: "upload"}, function(err, res){
//     data = res.resources;
//     console.log(data);
// })

exports.handler = async () => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET'
    }
    return{
        statusCode: 200,
        headers,
        body: JSON.stringify(data),
    }
}
