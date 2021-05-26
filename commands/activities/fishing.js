module.exports = {
    name: 'fishing',
    aliases: [],
    description: "Go fishing With Your Friends",
    permissions: [],
    async execute(message, args, cmd, client, Discord, profileData) {
        if (!message.member.voice.channel) return message.channel.send('You need to be in a Voice Channel to use this command!');
		client.discordTogether.createTogetherCode(message.member.voice.channelID, 'fishing').then(async invite => {
    			return message.channel.send(`${invite.code}`);
		});
    }
}