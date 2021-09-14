const { Message, Client, MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js");

module.exports = {
    name: "help",
    aliases: ['sounds'],
    description: "Help Command",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const emojis = {
            games: "854025637136302083",
        }

        const directories = [...new Set(client.commands.map(cmd => cmd.directory))];

        const formatString = (str) =>
            `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`

        const categories = directories.map((dir) => {
            const getCommands = client.commands.filter(cmd => cmd.directory === dir)
                .map(cmd => {
                    return {
                        name: cmd.name || 'No Name',
                        description: cmd.description || 'No Description',

                    }
                });
            return {
                directory: formatString(dir),
                commands: getCommands,

            }
        });

        const embed = new MessageEmbed()
            .setTitle(`Commands of ${client.user.username}`)
            .setColor('RANDOM')
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription('** Please Select a category to view all its commands**')
        const components = (state) => [
            new MessageActionRow().addComponents(
                new MessageSelectMenu()
                    .setCustomId("help-menu")
                    .setPlaceholder("Please Select a Category")
                    .setDisabled(state)
                    .addOptions(
                        categories.map((cmd) => {
                            return {
                                label: cmd.directory,
                                value: cmd.directory.toLowerCase(),
                                description: `Sounds from ${cmd.directory} category`,
                                emoji: emojis[cmd.directory.toLowerCase()] || null
                            };
                        })
                    )
            ),

        ];
        const initialMessage = await message.channel.send({ embeds: [embed], components: components(false) });

        const filter = (interaction) => interaction.user.id === message.author.id;

        const collector = message.channel.createMessageComponentCollector(
            {
                filter,
                componentType: "SELECT_MENU",
                time: 300000
            });

        collector.on('collect', (interaction) => {
            const [directory] = interaction.values
            const category = categories.find(x => x.directory.toLowerCase() === directory)

            const categoryEmbed = new MessageEmbed()
                .setTitle(`${directory} Category`)
                .setDescription(`Use y!${directory} To get this soundboard with buttons\n**${directory}** category has the following sounds:`)
                .addFields(
                    category.commands.map(cmd => {
                        return {
                            name: `\`${cmd.name}\``,
                            value: `y!${cmd.name}`,
                            inline: true
                        }
                    })
                )
            interaction.update({ embeds: [categoryEmbed], ephemeral: true })
        })

        collector.on('end', () => {
            initialMessage.edit({ components: components(true) });
        }
        )
    },
};
