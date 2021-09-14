const client = require('../index');
const { MessageEmbed } = require('discord.js');
client.on('guildCreate', async (guild) => {

    const channel = await client.channels.cache.get('840724058068090880');
    const m = new MessageEmbed()
        .setTitle(`Just joined ${guild.name}`)
        .setFooter(`Total servers : ${client.guilds.cache.size} | Members : ${guild.memberCount}`)
        .setColor('GREEN');
    channel.send({ embeds: [m] });
})