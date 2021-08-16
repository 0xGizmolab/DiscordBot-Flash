const { Message, Client } = require("discord.js");

module.exports = {
    name: "snake",
    aliases: ['snakegame'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const djsGames = require('djs-games')
        const SnakeGame = new djsGames.SnakeGame()
        SnakeGame.startGame(message)
    },
};
