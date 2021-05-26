module.exports = {
    name: 'clear',
    description: "clears the messages",
    permissions: ["ADMINISTRATOR"],
    aliases: ["purge"],
    usage: "f-clear <number of messages to clear>",
    async execute(message, args, cmd, client, Discord) {
        if(!args[0]) return message.reply("Please enter the amount of messages that you want to clear!");
        if(isNaN(args[0])) return message.reply("Please enter a Real Number!")

        if(args[0] > 100) return message.reply("You cannot Delete More than 100 Messages!");
        if(args[0] < 1) return message.reply("You need To clear atleast One message!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });


        
    }
}