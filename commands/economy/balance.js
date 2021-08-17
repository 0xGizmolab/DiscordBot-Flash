const { Message, Client, MessageEmbed } = require("discord.js");
module.exports = {
    name: "balance",
    aliases: ["bal"],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, profileData) => {
        const embed = new MessageEmbed()
        .setColor('DC143C')
        .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
        .addFields(
            {name: 'WALLET',value: `${profileData.wallet}𝕾`},
            {name: 'BANK',value: `${profileData.bank}𝕾`},
            
        )
        message.channel.send({embeds: [embed]});
    },
};
