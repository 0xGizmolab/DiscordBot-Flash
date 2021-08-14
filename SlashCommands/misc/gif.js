const { Client, CommandInteraction } = require("discord.js");
const config = require("../../config");
module.exports = {
    name: "gif",
    description: "search for a gif on Tenor",
    options: [
        {
            name: "search",
            description: "What gif do you want",
            type: "STRING",
            required: true,
        
        },
    ],

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const fetch = require("node-fetch");


        const [gifs] = args.join(' ')
        let url = `https://g.tenor.com/v1/search?q=${gifs}&key=${config.TENOR_API_KEY}&ContentFilter=medium`;
        let response = await fetch(url);
        let json = await response.json();
    
        const index = Math.floor(Math.random() * json.results.length);
        

        interaction.followUp({ content: json.results[index].url });
    },
};
