module.exports = {
    name: 'shuffleguess',
    description: "shuffle game",
    permissions: [],
    usage: "f-shuffleguess, -jumble",
    aliases: [ "sg" , "jumble"] ,
execute(message, args, cmd, client, Discord) {
let randomWords = require('random-words');
const word = randomWords()
const { ShuffleGuess } = require('weky')
const game = new ShuffleGuess({
message: message,
word: word,
winMessage: "GG You Guessed the Word" //Or anything
})
game.start()
 }
}