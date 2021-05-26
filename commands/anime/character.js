const { MessageEmbed } = require("discord.js");
const axios = require("axios");


module.exports = {
  name: "animecharacter",
  aliases: [], // Optional
  description: "Sends a random character or a character by their name",
  permissions: [],
  usage: "f-animecharacter <name> || f-animecharacter list for names",
 
async execute (message, args, cmd, client, Discord, profileData)  {
    var arr = axios
            .get('https://anime.rovi.me/list')
            .then((res) => {
                arr = []
                res.data.characters.forEach(c => {
                    arr.push(c['full name'])
                });
                return arr
            })
    
    switch (args[0]) {
        case "random":
          axios
            .get(`https://anime.rovi.me/random`)
            .then((res) => {
              const embed = new MessageEmbed()
                .setImage(res.data.url)
                .setColor("RANDOM")
                .setFooter(
                  `Requested by ${message.author.tag}`,
                  message.author.displayAvatarURL({
                    dynamic: true,
                    size: 2048,
                    format: "png",
                  })
                );
              message.channel.send(embed);
            })
            .catch((err) => {
              message.channel.send('It apears that there was an error. Please try again later.')
            });
          break;
        case "list":
            arr.then(arr => {
                const embed = new MessageEmbed()
            .setTitle("Available Characters")
            .setDescription(arr.join('\n'))
            .setColor("RANDOM")
            .setFooter(
              `Requested by ${message.author.tag}`,
              message.author.displayAvatarURL({
                dynamic: true,
                size: 2048,
                format: "png",
              })
            );
          message.channel.send(embed);
            })
          
          break;
        default:
          arr.then(arr => {
              var checker = []
              arr.forEach(c => checker.push(c.toLowerCase()))
              if(!checker.includes(args.join(' ').toLowerCase())) return message.channel.send(`That character isn't in the list, please do \`f-animecharacter list\` to check`)
                
              });

              axios
              .get(`https://anime.rovi.me/random?c=${args.join('+')}`)
              .then((res) => {
                  let embed = new MessageEmbed()
                  .setImage(res.data.url)
                  .setTitle(`Random picture of ${args.join(' ')}`)
                  .setColor('RANDOM')
                  .setFooter(
                    `Requested by ${message.author.tag}`,
                    message.author.displayAvatarURL({
                      dynamic: true,
                      size: 2048,
                      format: "png",
                    })
                  );
                  message.channel.send(embed)
              })
          
      }
  },
};