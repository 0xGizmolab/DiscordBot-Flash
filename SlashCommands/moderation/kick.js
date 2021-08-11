const { Client, CommandInteraction, Permissions } = require("discord.js");

module.exports = {
    name: "kick",
    description: "Kicks A User From The Server",
    options: [
        {
            name: 'user',
            description: 'User You Want To Kick',
            required: true,
            type: 'USER'
        },
        {
            name: 'reason',
            description: 'Reason For Kick',
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
        if (!interaction.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) return interaction.followUp({content: "You don't have permission to kick members"});

    const bot = interaction.guild.me;
    if (!bot.permissions.has(Permissions.FLAGS.KICK_MEMBERS))
      return interaction.followUp({content: `I do not have permissions to kick members`});
        
        
    let userToKick = interaction.guild.members.cache.get(user)
    
    if (!userToKick) {
      return interaction.followUp({content: "Couldn't Find that member!"});
    }

    if (userToKick.id === interaction.user.id) {
      return interaction.followUp({content: `You cannot kick yourself`});
    }

    if (userToKick.id === client.user.id) {
      return interaction.followUp({content: `You cannot kick me with my own command!`});
    }

    if (
      interaction.member.roles.highest.position <= userToKick.roles.highest.position
    ) {
      return interaction.followUp(
        {content: `You're role is not higher than the member's role.`}
      );
    }

    if (bot.roles.highest.position <= userToKick.roles.highest.position) {
      return interaction.followUp({content: `My role is not above the member!`});
    }

    const kickReason = reason || "No reason provided";

 

    userToKick.kick({ reason: kickReason });
    interaction.followUp({
      content: `__**Kicked**__: **${userToKick.displayName}** | __**Reason:**__ ${kickReason} | __**Moderator:**__ ||${interaction.user.username}||`,
    });
        
    },
};
