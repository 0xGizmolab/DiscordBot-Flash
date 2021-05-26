const profileModel = require("../../models/profileSchema");
module.exports = {
    name: 'beg',
    aliases: [],
    permissions: [],
    cooldown: 60,
    description: "beg for senkos",
    usage: "f-beg",
   async execute(message, args, cmd, client, Discord, profileData) {
   
    const muni = Math.floor(Math.random() * 50) + 60;
    const persons = [
        `**Thanos**`,
        `**The girl that you where caught with in bed last night**`,
        `**Ambani**`, // :)
        `**The money that spitted in your face**`,
        `**The local dumb Jilly mek Weilly**`,
        `**Spongebob**`,
        `**Nancy James**`,
        `**Your hitman**`,
        `**Your mom**`,
        `**The star that you and your girlfriend were watching when the apocalypse came**`,
        `**Roblox Owner**`,
        `**Noob**`,
        `**E-Girl**`,
        `**Russia**`,
        `**Ad blocker**`,
        `**Dank Memer**`,
        `**Gizmo**`,
        `**The youtube like button**`,
        `**The movie that you watched last night**`,
        `**The meme that you didnt liked**`,
        `**Capcha test**`,
        `**The noob that have skin**`,
        `**Your discord file**`,
        `**Kylie Jenner**`,
        `**Kanye West**`,
        `**Cristiano Ronaldo**`,
        `**Tyler Perry**`,
        `**Neymar**`,
        `**Howard Stern**`
   ]
   const breh = [
       `: uh sure enjoy **${muni}** coins`,
       `: nice begger dude, get **${muni}** coins just for that.`,
       `: ok get my **${muni}** coins.`,
       `: oh ok there, **${muni}** coins.`,
       `: aww no one cares about you, get these **${muni}** coins pls.`,
       `: pro at begging take my **${muni}** coins.`,
       `: o oo oo o **${muni}** coins.`,
       `: and thats your way of getting money? :/ fine take my **${muni}** coins.`,
       `: why not **${muni}** coins for you.`,
       `: nice get **${muni}** coins.`
   ]
   const ok = [
    `: ur not that good at begging so no coins`,
    `: sorry dude, i've used all my money on skins :/`,
    `: hello im from NOTHING federation and you get our name`,
    `: nah`,
    `: seems like no one likes you :D`,
    `: sorry dude im looking to buy ${message.author.username}'s head i cant give u money.`
   ]
   var o = Math.floor(Math.random() * ok.length);
const okk = ok[o]
   var breh1 = Math.floor(Math.random() * breh.length);
   var persons1 = Math.floor(Math.random() * persons.length);
   var bruh = breh[breh1]
   var person = persons[persons1]
   var num = Math.floor(Math.random() * 2) +0;
if(num != 1) {
  const response = await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        stars: muni,
      },
    }
  );   
  message.channel.send(`${person}${bruh}`)
  //giving muni
} else if (num != 0){
  message.channel.send(`${person}${okk}`)
  //not giving muni
}
  },
};
