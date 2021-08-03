const { Client, Collection } = require("discord.js");
const { DiscordTogether } = require('discord-together');

const client = new Client({
    intents: 32767,
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");
client.discordTogether = new DiscordTogether(client, {
    token: client.config.token
});

// Initializing the project
require("./handler")(client);

client.login(client.config.token);
