const { Client, Collection } = require("discord.js");
const { DiscordTogether } = require('discord-together');
const mongoose = require("mongoose");
const Dashboard = require("./dashboard/dashboard");
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
    useUnifiedTopology: true
  });
client.discordTogether = new DiscordTogether(client, {
     token: client.config.token
 });

// Initializing the project
require("./handler")(client);
client.login(client.config.token);
Dashboard(client);