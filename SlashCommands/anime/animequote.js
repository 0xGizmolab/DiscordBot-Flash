const { Client, CommandInteraction, MessageEmbed} = require("discord.js");

module.exports = {
    name: "quote",
    description: "Get Anime qoutes",
    options: [
        { 
            name: 'name', 
            description: "which anime do you want the quote from",
            type: "STRING",
            required: false,
        }
    ],

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const [title] = args 
        if(!title){
        const { Slash } = require('djs-anime')
        const slash = new Slash({
        args: "RANDOM",
    
        interaction: interaction,
        embedFooter: "Made With djs-anime", //The Footer of the embed
        embedTitle: `Here's a Random Anime Qoute`, //The title of the embed
        embedColor: "RANDOM", //The color of the embed! (Use Hex codes or use the color name)
        })
        slash.quote()
        
    } else {
        const { Slash } = require('djs-anime')
        const slash = new Slash({
        args: args,
        interaction: interaction,
        embedFooter: "Made With djs-anime", //The Footer of the embed
        embedTitle: `Here's a ${args} Qoute`, //The title of the embed
        embedColor: "RANDOM", //The color of the embed! (Use Hex codes or use the color name)
        })
        slash.quote()

    }
        

    },
};