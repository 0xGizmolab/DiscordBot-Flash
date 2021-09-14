const client = require('../index');
const { MessageEmbed } = require('discord.js');

client.on('guildDelete', async (guild) => {

    if (guild.name == 'undefined') return;

    const channel = await client.channels.cache.get('840724058068090880');
    const m = new MessageEmbed()
        .setTitle(`Just left ${guild.name}`)
        .setFooter(`Total servers : ${client.guilds.cache.size} | Members : ${guild.memberCount}`)
        .setColor('RED');
    channel.send({ embeds: [m] });
})