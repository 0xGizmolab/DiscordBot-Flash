const { Client, CommandInteraction, Permissions } = require("discord.js");

module.exports = {
    name: "ban",
    description: "bans A User From The Server",
    options: [
        {
            name: 'user',
            description: 'User You Want To ban',
            required: true,
            type: 'USER'
        },
        {
            name: 'reason',
            description: 'Reason For ban',
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
        if (!interaction.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return interaction.followUp({content: "You don't have permission to ban members"});

    const bot = interaction.guild.me;
    if (!bot.permissions.has(Permissions.FLAGS.BAN_MEMBERS))
      return interaction.followUp({content: `I do not have permissions to ban members`});
        
        
    let userToban = interaction.guild.members.cache.get(user)
    
    if (!userToban) {
      return interaction.followUp({content: "Couldn't Find that member!"});
    }

    if (userToban.id === interaction.user.id) {
      return interaction.followUp({content: `You cannot ban yourself`});
    }

    if (userToban.id === client.user.id) {
      return interaction.followUp({content: `You cannot ban me with my own command!`});
    }

    if (
      interaction.member.roles.highest.position <= userToban.roles.highest.position
    ) {
      return interaction.followUp(
        {content: `You're role is not higher than the member's role.`}
      );
    }

    if (bot.roles.highest.position <= userToban.roles.highest.position) {
      return interaction.followUp({content: `My role is not above the member!`});
    }

    const banReason = reason || "No Reason Provided";

    

    userToban.ban({ reason: banReason });
    interaction.followUp({
      content: `__**Banned:**__ **${userToban.displayName}** | __**Reason:**__ ${banReason} | __**Moderator:**__ ||${interaction.user.username}||`,
    });
   
    },
};
