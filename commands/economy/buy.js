const inventory = require('../../models/inventory');
const items = require('../../shopItems')
const profileModel = require('../../models/profileSchema');
module.exports = {
    name: 'buy',
    aliases: ['purchase'],
    description: "Buy Something From The Shop",
    permissions: [],
    usage: "f-buy <item>",
   async execute(message, args, cmd, client, Discord, profileData) {
        if (!args[0]) return message.lineReply('Please Specify an item to buy!')
        const itemToBuy = args[0].toUpperCase();

        const validItem = !!items.find((val) => val.item === itemToBuy);
        if(!validItem) return message.lineReply('Item does not exist');
        
        const itemPrice = items.find((val) => (val.item.toUpperCase()) === itemToBuy).price;

        const userBalance = await client.bal(message.author.id);
        if(userBalance < itemPrice) return message.lineReply(`You dont have enough balance to buy ${itemToBuy}`);

        const params = {
            User: message.author.id
        }

        inventory.findOne(params, async(err, data) => {
            if(data) {
                const hasItem = Object.keys(data.Inventory).includes(itemToBuy);
                if(!hasItem) {
                    data.Inventory[itemToBuy] = 1;
                } else {
                    data.Inventory[itemToBuy]++
                }
                 await inventory.findOneAndUpdate(params, data);
                 message.lineReply(`You Have Bought **${itemToBuy}** for **${itemPrice}𝕾**`);
                client.rmv(message.author.id, itemPrice);
            } else {
                new inventory({
                    User: message.author.id,
                    Inventory: {
                        [itemToBuy]: 1
                    } 
                }).save();
                
               
                message.lineReply(`You Have Bought **${itemToBuy}** for **${itemPrice}𝕾**`);
                client.rmv(message.author.id, itemPrice);
                


            }
        })



    },
};    