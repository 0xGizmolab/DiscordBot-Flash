const { MessageEmbed } = require('discord.js')

module.exports = {
        name: "help",
        description: "To show all commands",
        permissions: [],
        usage: "f-help",
        aliases: ["commands", "help me", "pls help"],
    

 async execute (message, args, cmd, client, Discord, profileData){
        let allcmds = "";

        client.commands.forEach(cmd => {
            let cmdinfo = cmd
            allcmds+="`"+cmdinfo.name+"` ~ "+cmdinfo.description+"\n"
        })

        let embed = new Discord.MessageEmbed()
        .setAuthor("Commands of "+client.user.username)
        .setColor("0xDC143C")
        .setDescription("PREFIX FOR FLASH IS **f-/@tag**")
        .addField('GAMES:game_die:','`f-games`', true)
        .addField('ACTIVITIES:space_invader:', '`f-activities`', true)     
        .addField('ECONOMY:money_with_wings:', '`f-economy`',true)
        .addField('FUN:piñata:', '`f-fun`', true )
        .addField('UTILITY:bulb:', '`f-utility`' , true ) 
        .addField('ANIME:dolls:', '`f-anime`', true ) 
        .addField('SOUNDBOARD:microphone2:', '`f-soundboard`', true )    
        .addField('MODERATION:tools:','`f-moderation`', true )
        .addField('FLASH:zap:', '`f-flash`', true)
        .addField('NEXUS🦸‍♂️', '[Invite Flash](https://discord.com/api/oauth2/authorize?client_id=782596865803812924&permissions=1614806129&scope=bot)●[Support Server](https://discord.gg/jDP2FbvCdk)●[Vote For Us!](https://top.gg/bot/782596865803812924/vote)')
             
        .setFooter(`To get info of each command you can do ${client.config.prefix}help [command]`)

        if(!args[0])return message.lineReplyNoMention(embed)
        else {
            let cmd = args[0]
            let command = client.commands.get(cmd)
            if(!command)command = client.commands.find(x => x.aliases.includes(cmd))
            if(!command)return message.channel.send("Unknown Command")
            let commandinfo = new MessageEmbed()
            .setTitle("Command: "+command.name+"")
            .setColor("0xDC143C")
            .setDescription(`
Name: ${command.name}
Description: ${command.description}
Usage: \`\`${command.usage}\`\`
Aliases: ${command.aliases.join(", ")}
`)
    message.lineReplyNoMention(commandinfo)
        }
    }
}