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
        "Authorization": "NDI4NTI5OTI1NzUwOTE1MDcz.MTYxODQ3NDMzMTQwMw==.5d4c88bfceea2ec116a191fa6d458205"
    }
})
.then(res => res.json())
.then(data => {
    message.channel.send(data.roast)
})
.catch(e => console.error(e));

}
}

