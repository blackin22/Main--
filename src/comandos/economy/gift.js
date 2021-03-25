module.exports = {
    name: 'gift',
    run: async (client, message, args, db, prefix) => {
        
		let level = await db.ref(`Guilds/${message.guild.id}/User/${message.author.id}/Level`).once("value")
		level = level.val()

		let teste = await db.ref(`Guilds/${message.guild.id}/User/${message.author.id}/TempPing`).once("value")
		teste = teste.val()
		let cooldown = 3153600000000
		let time = cooldown - (Date.now() - teste);

		if (teste !== null && cooldown - (Date.now() - teste) > 0) {
			return message.channel.send(`> **Esse prêmio, só podes pegar uma vez :/**`)
		} else { 
		message.channel.send(`Olá! acho que você acabou ganhando um presente... Level [5]! para pegar mais informações, use: ${prefix}indentidade`)
		await db.ref(`Guilds/${message.guild.id}/User/${message.author.id}/Level`).set(level + 5)
        await db.ref(`Guilds/${message.guild.id}/User/${message.author.id}/TempPing`).set(Date.now())
	  }
    }
}