const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "utility",
    description: "To show all commands",
    permissions: [],
    usage: "f-utility",
    aliases: [],


async execute (message, args, cmd, client, Discord, profileData){
let embed = new MessageEmbed()
.setAuthor("Utility Commands of "+client.user.username)
.setColor("0xDC143C")
.setDescription("PREFIX FOR FLASH IS **f-/@tag**")
.addFields(
    {name: 'UTILITY:bulb:',value: '`avatar`, `covid`, `weather`\n `say`, `qrcode`, `google` \n `remind`, `gif`'},             
)     
.setFooter(`To get info of each command you can do ${client.config.prefix}help [command]`)

message.lineReplyNoMention(embed)

}
}