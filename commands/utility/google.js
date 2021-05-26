const Discord = require("discord.js");
const request = require('node-superfetch');


module.exports = {
    name: 'google',
    description: "searches google ",
    aliases: [],
    cooldown: 10,
    permissions: [],
    usage: "-google <query>",
async execute (message, args, cmd, client, Discord) {
    let googleKey = "AIzaSyBxpghiziKfqqq1r9xpq8BPNQUeN2HuwXU";
    let csx = "be4b47b9b3b849a71";
    let query = args.join(" ");
    let result;

    if(!query) return message.reply("Please enter a Valid Query");
    result = await search(query);
    if (!result) return message.reply("Invalid Search");

    const embed = new Discord.MessageEmbed()
        .setTitle(result.title) 
        .setDescription(result.snippet)
        .setImage(result.pagemap ? result.pagemap.cse_thumbnail[0].src : null)
        .setURL(result.link)
        .setColor(0x7289DA)
        .setFooter("Powered by Google")
    
        return message.channel.send(embed);

    async function search(query) {
        const { body } = await request.get("https://customsearch.googleapis.com/customsearch/v1").query({
            key: googleKey, cx: csx, safe: "off", q: query
        });

        if(!body.items) return null;
        return body.items[0];
        } 

        
    }
 }