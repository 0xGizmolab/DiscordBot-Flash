const { Message, Client } = require("discord.js");

module.exports = {
    name: "fasttype",
    aliases: ['typerace'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const txtgen = require('txtgen')
        const { FastType } = require('weky')
        const game = new FastType({
            message: message,
            winMessage: "GG you won!", //message sent when user types perfectly
            sentence: txtgen.sentence(), //sentence-to-be-typed
            loseMessage: 'Lost ;(', //message sent when user misspell it
            time: 50000, //time that user has to type in ms
            startMessage: 'Good Luck!' //message sent when user starts playing
        })
        game.start()
    },
};
