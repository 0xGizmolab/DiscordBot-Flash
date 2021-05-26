const guildNumber = new Map();
const guildAttempts = new Map();

function guildNumberMap(message) {
    const guildId = message.guild.id;

    let number = Math.floor(Math.random() * 10) + 1;
    // If there is no command running map for the guild, create one
    if (!guildNumber.get(guildId)) {
        guildNumber.set(guildId, number);
    }
}

function guildAttemptsMap(message) {
    const guildId = message.guild.id;
    // If there is no command running map for the guild, create one
    if (!guildAttempts.get(guildId)) {
        guildAttempts.set(guildId, { attempts: 1 });
    } else {
        guildAttempts.get(guildId).attempts++;
    }
}
module.exports = {
    name: "guessthenumber",
    description: "Try and guess the number!",
    permissions: [],
    cooldown: 0,
    usage: "f-guess <number>",
    aliases: ["gtn", "guess"],
async execute(message, args, cmd, client, Discord, profileData) {
        const { member, channel, guild } = message;

        const provideaguess = new Discord.MessageEmbed()
            .setColor('#F30B04')
            .setDescription(`**❌ Please provide a guess!**`)
            .setFooter('command: f-guess <number>')

        const pickinganumber = new Discord.MessageEmbed()
            .setColor('#33F304')
            .setDescription('**I picked a number between 1 and 10! Try To Guess it**')
            .setFooter('command: f-guess <number>')



        await guildNumberMap(message);
        await guildAttemptsMap(message);

        let guess = args[0];
        if (!guess && guildAttempts.get(guild.id).attempts === 1) {
            return channel.send(pickinganumber)
        } else if (!guess) {
            return channel.send(provideaguess);
        }

        if (+guess === guildNumber.get(guild.id)) {
            let attempts = guildAttempts.get(guild.id);

            const guessedthenumber = new Discord.MessageEmbed()
                .setColor('#33F304')
                .setDescription(`✅ Perfect, <@${member.id}>the number was ${guildNumber.get(guild.id)}, it only took you ${attempts.attempts} attempts!`)

            channel.send(guessedthenumber);
            guildNumber.delete(guild.id);
            guildAttempts.delete(guild.id);
            

            return;
        } else if (+ guess < guildNumber.get(guild.id)) {
            return message.reply(`${guess} Is too low!`);
        } else if (+guess > guildNumber.get(guild.id)) {
            return message.reply(`${guess} Is too high!`);
        } else {
            return message.reply("Invalid number please try again");
        }
    },
};