const { MessageFlags } = require("discord.js");

module.exports = {
    name: "say",
    description: "says whatever you want the bot to say",
    aliases: [ 'announce' ],
    permissions: [],
    cooldown: 10,
    usage: "f-say <text>",

    async execute (message, args, cmd, client, Discord, profileData) {
        let msg;
        let textChannel = message.mentions.channels.first()
        message.delete()

        if(textChannel) {
            msg = args.slice(1).join(" ");
            textChannel.send(msg)
                
        } else {
            msg = args.join(" ");
            message.channel.send(msg)
        }
    }
}