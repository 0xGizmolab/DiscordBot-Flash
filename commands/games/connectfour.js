const { Message, Client } = require("discord.js");

module.exports = {
    name: "connect4",
    aliases: ['connectfour'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const djsGames = require('djs-games')
        const ConnectFour = new djsGames.ConnectFour()
        ConnectFour.startGame(message)
    },
};
