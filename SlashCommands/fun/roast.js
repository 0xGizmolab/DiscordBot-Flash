const { Client, CommandInteraction } = require("discord.js");
const fetch = require("node-fetch");
const config = require("../../config");
module.exports = {
    name: "roast",
    description: "roast someone",
    options: [
        {
            name: "user",
            description: "Who do you want to roast",
            required: false,
            type: "USER"
        }
    ],

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {

        const { Slash } = require('djs-misc')
        const slash = new Slash({
            args: args,
            slashCommand: true,
            interaction: interaction,
            embedFooter: "Made With djs-misc", //The Footer of the embed
            embedTitle: "Get Roasted!", //The title of the embed
            embedColor: "RANDOM", //The color of the embed! (Use Hex codes or use the color name)
        })
        slash.roast()



    },
};
