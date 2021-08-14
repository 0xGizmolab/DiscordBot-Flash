const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "avatar",
    description: "Get the avatar of a user",
    options: [
        { 
            name: 'user',
            description: 'The user you want the avatar for',
            type: 'USER',
            required: true
        },

    ],

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const [av] = args
        console.log(av)

        let userToGet = interaction.guild.members.cache.get(av)
        console.log(userToGet)
        let avatar = av.displayAvatarURL({size: 1024, dynamic: true })


        const embed = new MessageEmbed()
        .setTitle(`${userToGet.displayName}'s avatar`)
        .setImage(avatar)
        .setColor("DC143C")

        interaction.followUp({ embeds: [embed] });
    },
};
