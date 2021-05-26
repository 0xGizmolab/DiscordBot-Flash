const { MessageEmbed } = require('discord.js')

module.exports = {
        name: "economy",
        description: "To show all commands",
        permissions: [],
        usage: "f-economy",
        aliases: [],
    

 async execute (message, args, cmd, client, Discord, profileData){
    let embed = new MessageEmbed()
    .setAuthor("Economy Commands of "+client.user.username)
    .setColor("0xDC143C")
    .setDescription("PREFIX FOR FLASH IS **f-/@tag**")
    .addFields(
        {name: 'ECONOMY:money_with_wings:',value: '`balance`, `beg`, `daily` \n `deposit`, `withdraw`, `give` \n `shop`, `buy`, `inventory` \n `doubleornothing`, `search`, `work`'},             
    )     
    .setFooter(`To get info of each command you can do ${client.config.prefix}help [command]`)

    message.lineReplyNoMention(embed)

 }
}