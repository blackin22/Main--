const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "indentidade",
	aliases: ["rg"],
	run: async(client, message, args, db, prefix) => {

        let usuario = client.users.cache.get(args[0]) || message.mentions.users.first() || message.author


        let level = await db.ref(`Guilds/${message.guild.id}/User/${usuario.id}/Level`).once("value")
        level = level.val()
		let emprego = await db.ref(`Guilds/${message.guild.id}/User/${usuario.id}/Emprego`).once("value")
		emprego = emprego.val()
	let coins = await db.ref(`Guilds/${message.guild.id}/User/${message.author.id}/Money`).once("value")
         let bank = await db.ref(`Guilds/${message.guild.id}/User/${message.author.id}/Money/Bank`).once("value")
	     coins = coins.val()
	     bank = bank.val()

	     if(coins === coins) {
	     	coins = "0"
	     } else if(bank === bank) {
	     	bank = "0"
	     }


		if(emprego === 1) {
            emprego = "Médico"
		} else if(emprego === 2) {
			emprego = "Mecânico"
 		} else if(emprego === 3) {
 			emprego = "Programador"
 		}

 		if(emprego === null) emprego = "Ainda não tem emprego."

 			if(level === null) level = "0"
 				if(bank === null) bank = "0"

 		let embed = new MessageEmbed()
 		.setTitle("- Indentidade.")
 		.setDescription(`> **Nome:** ${usuario.username}\n> **Emprego:** ${emprego}\n> **Level:** ${level}\n> **Dinheiro no banco:** R$${bank}`)
 		message.channel.send(embed)
	}
}