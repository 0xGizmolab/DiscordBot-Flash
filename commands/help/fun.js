const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "fun",
    description: "To show all commands",
    permissions: [],
    usage: "f-fun",
    aliases: [],


async execute (message, args, cmd, client, Discord, profileData){
let embed = new MessageEmbed()
.setAuthor("Fun Commands of "+client.user.username)
.setColor("0xDC143C")
.setDescription("PREFIX FOR FLASH IS **f-/@tag**")
.addFields(
    {name: 'FUN:piñata:',value: '`abandon`, `byemom`, `cancer`, `changemymind`, `dab`, `delete` \n `disability`, `door`, `egg`, `emergencymeeting`, `facts`, `failure` \n `floor`, `jail`, `joke`, `keepdistance`, `meme` \n`note`, `petpet`, `roast`, `satan`, `shit` \n `trash`, `tweet`, `violence`, `wanted`, `ytcomment` '},             
)     
.setFooter(`To get info of each command you can do ${client.config.prefix}help [command]`)

message.lineReplyNoMention(embed)

}
}