const djsGames = require('djs-games')
const SnakeGame = new djsGames.SnakeGame()
module.exports = {
    name: 'snake',
    aliases: ['snakes'],
    description: 'A game of snakes',
    permissions: [],
    category: 'games',
    usage: 'f-snake',
async execute (message, args, cmd, client, Discord) {
    // if (args[0] === 'snakegame') {
        SnakeGame.startGame(message)
}
}