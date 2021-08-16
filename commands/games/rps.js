const { Message, Client } = require("discord.js");

module.exports = {
    name: "rps",
    aliases: ['rockpaperscissors'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const djsGames = require('djs-games')
        const RockPaperScissors = new djsGames.RockPaperScissors()
         RockPaperScissors.startGame(message)

    },
};
