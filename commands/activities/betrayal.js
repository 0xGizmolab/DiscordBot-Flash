module.exports = {
    name: 'betrayal',
    aliases: [],
    description: "Play a game of betrayal With Your Friends",
    permissions: [],
    async execute(message, args, cmd, client, Discord, profileData) {
        if (!message.member.voice.channel) return message.channel.send('You need to be in a Voice Channel to use this command!');
		client.discordTogether.createTogetherCode(message.member.voice.channelID, 'betrayal').then(async invite => {
    			return message.channel.send(`${invite.code}`);
		});
    }
}