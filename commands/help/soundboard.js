const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "soundboard",
    description: "To show all commands",
    permissions: [],
    usage: "f-soundboard",
    aliases: [],


async execute (message, args, cmd, client, Discord, profileData){
let embed = new MessageEmbed()
.setAuthor("Moderation Commands of "+client.user.username)
.setColor("0xDC143C")
.setDescription("PREFIX FOR FLASH IS **f-/@tag**")
.addFields(
    {name: 'SOUNDBOARD:microphone2:',value: '`ahshit`, `araara`, `bhau`, `margayamc`, `onichan` \n `nani`, `oioioi`, `surprisemf`, `uwu`, `wow` \n `oioi`, `bruh`, `sheesh` \n `rickroll`'},             
)     
.setFooter(`To get info of each command you can do ${client.config.prefix}help [command]`)

message.lineReplyNoMention(embed)

}
}