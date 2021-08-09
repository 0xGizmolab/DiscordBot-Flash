const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "say",
    description: "the bot repeats what you say",
    options: [
        {
            name: "text",
            description: "What do you want me to say",
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


        const [text] = args
        interaction.followUp({ content: `${text}` });
    },
};
