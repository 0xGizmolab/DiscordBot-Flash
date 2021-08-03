const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "rockpaperscissors",
    cooldown: 10,
    permissions: ['SEND_MESSAGES'],
    aliases: ["rps"],
    description: "Play a game of rock, paper and scissors",
    usage: "f-rps, f-rockpaperscissors",
    async execute (message, args, cmd, client, discord, profileData) {
        const djsGames = require('djs-games')
        const RockPaperScissors = new djsGames.RockPaperScissors()
         RockPaperScissors.startGame(message)
}
}