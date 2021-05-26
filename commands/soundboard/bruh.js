const Discord = require('discord.js');
const path = require('path');
const checkifalreadyplaying = new Discord.Collection();
module.exports = {
    name: "bruh",
    permissions: [],
    aliases: [],
    description: "oi oi oi soundeffect",

    async execute (message, args, cmd, client, Discord, profileData) {
	const channel = message.member.voice.channel;
	if(!channel) return message.channel.send('Please connect to a voice channel to use soundboard');
	channel.join().then(async connection => {
		const dispatcher = connection.play(path.join(__dirname + '/audio/bruh.mp3'));
		const e = await message.react('🎙️');
		dispatcher.on('speaking', speaking => {
			if(!speaking) {
        channel.leave();
        e.remove()
            }
		});
	}).catch(err => console.log(err));
}
}