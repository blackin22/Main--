const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "help",
	aliases: ["ajuda"],
	run: async (client, message, args, db, prefix) => {

      let embed = new MessageEmbed()
      .setAuthor(`${client.user.username} - Painel de ajuda.`)
      .setDescription(`> **${message.author} Olá?, seja bem vindo a central/painel de ajuda. aqui mostrará meus comandos, basta clicar na reação da categoria desejada.**\n> **Total de comandos:** \`12\`\n\n:one: **- Configurações** \`[1]\`\n:two: **- Informativos** \`[5]\`\n:three: **- Economia** \`[6]\`\n:arrow_backward: - **Voltar para o menu princípal.**`)
      .addField("Opções - OBS:", '`[] - obrigatorio || () - opcional`')
      .addField("Comandos:", `> **Ativo:** \\🟢 *\n> **Manuntenção:** \\🔴 *\n> **Desenvolvimento:** \\🟡 *`)
      .setTimestamp()
      .setFooter(`- Requisitado por: ${message.author.tag} - ${message.author.id}`, message.author.displayAvatarURL())
	  message.channel.send(embed).then((msg) => {
        msg.react("1️⃣")
        msg.react("2️⃣")
        msg.react("3️⃣")
        msg.react("◀️")

	  	const filter = (reaction, user) => {
	  		return reaction.emoji.name === "1️⃣" && user.id === message.author.id;
	  	}

	  	const filter2 = (reaction, user) => {
	  		return reaction.emoji.name === "2️⃣" && user.id === message.author.id;
	  	}

	  	const filter3 = (reaction, user) => {
	  		return reaction.emoji.name === "3️⃣" && user.id === message.author.id;
	  	}
      const filter4 = (reaction, user) => {
        return reaction.emoji.name === "◀️" && user.id === message.author.id;
      }

	  	let coletor1 = msg.createReactionCollector(filter, {time: 60000})
	  	let coletor2 = msg.createReactionCollector(filter2, {time: 60000})
	  	let coletor3 = msg.createReactionCollector(filter4, {time: 60000})
	  	let coletor4 = msg.createReactionCollector(filter3, {time: 60000})
        coletor1.on("collect", r => {
        	let embed_config = new MessageEmbed()
        	.setTitle(`Configuração | ${client.user.username}:tm:`)
        	.setDescription(`> \\🟢 | ${prefix}prefix - \`[new_prefix]\` - **Alterar o meu prefixo atual, no seu servidor.**`)
        	msg.edit(embed_config)
        	r.users.remove(message.author.id)
        })

          coletor2.on("collect", r => {
        	let embed_info = new MessageEmbed()
        	.setTitle(`Informativos | ${client.user.username}:tm:`)
        	.setDescription(`> \\🟢 | ${prefix}ping - **Mostrar o meu ping atual.**\n> \\🟢 | ${prefix}help - **Mostrar informações sobre mim, relacionadas a comandos.**\n> \\🟢 | ${prefix}userinfo \`(member)\` **- Mostrar informações suas ou do usuário desejado.**\n> \\🟢 | ${prefix}serverinfo - **Mostrar informações do seu servidor**.\n> \\🟢 | ${prefix}avatar \`(member)\` **- Mostrar o avatar seu ou do usuário desejado.**`)
        	msg.edit(embed_info)
        	r.users.remove(message.author.id)
        })

          coletor4.on("collect", r => {
          let embed_economy = new MessageEmbed()
          .setTitle(`Economia | ${client.user.username}:tm:`)
          .setDescription(`> \\🟢 | ${prefix}jobs - **Mostrar os empregos disponiveis atuais.**\n> \\🟢 | ${prefix}job [id-emprego] - **Mostrar os empregos disponiveis atuais.**\n> \\🟢 | ${prefix}trabalhar - **Trabalhar obvio, e ganhar dinheiro de acordo com o seu trabalho.**\n> \\🟢 | ${prefix}money (member) - **Mostrar o seu saldo do banco quanto da carteira atual ou do usuário desejado.**\n> \\🟢 | ${prefix}indentidade (member) - **Mostrar suas informações sobre entidade da economia.**\n> \\🟢 | ${prefix}gift - **Apenas um presente, para iniciar, a ganhar dinheiro.**`)
          msg.edit(embed_economy)
          r.users.remove(message.author.id)
        })

         coletor3.on("collect", r => {
         	msg.edit(embed)
         	r.users.remove(message.author.id)
         }) 
	  })
	}
}