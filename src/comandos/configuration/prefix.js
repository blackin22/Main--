
module.exports = {
	name: "prefix",
	aliases: ["prefix-set", "set-prefix", "setprefix"],
  run: async (client, message, args, db, prefix) => {
      let prefix_atual = await db.ref(`Guilds/${message.guild.id}/Prefixo`).once("value")
      prefix_atual = prefix_atual.val()

      let arg = args[0];
      if(!arg) return message.channel.send("> **Insira um novo prefixo para ser alterado no meu banco de dados.**")

      if(arg === prefix_atual) return message.channel.send(`> **Este prefixo, que está inserindo já estás sendo usado no momento atual!**`)
      if(arg.length > 3) return message.channel.send(`> **Só aceito prefixo, com até 3 caracteres no maximo**`)
      
      message.channel.send(`> **[${arg}] foi alterado no meu banco de dados, como novo prefixo com sucesso.**`)
	  db.ref(`Guilds/${message.guild.id}/Prefixo`).set(arg)
	}
}