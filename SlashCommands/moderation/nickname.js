const { Client, CommandInteraction, Permissions } = require("discord.js");

module.exports = {
    name: "nickname",
    description: "Set a user's nickname",
    options: [
        {
            name: "user",
            description: "User to change nickname of",
            type: "USER",
            required: true,
        },
        {
            name: "nickname",
            description: "Nickname to set",
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
        const [user, nickname] = args;
        if (!interaction.member.permissions.has(Permissions.FLAGS.MANAGE_NICKNAMES)) return interaction.followUp(`You do not have permission to change nicknames.`);

        let userToChange = interaction.guild.members.cache.get(user)

        if (interaction.member.roles.highest.position <= userToChange.roles.highest.position)
      return interaction.followUp({content: "Your role is not higher than the member."});

      try {
        userToChange.setNickname(nickname);
        interaction.followUp({content: `I have changed ` + userToChange.user.tag + `'s nickname to ${nickname}`});
      } catch (err) {
        console.log(err);
        interaction.followUp({content:
          "I do not have permission to set nickname!"
        }
        );
      }

    },
};
