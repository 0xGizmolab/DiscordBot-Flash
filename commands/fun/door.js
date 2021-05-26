const {
  MessageEmbed,
  MessageAttachment
} = require("discord.js");

const Meme = require("memer-api");
const memer = new Meme();
  module.exports = {
    name: "door",
    aliases: [],
    category: "Memer",
    permissions: [],
    description: "Generates a customised door meme",
    usage: "door @User",
    async execute (message, args, cmd, client, Discord, profileData) {
        let tempmsg = await message.channel.send(new MessageEmbed()
        .setColor("RANDOM")
        .setAuthor("Getting Image Data..", "https://images-ext-1.discordapp.net/external/ANU162U1fDdmQhim_BcbQ3lf4dLaIQl7p0HcqzD5wJA/https/cdn.discordapp.com/emojis/756773010123522058.gif")
      );
      let user = message.mentions.users.first() || message.author;
      //get avatar of the user
      let avatar = user.displayAvatarURL({ format: "png" });
      //get the memer image
      memer.door(avatar).then(image => {
        //make an attachment
        let attachment = new MessageAttachment(image, "door.png");
        //delete old message
        tempmsg.delete();
        //send new Message
        message.channel.send(tempmsg.embeds[0]
          .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL())
          .setImage("attachment://door.png")
          .attachFiles(attachment)
        ).catch(e => console.log("Couldn't delete msg, this is for preventing a bug".gray))
      })
      
  }
}