const { CommandInteraction, Client } = require('discord.js');

module.exports = {
    name: 'qrcode',
    description: 'Generate a qr code from a link',
    options: [
        {
            name: "link",
            description: "The Link to generate a qr code from",
            required: true,
            type: "STRING"

        }
    ],

    /**
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     * @param {string[]} args
     */
    run: async (client, interaction, args) => {
        const { Utils } = require('djs-utils')
        const util = new Utils({
        args: args,
        slashCommand: true,
        interaction: interaction,
        embedFooter: "Made With djs-utils", //The Footer of the embed
        embedTitle: "Generated A QR Code", //The title of the embed
        embedColor: "RANDOM", //The color of the embed! (Use Hex codes or use the color name)
        })
        util.qrcode()
        


    }

}