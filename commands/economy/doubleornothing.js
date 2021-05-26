const profileModel = require("../../models/profileSchema");
module.exports = {
    name: 'doubleornothing',
    aliases: ["don"],
    permissions: [],
    cooldown: 10,
    description: "bet your senkos for double or nothing!",
    usage: "f-doubleprnothing <amount> or f-don <amount>",
   async execute(message, args, cmd, client, Discord, profileData) {
       
        if(!args[0]) return message.lineReply('Please Specify an amount to bet');

        if(isNaN(args[0])) return message.lineReply('Please enter a whole number');

        const amountToBet = args[0];

        if (amountToBet > profileData.stars) return message.channel.send(`You don't have that amount of stars to bet`); 

        function random() {
            const num = Math.floor(Math.random() * 2);
            return num === 1;
        };

        if(random() === true) {
            const winAmount = amountToBet * 2;
            await profileModel.findOneAndUpdate(
                {
                  userID: message.author.id,
                },
                {
                  $inc: {
                    stars: winAmount,
                  },
                }
              );
            
            message.lineReply(` Congrats you won **${winAmount}𝕾**`)

        } else {
            await profileModel.findOneAndUpdate(
                {
                  userID: message.author.id,
                },
                {
                  $inc: {
                    stars: -amountToBet,
                  },
                }
              );
            message.lineReply(`Aww You Lost **${amountToBet}𝕾**! Better luck Next Time`);

        }    

   }
}