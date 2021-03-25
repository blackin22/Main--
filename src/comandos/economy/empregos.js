const { MessageEmbed } = require("discord.js")
module.exports = {
	name: "empregos",
	aliases: ["jobs"],
  run: async (client, message, args, db, prefix) => {

     let embed = new MessageEmbed()
     .setTitle("> Empregos - Economia")
     .setDescription(`**Por enquanto teremos, 3 empregos.**\nPara escolher um emprego use o comando: ${prefix}job [id-emprego]\n\n:one: - Médico | Level: 8\n:two: - Mecânico | Level: 5\n:three: - Programador | Level: 10`)
     .setTimestamp()
     .setFooter(`- Requisitado por: ${message.author.tag} - ${message.author.id}`)
     message.channel.send(embed)
   }
}