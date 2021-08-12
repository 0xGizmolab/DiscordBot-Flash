
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    "token": "",
    "prefix": "-",
    "mongooseConnectionString": "",
    "MEMER_API_TOKEN": "", // Get The Memer API Token from https://discord.com/invite/emD44ZJaSA,
    "id": "",  // https://discordapp.com/developers/applications/ID/information,
    "clientSecret": "",  // https://discordapp.com/developers/applications/ID/information,
    "domain": "http://localhost/",
    "port": 3000,
    "usingCustomDomain": false
}


/**
 * !!!
 * You need to add a redirect url to https://discordapp.com/developers/applications/ID/oauth2.
 * Format is: domain:port/callback example http://localhost:8080/callback
 * - Do not include port if the port is 80.
 * !!!
 */


