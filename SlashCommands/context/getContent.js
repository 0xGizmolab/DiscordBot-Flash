const { Client, ContextMenuInteraction } = require("discord.js");

module.exports = {
    name: "getcontent",
    type: "MESSAGE",

    /**
     *
     * @param {Client} client
     * @param {ContextMenuInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {

        const msg = await interaction.channel.messages.fetch(interaction.targetId);

        interaction.followUp({content: `${interaction.user.DisplayName}: ${msg}`})
        
    },
};
