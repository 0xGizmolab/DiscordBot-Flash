const { Message, Client, Permissions } = require("discord.js");
const GuildSettings = require("../../models/settings");
module.exports = {
    name: "setprefix",
    aliases: ['newprefix'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {

        if (!message.member.permissions.has([Permissions.FLAGS.MANAGE_GUILD]))
            return message.channel.send(`You do not have the required permissions to use this command.`);

        const newPrefix = args[0];
        if (!newPrefix) return message.channel.send(`Please specify a new prefix.`);
        if (newPrefix.length > 3) return message.channel.send(`Prefixes can only be up to 3 characters long.`);

        await GuildSettings.findOne(
            {
                gid: message.guild.id
            },
            async (err, guild) => {
                if (err) console.error(err);
                if (!guild) {
                    const newGuild = new GuildSettings({
                        gid: message.guild.id,
                        prefix: newPrefix,
                    });

                    await newGuild
                        .save()
                        .then(result => console.info(`Prefix Updated For ${message.guild.name}`))
                        .catch(err => console.error(err));

                    return message.channel.send(
                        `The prefix for this server has been set to ${newPrefix}`
                    );
                } else {
                    guild
                        .updateOne({
                            prefix: newPrefix
                        })
                        .then(result => console.info(`Prefix Updated For ${message.guild.name}`))
                        .catch(err => console.error(err));

                    return message.channel.send(
                        `The prefix for this server has been set to ${newPrefix}`
                    );
                }
            }
        );

    },
};
