const { Client, ContextMenuInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "getavatar",
    type: "USER",

    /**
     *
     * @param {Client} client
     * @param {ContextMenuInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {

        const user = await client.users.fetch(interaction.targetId);

        const av = new MessageEmbed()
            .setTitle(`${user.username}'s Avatar`)
            .setImage(user.displayAvatarURL({dynamic: true}));

        interaction.followUp({embeds: [av]})
        
    },
};
