const profileModel = require("../../models/profileSchema");
module.exports = {
    name: 'work',
    aliases: [],
    permissions: [],
    cooldown: 60,
    description: "It pays you to work",
    usage: "f-work",
   async execute(message, args, cmd, client, Discord, profileData) {
    const jobs = ['Programmer', 'Builder', 'Dancer', 'Esports Player', 'Streamer', 'Singer', 'Tiktoker', 'Youtuber', 'Engineer', 'Doctor', 'Pilot', 'Driver', 'Athlete', 'Racer']
    const jobIndex = Math.floor(Math.random() * jobs.length);
    const stars = Math.floor(Math.random() * 500) + 1;
    await profileModel.findOneAndUpdate(
      {
        userID: message.author.id,
      },
      {
        $inc: {
          stars: stars,
        },
      }
    );
    return message.channel.send(`${message.author.username}, you worked as a **${jobs[jobIndex]}** and earned ${stars}**𝕾**`);
  },
};
