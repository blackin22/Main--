const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "avatar",
	aliases: ["av"],
	run: async (client, message, args, db, prefix) => {

	  let usuario = args[0] ? message.mentions.users.first() || await client.users.fetch(args[0]).catch(_ => message.author) : message.author
      let png = usuario.avatarURL({ size: 1024, format: "png" });
      let gif = usuario.avatarURL({ dynamic: true, size: 1024 });
      let webp = usuario.avatarURL({ size: 1024, format: "webp" });
	
     let embed = new MessageEmbed()
     .setAuthor(`${usuario.username} - Avatar`, usuario.displayAvatarURL({dynamic: true}))
     .setDescription(`**[PNG](${png}) | [GIF](${gif}) | [WEBP](${webp})**`)
     .setImage(gif)
     message.channel.send(embed)
	}
}