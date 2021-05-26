const Discord = require("discord.js");
const pet = require("pet-pet-gif");

module.exports = {
  name: "petpet",
  description: "Generates a customised petpet gif",
  cooldown: 5,
  aliases: [],
  permissions: [],
  usage: '-petpet <emoji/user>', 
  async execute (message, args, cmd, client, Discord, profileData) {
  
let mypetpet = await pet(message.author.displayAvatarURL({ format: "png" }));
let mypetpet_gif = new Discord.MessageAttachment(mypetpet, "petpet.gif");

if(!args[0]) return message.channel.send("Mention a user or put an emoji from the server", mypetpet_gif)

    const user =
      message.mentions.users.first() ||
      client.users.cache.get(args[0]) 
    try {
      const emoji =
        message.guild.emojis.cache.find(x => x.name === args[0].split(":")[1]).url

      let petpetemoji = await pet(emoji);

      const petpet = new Discord.MessageAttachment(petpetemoji, "petpet.gif");
      await message.channel.send(petpet);
    } catch (e) {
      let user_petpet = await pet(user.displayAvatarURL({ format: "png" }));
      let us_petpet = new Discord.MessageAttachment(user_petpet, "petpet.gif");
      return message.channel.send(us_petpet);
    }
  }
};