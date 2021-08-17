const { Client, Collection } = require("discord.js");
const { DiscordTogether } = require('discord-together');
const mongoose = require("mongoose");
const Dashboard = require("./dashboard/dashboard");
const { schema } = require('./models/profileSchema');
const profileModel = require('./models/profileSchema');
const client = new Client({
    intents: 32767,
});
module.exports = client;

// Global Variables

client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.js");
mongoose.connect(client.config.mongooseConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
client.discordTogether = new DiscordTogether(client, {
     token: client.config.token
 });


//economy functions
client.bal = (userID) => new Promise(async ful => {
  const data = await profileModel.findOne({userID});
  if(!data) return ful(0);
  ful(data.wallet);
})
client.add = (userID, wallet) => {
  profileModel.findOne({ userID}, async(err, data) => {
      if(err) throw err;
      if(data) {
          data.wallet +=wallet;
      } else {
          data = new schema({userID, wallet})
      }
      data.save();
  })
}
client.rmv = (userID, wallet) => {
  profileModel.findOne({ userID}, async(err, data) => {
      if(err) throw err;
      if(data) {
          data.wallet -=wallet;
      } else {
          data = new schema({userID, wallet: -wallet})
      }
      data.save();
  })
}
// Initializing the project
require("./handler")(client);
client.login(client.config.token);
Dashboard(client);