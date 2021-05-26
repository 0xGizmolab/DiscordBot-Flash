const fetch = require("node-fetch").default;
const { MessageAttachment, MessageEmbed } = require("discord.js");

module.exports = {
  name: "changemymind",
  aliases: ['cmm'],
  permissions: ['SEND_MESSAGES'],
  cooldown: 2,
  description: "Generates a customised change my mind image ",
  usage: "-changemymind <text>",
  async execute(message, args, cmd, client, Discord) {
    let text = args.slice(0).join(' ')
    if(!text) return message.channel.send('What do you want me to change your mind about');
    const loading = message.channel.send(`loading...`)
    fetch(`https://nekobot.xyz/api/imagegen?type=changemymind&text=${text}`)
    .then(res => res.json())
    .then(data => {
        loading
        const embed = new MessageEmbed()
        .setImage(data.message)
        .setColor('RANDOM')
        message.channel.send(embed);
        message.delete(loading)
    })
  
  },
};
