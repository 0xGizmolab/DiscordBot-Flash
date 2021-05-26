const fs = require('fs');
const { readdirSync } = require("fs");

module.exports = (client, Discord) =>{
    readdirSync("./commands/").forEach((dir) => {
        const command_files = readdirSync(`./commands/${dir}/`).filter((file) => file.endsWith(".js"));
    for(let file of command_files){
        const command = require(`../commands/${dir}/${file}`);
        if(command.name){
            client.commands.set(command.name, command);
        }else {
            continue;
        }
    }
    }
)}