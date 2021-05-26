const { MessageEmbed } = require('discord.js')

module.exports = {
        name: "activities",
        description: "shows all the activities you can do with your friends in a vc!",
        permissions: [],
        usage: "f-activity",
        aliases: [],
    

 async execute (message, args, cmd, client, Discord, profileData){
    let embed = new MessageEmbed()
    .setAuthor("Activities of "+client.user.username)
    .setColor("0xDC143C")
    .setDescription("PREFIX FOR FLASH IS **f-/@tag**")
    .addFields(
        {name: 'ACTIVITIES:space_invader:',value: '`yttogether`, `betrayal`, `fishing`, `poker`'},             
    )     
    .setFooter(`To get info of each command you can do ${client.config.prefix}help [command]`)

     message.lineReplyNoMention(embed)

 }
}