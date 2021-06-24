const inventory = require('../../models/inventory');

module.exports = {
    name: 'inventory',
    aliases: ['inv'],
    description: "View your inventory",
    usage: "f-inventory",
    permissions: [],
    execute(message, args, cmd, client, Discord, profileData) {
        inventory.findOne({  User: message.author.id }, async(err, data) => {
            if(!data) return message.lineReply('Your Inventory is empty')
            const mappedData = Object.keys(data.Inventory).map((key) => {
                return `**❑${key} x ${data.Inventory[key]}**`
            })
            .join(`\n`)
            const embed = new Discord.MessageEmbed()
            .setColor('DC143C')
            .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(mappedData)
        

            message.lineReply(embed);
              
        })


    },
};    