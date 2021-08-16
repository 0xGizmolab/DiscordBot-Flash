const { Client, ContextMenuInteraction, MessageEmbed } = require("discord.js");
const axios = require("axios")
const config = require("../../config");
module.exports = {
    name: "getbanner",
    type: "USER",

    /**
     *
     * @param {Client} client
     * @param {ContextMenuInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const user = await client.users.fetch(interaction.targetId);
        axios.get(`https://discord.com/api/users/${user.id}`, {
            headers: {
                "Authorization": `Bot ${config.token}`
            }
        })
            .then(response => {
                const { banner, accent_color} = response.data;
                if(banner) {
                    const extension = banner.startsWith("a_") ? ".gif" : ".png";
                    const url = `https://cdn.discordapp.com/banners/${user.id}/${banner}${extension}?size=2048`;
                    const bannerimg = new MessageEmbed()
                    .setTitle(`${user.username}'s Banner`)
                    .setImage(url);
        
                interaction.followUp({ embeds: [bannerimg] })
                }
                else {
                    if (accent_color) {
                        const color = new MessageEmbed()
                        .setAuthor(user.tag)
                        .setTitle(`${user.username}'s Accent Color`)
                        .setColor(accent_color);
                        interaction.followUp({ embeds: [color] })
                    } else return interaction.followUp("No banner or accent color found");
                }
            });




       

    },
};
