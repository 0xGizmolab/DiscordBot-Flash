const koenie06games = require('koenie06-games')
const SnakeGame = new koenie06games.SnakeGame()
module.exports = {
    name: 'snake',
    aliases: ['snakes'],
    description: 'A game of snakes',
    permissions: [],
    category: 'games',
    usage: 'f-snake',
async execute (message, args, cmd, client, Discord) {
    // if (args[0] === 'snakegame') {
        SnakeGame.newGame(message)
//}
}
}