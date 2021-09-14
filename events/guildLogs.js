const client = require("../index");
const GuildSettings = require("../models/settings");

client.on("messageDelete", function(message){
    console.log(`message is deleted -> ${message}`);
});