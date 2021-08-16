const { Message, Client } = require("discord.js");

module.exports = {
    name: "tictactoe",
    aliases: ['ttt'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const { tictactoe } = require('reconlx')
        const member = message.mentions.members.first() 
        if(!member)  return  message.channel.send('Please specify a member')
    
    new tictactoe({
        player_two: member, 
        message: message
    })
    },
};
