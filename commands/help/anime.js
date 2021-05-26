const { MessageEmbed } = require('discord.js')

module.exports = {
        name: "anime",
        description: "To show all commands",
        permissions: [],
        usage: "f-anime",
        aliases: [],
    

 async execute (message, args, cmd, client, Discord, profileData){
    let embed = new MessageEmbed()
    .setAuthor("Anime Commands of "+client.user.username)
    .setColor("0xDC143C")
    .setDescription("PREFIX FOR FLASH IS **f-/@tag**")
    .addFields(
        {name: 'ANIME:dolls:',value: '`animesearch`, `animehug`, `animecharacter`'},             
    )     
    .setFooter(`To get info of each command you can do ${client.config.prefix}help [command]`)

     message.lineReplyNoMention(embed)

 }
}