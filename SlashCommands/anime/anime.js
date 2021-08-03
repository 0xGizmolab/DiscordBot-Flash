const { Client, CommandInteraction, MessageEmbed} = require("discord.js");
const axios = require('axios');
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
        const [type] = args
        
        
        const url = `https://api.waifu.pics/sfw/${type}`;

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return interaction.followUp(`An error occured!`)
        }
        const embed = new MessageEmbed()
        .setTitle(`Here's a ${type} GIF`)
        .setColor("RANDOM")
        .setImage(data.url)
        .setFooter(`Powered by waifu.pics`)

        return interaction.followUp({ embeds: [embed] });
    },
};
