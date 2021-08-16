const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "akinator",
    aliases: ['aki'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const emojis = ["👍", "👎", "❔", "🤔", "🙄", "❌"];
        const isPlaying = new Set();
        const { Aki } = require("aki-api");

        if (isPlaying.has(message.author.id)) {
            return message.channel.send({content: ":x: | The game already started.."});
        }

        isPlaying.add(message.author.id);

        const aki = new Aki("en"); // Full languages list at: https://github.com/jgoralcz/aki-api

        await aki.start();

        const q = new MessageEmbed()
        .setTitle(`${message.author.username}, Question ${aki.currentStep + 1}`)
        .setColor("RANDOM")
        .setDescription(`**${aki.question}**\n${aki.answers.map((an, i) => `${an} | ${emojis[i]}`).join("\n")}`)
        

        const msg = await message.channel.send({embeds: [q]});

        for (const emoji of emojis) await msg.react(emoji);

        const collector = msg.createReactionCollector((reaction, user) => emojis.includes(reaction.emoji.name) && user.id == message.author.id, {
            time: 60000 * 6
        });

        collector
            .on("end", () => isPlaying.delete(message.author.id))
            .on("collect", async ({
                emoji,
                users
            }) => {
                users.remove(message.author).catch(() => null);

                if (emoji.name == "❌") return collector.stop();

                await aki.step(emojis.indexOf(emoji.name));

                if (aki.progress >= 70 || aki.currentStep >= 78) {

                    await aki.win();

                    collector.stop();

                    const ans = new MessageEmbed()
                    .setTitle("Is this your character?")
                        .setDescription(`**${aki.answers[0].name}**\n${aki.answers[0].description}\nRanking as **#${aki.answers[0].ranking}**\n\n[yes (**y**) / no (**n**)]`)
                        .setImage(aki.answers[0].absolute_picture_path)
                        .setColor("RANDOM")


                    message.channel.send({embeds: [ans]});

                    const filter = m => /(yes|no|y|n)/i.test(m.content) && m.author.id == message.author.id;

                    message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 30000,
                        errors: ["time"]
                    })
                        .then(collected => {
                            const isWinner = /yes|y/i.test(collected.first().content);
                            const right = new MessageEmbed()
                            .setTitle(isWinner ? "Great! Guessed right one more time." : "Uh. you Won")
                                .setColor("RANDOM")
                                .setDescription("I love playing with you!")
                            message.channel.send({embeds: [right]});
                        }).catch(() => null);

                } else {

                    const qn = new MessageEmbed()
                    .setTitle(`${message.author.username}, Question ${aki.currentStep + 1}`)
                        .setColor("RANDOM")
                        .setDescription(`**${aki.question}**\n${aki.answers.map((an, i) => `${an} | ${emojis[i]}`).join("\n")}`)

                    msg.edit({embeds: [qn]});
                }
            })
    },
};
