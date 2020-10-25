const fetch = require("node-fetch");
const data = require("../data/data.json");

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
