const { Client, CommandInteraction, Permissions } = require("discord.js");

module.exports = {
    name: "unban",
    description: "unbans A User From The Server",
    options: [
        {
            name: 'user',
            description: 'User You Want To unban',
            required: true,
            type: 'USER'
        },
        {
            name: 'reason',
            description: 'Reason For unban',
            required: false,
            type: 'STRING'
        }

    ],

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const [user, reason] = args
        if (!interaction.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return interaction.followUp({content: "You don't have permission to unban members"});

    const bot = interaction.guild.me;
    if (!bot.permissions.has(Permissions.FLAGS.BAN_MEMBERS))
      return interaction.followUp({content: `I do not have permissions to unban members`});
        
    const bannedMembers = await interaction.guild.fetchBans(user);
      if (!bannedMembers)
        return interaction.followUp({content:
          "Couldn't find that member in the ban list!"
        }
        );

    const unbanReason = reason || "No Reason Provided";

    

    interaction.guild.members.unban(user)
    interaction.followUp({
      content: `**__Unbanned:__** **${userTounban.displayName}** | __**Reason:**__ ${unbanReason} | __**Moderator:**__ ||${interaction.user.username}||`,
    });
   
    },
};
