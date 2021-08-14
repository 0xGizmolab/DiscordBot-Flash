const client = require("../index");
const GuildSettings = require("../models/settings");
client.on("messageCreate", async (message) => {
    const guilddb = await GuildSettings.findOne(
        {
          gid: message.guild.id
        },
        (err, guild) => {
          if (err) console.error(err);
        }
      );
      // IF DATABASE HAS A ENTRY
      if (guilddb) {
        let prefix;
        if (!guilddb.prefix) {
          prefix = client.config.prefix
        } else {
          prefix = guilddb.prefix;
        }
        if (message.mentions.has('@everyone')) {
            return
          }
          if (message.mentions.has(client.user.id)) {
            message.channel.send(`${prefix} is my prefix for this server`)
          }
    if (
        message.author.bot ||
        !message.guild ||
        !message.content.toLowerCase().startsWith(prefix)
    )
        return;

    const [cmd, ...args] = message.content
        .slice(prefix.length)
        .trim()
        .split(" ");

    const command = client.commands.get(cmd.toLowerCase());

    if (!command) return;
    await command.run(client, message, args);
      }

      // IF DATABASE HAS NO ENTRY
      if (!guilddb) {
        let prefix = client.config.prefix;
        if (message.mentions.has('@everyone')) {
            return
          }
          if (message.mentions.has(client.user.id)) {
            message.channel.send(`${prefix} is my prefix for this server`)
          }
    if (
        message.author.bot ||
        !message.guild ||
        !message.content.toLowerCase().startsWith(prefix)
    )
        return;

    const [cmd, ...args] = message.content
        .slice(prefix.length)
        .trim()
        .split(" ");

    const command = client.commands.get(cmd.toLowerCase());

    if (!command) return;
    await command.run(client, message, args);
      }
      


});
