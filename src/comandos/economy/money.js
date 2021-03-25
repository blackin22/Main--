const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "money",
	aliases: ["bal", "saldo", "carteira", "bank"],
	run: async (client, message, args, db, prefix) => {
		 let coins = await db.ref(`Guilds/${message.guild.id}/User/${message.author.id}/Money`).once("value")
         let bank = await db.ref(`Guilds/${message.guild.id}/User/${message.author.id}/Money/Bank`).once("value")
	     coins = coins.val()
	     bank = bank.val()

	     if(coins === null) {
	     	coins = "0"
	     } 

	     if(bank === null) {
	     	bank = "0"
	     }

         let embed = new MessageEmbed()
         .setDescription(`> **Carteira:** __R$${coins}__\n> **Banco:** __R$${bank}__`) 
	     message.channel.send(embed)
	}
}