const { tictactoe } = require('reconlx')
module.exports = {
    name: 'tictactoe',
    description: "play a game of tictactoe",
    permissions: [],
    aliases: ["ttt"] ,
    usage: "f-tictactoe @user",
execute(message, args, cmd, client, Discord) {
    const member = message.mentions.members.first() 
            if(!member)  return  message.channel.send('Please specify a member')
        
        new tictactoe({
            player_two: member, 
            message: message
        })
    }
}
