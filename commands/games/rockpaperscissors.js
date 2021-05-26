const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "rockpaperscissors",
    cooldown: 10,
    permissions: ['SEND_MESSAGES'],
    aliases: ["rps"],
    description: "Play a game of rock, paper and scissors",
    usage: "f-rps, f-rockpaperscissors",
    async execute (message, args, cmd, client, discord, profileData) {
        let embed = new MessageEmbed()
        .setTitle("RPS GAME")
        .setDescription("React to play!")
        .setColor('RANDOM')
        .setTimestamp()
        
        let msg = await message.channel.send(embed);
        await msg.react("✊")
        await msg.react("✂")
        await msg.react("📰")

        const filter = (reaction, user) => {
            return ['✊', '✂', '📰'].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        const choices = ['✊', '✂', '📰']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, {max:1, time: 60000, error: ["time"]}).then(
            async(collected) => {
                const reaction = collected.first()
                let result = new MessageEmbed()
                .setTitle("RESULT")
                .addField("Your choice", `${reaction.emoji.name}`)
                .addField("My choice", `${me}`)
                .setColor("RANDOM")
            await msg.edit(result)
                if ((me === "✊" && reaction.emoji.name === "✂") ||
                (me === "📰" && reaction.emoji.name === "✊") ||
                (me === "✂" && reaction.emoji.name === "📰")) {
                    message.channel.send(`${message.author}, you lost!`);
            } else if (me === reaction.emoji.name) {
                return message.channel.send(`${message.author}, it was a tie!`);
            } else {
                return message.channel.send(`${message.author}, you won!`);
            }
        })
        .catch(collected => {
                message.reply('Process has been cancelled since you did not respond in time!');
            })
}
}