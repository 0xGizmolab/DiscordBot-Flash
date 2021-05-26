const Discord = require("discord.js");
const weather = require("weather-js");

module.exports = {
    name: 'weather',
    description: " provides weather info ",
    aliases: [],
    cooldown: 10,
    permissions: [],
    usage: "f-weather <city>",
async execute (message, args, cmd, client, Discord) {
     let city = args.join("");
     let degreetype = "c";

     await weather.find({search: city, degreeType: degreetype}, function(err, result){
         if (!city) return message.channel.send("Please provide a city");
         if (err || result === undefined || result.length === 0) return message.channel.send("Unknown City, Please Try Again.");

         let current = result[0].current;
         let location = result[0].location;

         const embed = new Discord.MessageEmbed()
         .setAuthor(current.observationpoint)
         .setDescription(`> ${current.skytext}`)
         .setThumbnail(current.imageUrl)
         .setTimestamp()
         .setColor(0xDC143C)

         embed.addField("Latitude", location.lat, true)
         .addField("Longitude", location.long, true)
         .addField("Feels Like", `${current.feelslike}° Degrees`, true)
         .addField("Degree Type", location.degreetype, true)
         .addField("Winds", current.windsdisplay, true)
         .addField("Humidity", `${current.humidity}%`, true)
         .addField("Timezone", `GMT ${location.timezone}`, true)
         .addField("Temperature", `${current.temperature}° Degrees`, true)
         .addField("Observation Time", current.observationtime, true)

         return message.channel.send(embed);
     })
    }
}