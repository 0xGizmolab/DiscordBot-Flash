const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "games",
    description: "To show all commands",
    permissions: [],
    usage: "f-games",
    aliases: [],


async execute (message, args, cmd, client, Discord, profileData){
let embed = new MessageEmbed()
.setAuthor("Games Commands of "+client.user.username)
.setColor("0xDC143C")
.setDescription("PREFIX FOR FLASH IS **f-/@tag**")
.addFields(
  {name: 'GAMES:game_die:',value: ' `fasttype`, `guessthenumber`, `rockpaperscissors` \n `shuffleguess`, `tictactoe`, `snake` \n `akinator`, `connectfour`'},           
)     
.setFooter(`To get info of each command you can do ${client.config.prefix}help [command]`)

message.lineReplyNoMention(embed)

}
}