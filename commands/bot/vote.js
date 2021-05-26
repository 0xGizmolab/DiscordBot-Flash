module.exports = {
    name: 'vote',
    aliases: [],
    description: "get the voting link for flash bot",
    permissions: [],
    usage:"f-vote",
    execute(message, args, cmd, client, Discord, profileData) {
       message.lineReply(" **You can vote for flash here:** [Vote For Flash](https://top.gg/bot/782596865803812924/vote) ")
    }
}