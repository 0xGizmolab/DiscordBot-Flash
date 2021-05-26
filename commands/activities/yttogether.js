module.exports = {
    name: 'yttogether',
    aliases: ['watchyt', 'youtubetogether', 'ytwatchparty', 'ytparty'],
    description: "Play a Youtube With Your Friends",
    permissions: [],
    async execute(message, args, cmd, client, Discord, profileData) {
        if (!message.member.voice.channel) return message.channel.send('You need to be in a Voice Channel to use this command!');
		client.discordTogether.createTogetherCode(message.member.voice.channelID, 'youtube').then(async invite => {
    			return message.channel.send(`${invite.code}`);
		});
    }
}