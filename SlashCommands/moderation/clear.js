const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "clear",
    description: "clear a number of messages",
    options: [
        {
            name: 'number',
            description: 'Number of messages to clear',
            required: true,
            type: 'NUMBER'
        }

    ],

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const [num] = args


        if(!num) return interaction.followUp("Please enter the amount of messages that you want to clear!");
        if(isNaN(num)) return interaction.followUp("Please enter a Real Number!")

        if(num > 100) return interaction.followUp("You cannot Delete More than 100 Messages!");
        if(num < 1) return interaction.followUp("You need To clear atleast One message!");

        await interaction.channel.messages.fetch({limit: num + 1}).then(messages =>{
            interaction.channel.bulkDelete(messages);
        });
    },
};
