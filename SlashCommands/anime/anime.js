const { Client, CommandInteraction, MessageEmbed} = require("discord.js");

module.exports = {
    name: "anime",
    description: "Get Anime Actions",
    options: [
        { 
            name: 'category', 
            description: "which action do you want",
            required: true,
            type: "STRING",
            choices: [
                { 
                    name: "cuddle",
                    value: "cuddle"
                },
                { 
                    name: "hug",
                    value: "hug"
                },
                { 
                    name: "kiss",
                    value: "kiss"
                },
                { 
                    name: "smile",
                    value: "smile"
                },
                { 
                    name: "wave",
                    value: "wave"
                },
                { 
                    name: "handhold",
                    value: "handhold"
                },
                { 
                    name: "wink",
                    value: "wink"
                },
                { 
                    name: "poke",
                    value: "poke"
                },
                { 
                    name: "dance",
                    value: "dance"
                },
                { 
                    name: "cringe",
                    value: "cringe"
                },
                { 
                    name: "kill",
                    value: "kill"
                },
                { 
                    name: "slap",
                    value: "slap"
                },
                { 
                    name: "bite",
                    value: "bite"
                },
                { 
                    name: "highfive",
                    value: "highfive"
                },
                { 
                    name: "blush",
                    value: "blush"
                },
                { 
                    name: "pat",
                    value: "pat"
                },
                { 
                    name: "smug",
                    value: "smug"
                },
                { 
                    name: "bonk",
                    value: "bonk"
                },
                { 
                    name: "cry",
                    value: "cry"
                },
                { 
                    name: "bully",
                    value: "bully"
                },
                { 
                    name: "yeet",
                    value: "yeet"
                },
                { 
                    name: "happy",
                    value: "happy"
                },
                { 
                    name: "kick",
                    value: "kick"
                },
            ],
        },
    ],

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const { Slash } = require('djs-anime')
        const slash = new Slash({
        type: args,
        interaction: interaction,
        embedFooter: "Made With djs-anime", //The Footer of the embed
        embedTitle: `Here's a ${args} GIF`, //The title of the embed
        embedColor: "RANDOM", //The color of the embed! (Use Hex codes or use the color name)
        })
        slash.anime()
        

    },
};