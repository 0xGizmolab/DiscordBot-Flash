const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "moderation",
    description: "To show all commands",
    permissions: [],
    usage: "f-help moderation",
    aliases: [],


async execute (message, args, cmd, client, Discord, profileData){
let embed = new MessageEmbed()
.setAuthor("Moderation Commands of "+client.user.username)
.setColor("0xDC143C")
.setDescription("PREFIX FOR FLASH IS **f-/@tag**")
.addFields(
    {name: 'MODERATION:tools:',value: '`clear`, `serverinfo`, `ping`'},             
)     
.setFooter(`To get info of each command you can do ${client.config.prefix}help [command]`)

message.lineReplyNoMention(embed)

}
}