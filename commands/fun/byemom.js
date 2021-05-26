const {
    MessageEmbed,
    MessageAttachment
  } = require("discord.js");
  
  const Meme = require("memer-api");
  const memer = new Meme();
  module.exports = {
    name: "byemom",
    aliases: [],
    category: "Memer",
    permissions: [],
    description: "generates a byemom meme",
    usage: "byemom @user text",
    async execute (message, args, cmd, client, Discord, profileData) {
        let tempmsg = await message.channel.send(new MessageEmbed()
        .setColor("RANDOM")
        .setAuthor("Getting Image Data..", "https://images-ext-1.discordapp.net/external/ANU162U1fDdmQhim_BcbQ3lf4dLaIQl7p0HcqzD5wJA/https/cdn.discordapp.com/emojis/756773010123522058.gif")
      );
let user = message.mentions.users.first() || message.author;
      //get avatar of the user
      let avatar = user.displayAvatarURL({ format: "png" });
      //get the additional text
      let text = args.join(" ");
      //If no text added, return error
      if(!text) return tempmsg.edit(tempmsg.embeds[0]
        .setTitle(":x: You did not enter a Valid Text!")
        .setColor("RED")
        .setDescription(`Usage: \`byemom @User <TEXT>\``)
      ).catch(e => console.log("Couldn't delete msg, this is for preventing a bug".gray))

      //get the memer image
      memer.byemom(avatar, user.username, text).then(image => {
        //make an attachment
        let attachment = new MessageAttachment(image, "byemom.png");
        //delete old message
        tempmsg.delete();
        //send new Message
        message.channel.send(tempmsg.embeds[0]
          .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL())
          .setImage("attachment://byemom.png")
          .attachFiles(attachment)
        ).catch(e => console.log("Couldn't delete msg, this is for preventing a bug".gray))
      })
      
  }
}