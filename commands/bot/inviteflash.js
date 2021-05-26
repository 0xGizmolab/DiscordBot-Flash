module.exports = {
    name: 'inviteflash',
    aliases: [],
    description: "get the invite link for flash bot",
    permissions: [],
    usage:"f-inviteflash",
    execute(message, args, cmd, client, Discord, profileData) {
        const botInfo = new Discord.MessageEmbed() 
    .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true })) 
    .addFields(
        {name: 'INVITE LINK',value: 'You can invite Flash to your server by [Clicking here!](https://discord.com/api/oauth2/authorize?client_id=782596865803812924&permissions=1614806129&scope=bot)'},
        {name: 'SUPPORT SERVER',value: `Join the [Support Server](https://discord.gg/jDP2FbvCdk)`},
    )
    message.lineReply(botInfo);
    }
}