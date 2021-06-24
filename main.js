const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
require('discord-reply');
require('discord-buttons')(client)
require('dotenv').config();
const { DiscordTogether } = require('discord-together');
const config = require('./config.json');
const mongoose = require('mongoose');
const { schema } = require('./models/profileSchema');
const profileModel = require('./models/profileSchema');
const AutoPoster = require('topgg-autoposter')


client.commands = new Discord.Collection();
client.events = new Discord.Collection();


client.config = {
    prefix: config.prefix,
    
  };


['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord)
});

mongoose.connect(process.env.MONGODB_SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}).then(()=>{
    console.log('Connected to the DataBase!');
}).catch((err) =>{
    console.log(err);
});
client.bal = (userID) => new Promise(async ful => {
    const data = await profileModel.findOne({userID});
    if(!data) return ful(0);
    ful(data.stars);
})
client.add = (userID, stars) => {
    profileModel.findOne({ userID}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.stars +=stars;
        } else {
            data = new schema({userID, stars})
        }
        data.save();
    })
}
client.rmv = (userID, stars) => {
    profileModel.findOne({ userID}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.stars -=stars;
        } else {
            data = new schema({userID, stars: -stars})
        }
        data.save();
    })
}
client.discordTogether = new DiscordTogether(client, {
    token: config.token
});


client.login(config.token);
