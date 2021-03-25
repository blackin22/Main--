module.exports = {
	name: "ping",
	aliases: ["pong"],
	run: async (client, message, args, db, prefix) => {

		message.channel.send(`**[BOT] - API:** \`${Math.round(client.ws.ping)}ms\`\n> Olá! acho que você acabou ganhando um presente... Level [5]! para pegar mais informações, use: ${prefix}indentidade`)
		await db.ref(`Guilds/${message.guild.id}/User/${message.author.id}/Level`).set(level + 5)

  }
}