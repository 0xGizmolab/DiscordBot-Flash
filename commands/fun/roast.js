const fetch = require("node-fetch").default;
module.exports = {
    name: "roast",
    aliases: [],
    permissions: [],
    description: "roasts you",
    usage: "-roast",
async execute(message, args, cmd, client, discord, profileData) {
                 
fetch(`https://api2.snowflakedev.xyz/api/roast`, {
    headers: {
        "Authorization": process.env.SNOWFLAKEAPI
    }
})
.then(res => res.json())
.then(data => {
    message.channel.send(data.roast)
})
.catch(e => console.error(e));

}
}

