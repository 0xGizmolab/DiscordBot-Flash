const {
    MessageEmbed,
    MessageAttachment
  } = require("discord.js");
  
  const Meme = require("memer-api");
  const memer = new Meme(process.env.MEMERKEY);
  
  module.exports = {
    name: "trash",
    aliases: [],
    permissions: [],
    description: "Generates a customised Trash Meme",
    usage: "trash @User",
    async execute (message, args, cmd, client, Discord, profileData) {
      
        let tempmsg = await message.channel.send(new MessageEmbed()
          .setColor("RANDOM")
          .setAuthor("Getting Image Data..")
        );
        
        let user = message.mentions.users.first() || message.author;
        
        let avatar = user.displayAvatarURL({ format: "png" });
        
        memer.trash(avatar).then(image => {
          
          let attachment = new MessageAttachment(image, "trash.png");
        
          tempmsg.delete();
        
          message.channel.send(tempmsg.embeds[0]
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL())
            .setImage("attachment://trash.png")
            .attachFiles(attachment)
          )
        })
        
    }
  }