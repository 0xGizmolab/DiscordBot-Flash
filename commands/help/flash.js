const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "flash",
    description: "To show all commands",
    permissions: [],
    usage: "f-flash",
    aliases: [],


async execute (message, args, cmd, client, Discord, profileData){
let embed = new MessageEmbed()
.setAuthor("Commands of "+client.user.username)
.setColor("0xDC143C")
.setDescription("PREFIX FOR FLASH IS **f-/@tag**")
.addFields(
    {name: 'FLASH:zap:',value: '`inviteflash`, `vote`'},             
)     
.setFooter(`To get info of each command you can do ${client.config.prefix}help [command]`)

message.lineReplyNoMention(embed)

}
}