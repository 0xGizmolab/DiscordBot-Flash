const client = require("../index");

client.on("ready", () => {
    
client.user.setActivity(`${client.users.cache.size} PEOPLE DO STUPIDITY | f-help`, {
    type: "WATCHING",
  });
    console.log(`${client.user.tag} is up and ready to go!`)
});
