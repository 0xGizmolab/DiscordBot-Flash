const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "serverinfo",
    description: "Get information about the server",

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const { guild } = interaction

    const { name, region, memberCount, owner, afkTimeout } = guild
    const icon = guild.iconURL()

    const embed = new MessageEmbed()
      .setTitle(`Server info for "${name}"`)
      .setThumbnail(icon)
      .addFields(
        {
          name: 'Members',
          value: memberCount,
        },
        {
          name: 'Owner',
          value: OwnerId,
        },
        {
          name: 'AFK Timeout',
          value: afkTimeout / 60,
        }
      )

    interaction.followUp({ embeds: [embed] })
    },
};
