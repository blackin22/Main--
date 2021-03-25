module.exports = {
	name: "job",
	aliases: ["emprego"], 
	run: async (client, message, args, db, prefix) => {

		
       let level = await db.ref(`Guilds/${message.guild.id}/User/${message.author.id}/Level`).once("value")
       level = level.val()

		const jobs = {
		   medico: {
			id: 1,
			name: "Médico",
			salario: "1400",
			level: 8
		},
		mecanico: {
		    id: 2,
		    name: "Mecânico",
		    salario: "1250",
		    level: 5
		},
		programador: {
			id: 3,
			name: "Programador",
			salario: "4500",
			level: 10
		}
      }

       const find = parseInt(args[0]);
       const list = Object.entries(jobs).map(([_, value]) => value).find((x) => x.id == find)
	
       if(!list) {
       	return message.channel.send(`> **[ID - Emprego] este emprego, não existe.**`)
       } else if(list.level > level) {
       	return message.channel.send(`> **Você não tem, level suficiente para pegar esse emprego**`)
       } else {
          message.channel.send(`> **Você agora trabalha como: ${list.name}! salario: \`R$${list.salario}\`**`)  
          switch (find) {
          	case 1:
          	await db.ref(`Guilds/${message.guild.id}/User/${message.author.id}/Emprego`).set(list.id) 
          	break;
          	case 2:
          	await db.ref(`Guilds/${message.guild.id}/User/${message.author.id}/Emprego`).set(list.id) 
          	break;
          	case 3:
          	await db.ref(`Guilds/${message.guild.id}/User/${message.author.id}/Emprego`).set(list.id) 
          	break;
       }
	}
}
}