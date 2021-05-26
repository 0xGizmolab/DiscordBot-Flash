const koenie06games = require('koenie06-games')
const ConnectFour = new koenie06games.ConnectFour()
module.exports = {
    name: 'connectfour',
    aliases: ["connect4"],
    description: 'A game of connectfour',
    permissions: [],
    category: 'games',
    usage: 'f-connectfour @player2',
async execute (message, args, cmd, client, Discord) {
    // if (args[0] === 'snakegame') {
        ConnectFour.newGame(message)
//}
}
}