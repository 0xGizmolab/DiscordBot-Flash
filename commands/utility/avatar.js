const Discord = require('discord.js');

module.exports = {
    name: "avatar",
    permissions: [],
    aliases: [ 'av' ],
    description: "Brodcast someone's avatar",
    usage: "f-avatar @user",

    async execute (message, args, cmd, client, Discord, profileData) {

        let member = message.mentions.users.first() || message.author

        let avatar = member.displayAvatarURL({size: 1024, dynamic: true })


        const embed = new Discord.MessageEmbed()
        .setTitle(`${member.username}'s avatar`)
        .setImage(avatar)
        .setColor("DC143C")

        message.lineReply(embed);
    }
}