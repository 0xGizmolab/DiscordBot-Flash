const fetch = require("node-fetch");
const { MessageEmbed } = require('discord.js');


module.exports = {
    name: 'gif',
    aliases: [],
    description: 'get a gif of your choice',
    category: '',
    cooldown: 5,
    permissions: [],
    usage: 'f-gif <query>',
    async execute(message, args, cmd, client, Discord, profileData) {
    const search = args.join(' ');
    if(!search) return message.reply('Please Mention A Keyword!')

     
    let url = `https://g.tenor.com/v1/search?q=${search}&key=${process.env.TENORKEY}&ContentFilter=medium`;
    let response = await fetch(url);
    let json = await response.json();

    const index = Math.floor(Math.random() * json.results.length);
    
    message.channel.send(json.results[index].url)        
      
    }
}