require('dotenv').config();
const prettyMilliseconds = require('pretty-ms');
const fetch = require("node-fetch").default;
const config = require('../../config.json');
const prefix = config.prefix;
const profileModel = require("../../models/profileSchema");

const cooldowns = new Map();


module.exports = async (Discord, client, message) => {

  client.user.setActivity(`${client.users.cache.size} PEOPLE DO STUPIDITY | f-help`, {
    type: "WATCHING",
  });

    const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
    const prefix = message.content.match(prefixMention) ? message.content.match(prefixMention)[0] : client.config.prefix;     

    if(!message.content.startsWith(prefix)) return;
    if (!message.guild) return;
    if(message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

   
    let profileData;
    try {
      profileData = await profileModel.findOne({ userID: message.author.id });
      if (!profileData) {
        let profile = await profileModel.create({
          userID: message.author.id,
          serverID: message.guild.id,
          stars: 100,
          bank: 0,
        });
        profile.save();
      }
    } catch (err) {
      console.log(err);
    }

    if(!cooldowns.has(command.name)){
        cooldowns.set(command.name, new Discord.Collection());
    }
  
    

    const current_time = Date.now();
    const time_stamps = cooldowns.get(command.name);
    const cooldown_amount = (command.cooldown) * 1000;

    if(time_stamps.has(message.author.id)){
        const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;

        if(current_time < expiration_time){
            const time_left = prettyMilliseconds(expiration_time - current_time);
            

            return message.reply(`Please wait ${time_left} before using this command`);
        }
    }

    
    time_stamps.set(message.author.id, current_time);
    
    setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);

    const validPermissions = [
        "CREATE_INSTANT_INVITE",
    "KICK_MEMBERS",
    "BAN_MEMBERS",
    "ADMINISTRATOR",
    "MANAGE_CHANNELS",
    "MANAGE_GUILD",
    "ADD_REACTIONS",
    "VIEW_AUDIT_LOG",
    "PRIORITY_SPEAKER",
    "STREAM",
    "VIEW_CHANNEL",
    "SEND_MESSAGES",
    "SEND_TTS_MESSAGES",
    "MANAGE_MESSAGES",
    "EMBED_LINKS",
    "ATTACH_FILES",
    "READ_MESSAGE_HISTORY",
    "MENTION_EVERYONE",
    "USE_EXTERNAL_EMOJIS",
    "VIEW_GUILD_INSIGHTS",
    "CONNECT",
    "SPEAK",
    "MUTE_MEMBERS",
    "DEAFEN_MEMBERS",
    "MOVE_MEMBERS",
    "USE_VAD",
    "CHANGE_NICKNAME",
    "MANAGE_NICKNAMES",
    "MANAGE_ROLES",
    "MANAGE_WEBHOOKS",
    "MANAGE_EMOJIS",
    ] 
    
    if(command.permissions.length){
        let invalidPerms = []
        for(const perm of command.permissions){
            if(!validPermissions.includes(perm)){
                return console.log(`Invalid Permissions ${perm}`);
            }
            if(!message.member.hasPermission(perm)){
                invalidPerms.push(perm);
                
            }
        }
        if (invalidPerms.length){
            return message.reply(`You do not have the permissions to use this command`);
        }
    }

    


    if(command) command.execute(message, args, cmd, client, Discord, profileData)
 
    
  
  }

    