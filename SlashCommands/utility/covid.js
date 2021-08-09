const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const fetch = require("node-fetch")
module.exports = {
    name: "covid",
    description: "Track a country or worldwide COVID-19 cases",
    options: [
        {
            name: "country",
            description: "The country you want to track",
            type: "STRING",
            required: true,
        
        },
    ],

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {


        const [country] = args


        
        const noArgs = new MessageEmbed()
        .setTitle('Missing fields')
        .setColor(0xFF0000)
        .setDescription('You are missing some fields (ex: /covid all || /covid India)')
        .setTimestamp()

        if(!country) return interaction.followUp(noArgs);

        if(country === "all"){
            fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new MessageEmbed()
                .setTitle(`Worldwide COVID-19 Stats 🌎`)
                .addField('Confirmed Cases', confirmed)
                .addField('Recovered', recovered)
                .addField('Deaths', deaths)

                interaction.followUp({embeds: [embed]})
            })
        } else {
            fetch(`https://covid19.mathdro.id/api/countries/${country}`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new MessageEmbed()
                .setTitle(`COVID-19 Stats for **${country}**`)
                .addField('Confirmed Cases', confirmed)
                .addField('Recovered', recovered)
                .addField('Deaths', deaths)

                interaction.followUp({embeds: [embed]})
            }).catch(e => {
                return interaction.followUp({content: `Invalid Country Provided`})
            })
        }
    
    },
};
