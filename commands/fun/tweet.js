const {
    MessageEmbed,
    MessageAttachment
  } = require("discord.js");
  
  const Meme = require("memer-api");
  const memer = new Meme();
  module.exports = {
    name: "tweet",
    aliases: [],
    category: "Memer",
    permissions: [],
    description: "Generates a tweet",
    usage: "tweet @User <TEXT>",
    async execute (message, args, cmd, client, Discord, profileData) {
        //send loading message
        let tempmsg = await message.channel.send(new MessageEmbed()
          .setColor("blue")
          .setAuthor("Getting Image Data..", "https://images-ext-1.discordapp.net/external/ANU162U1fDdmQhim_BcbQ3lf4dLaIQl7p0HcqzD5wJA/https/cdn.discordapp.com/emojis/756773010123522058.gif")
        );
        //get pinged user, if not then use cmd user
        let user = message.mentions.users.first();
        //if user pinged, shift the args, 
        if(user) args.shift();
        //else not and define the user to be message.author
        else user = message.author;
        //get avatar of the user
        let avatar = user.displayAvatarURL({ format: "png" });
        //get the additional text
        let text = args.join(" ");
        //If no text added, return error
        if(!text) return tempmsg.edit(tempmsg.embeds[0]
          .setTitle(":x: You did not enter a Valid Text!")
          .setColor("RED")
          .setDescription(`Usage: \`tweet @User <TEXT>\``)
        ).catch(e => console.log("Couldn't delete msg, this is for preventing a bug".gray))
  
        //get the memer image
        memer.tweet(avatar, user.username, text).then(image => {
          //make an attachment
          let attachment = new MessageAttachment(image, "tweet.png");
          //delete old message
          tempmsg.delete();
          //send new Message
          message.channel.send(tempmsg.embeds[0]
            .setAuthor(`Tweet From: ${user.tag}`, avatar)
            .setImage("attachment://tweet.png")
            .attachFiles(attachment)
          ).catch(e => console.log("Couldn't delete msg, this is for preventing a bug".gray))
        })
        
    }
  }