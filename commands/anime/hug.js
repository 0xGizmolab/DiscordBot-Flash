const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "animehug",
    permissions: [],
    aliases: [],
    cooldown: 10,
    description: 'sends a random anime hug gif',
    usage: 'f-animehug',
    async execute (message, args, cmd, client, Discord, profileData)  {
        const url = 'https://some-random-api.ml/animu/hug';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error occured!`)
        }

        const embed = new MessageEmbed()
            .setTitle(`${message.author.username} heres a hug!`)
            .setImage(data.link)

        await message.channel.send(embed)
    }
}