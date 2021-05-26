const axios = require('axios')

module.exports = {
    name: 'joke',
    description: "gives jokes",
    cooldown: 10,
    permissions: [],
    aliases: [ "jokes" ],
    usage: "-joke",
async execute (message, args, cmd, client, Discord) {
    let getJoke = async () => {
        let response = await axios.get('https://official-joke-api.appspot.com/random_joke')
        let joke = response.data
        return joke
      }
      let jokeValue = await getJoke();
      message.reply(` *${jokeValue.setup}*
       
      
    **${jokeValue.punchline}**`);
    }
}