const { Message, Client } = require("discord.js");

module.exports = {
    name: "shuffleguess",
    aliases: ['shuffleguess'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        let randomWords = require('random-words');
        const word = randomWords()
        const { ShuffleGuess } = require('weky')
        const game = new ShuffleGuess({
            message: message,
            word: word,
            winMessage: "GG You Guessed the Word" //Or anything
        })
        game.start()
    },
};
