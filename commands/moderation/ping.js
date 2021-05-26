module.exports = {
    name: 'ping',
    description: "gives ping",
    permissions: [],
    execute(message, args, cmd, client, Discord){
        
        let member = message.member;
        let embed = new Discord.MessageEmbed()
                    .setColor('RED')
                    .setTitle(`PONG! :ping_pong:`)
                    .addFields(
                        {name: 'Latency', value: `\`${Date.now() - message.createdTimestamp}ms\``},
                        {name: 'API Latency', value: `\`${Math.round(client.ws.ping)}ms\``},
                    )
            message.channel.send({embed});
            }
        }
    
    
