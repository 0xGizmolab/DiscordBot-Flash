module.exports = {
    name: 'give',
    aliases: [],
    description: "Give a user some senkos",
    usage: "f-give @tag <amount>",
    permissions: [],
    async execute(message, args, cmd, client, Discord, profileData) {
        const user = message.mentions.users.first();
        if(!user) return message.lineReplyNoMention('Who Do You wanna give stars to?');

        const starsToDonate = args[1];
        if(!starsToDonate) return message.lineReply('Please Specify how many stars you wanna give');

        if(isNaN(starsToDonate)) return message.LineReply('Stars must be in whole numbers');

        const amountGiven = parseInt(starsToDonate)

        if(await client.bal(message.author.id) < amountGiven ) return message.LineReply('You dont have that many stars to give');

        await client.rmv(message.author.id, amountGiven);
        await client.add(user.id, amountGiven);

        message.channel.send(`${message.author} gave **${amountGiven}𝕾** to ${user}`)




    }
}    