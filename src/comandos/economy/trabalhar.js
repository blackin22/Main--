const moment = require("moment")

module.exports = {
	name: "trabalhar",
	aliases: ["work"],
	run: async (client, message, args, db, prefix) => {
         let work = await db.ref(`Guilds/${message.guild.id}/User/${message.author.id}/TempWork`).once("value") 
         let emprego = await db.ref(`Guilds/${message.guild.id}/User/${message.author.id}/Emprego`).once("value") 
         emprego = emprego.val()
         let coins = await db.ref(`Guilds/${message.guild.id}/User/${message.author.id}/Money/Bank`).once("value")
         work = work.val()
         coins = coins.val();

         if(!emprego) return message.channel.send(`**Você ainda não tem um emprego, escolha um com: ${prefix}job [id-empregos]**\nPara ver os empregos disponiveis atuais: ${prefix}jobs`)
         
		     let cooldown = 84600000;
         let time = cooldown - (Date.now() - work);


         let esperar = moment(time).format("HH:mm:ss")

          if (work !== null && cooldown - (Date.now() - work) > 0) {
           return message.channel.send(`> **Descance por: \`${esperar}\` para trabalhar novamente.**`);
            } else {
            if(emprego == 1) {
            await db.ref(`Guilds/${message.guild.id}/User/${message.author.id}/TempWork`).set(Date.now())
            message.channel.send(`> **Você acaba de trabalhar. você ganhou: R$1400**`) 
            await db.ref(`Guilds/${message.guild.id}/User/${message.author.id}/Money/Bank`).set(coins += 1400)
            } else if(emprego == 2) {
              await db.ref(`Guilds/${message.guild.id}/User/${message.author.id}/TempWork`).set(Date.now())
              await db.ref(`Guilds/${message.guild.id}/User/${message.author.id}/Money/Bank`).set(coins += 1250)
              message.channel.send(`> **Você acaba de trabalhar. você ganhou: R$1250**`) 
            } else if(emprego == 3) {
              await db.ref(`Guilds/${message.guild.id}/User/${message.author.id}/Money/Bank`).set(coins += 4500)
              await db.ref(`Guilds/${message.guild.id}/User/${message.author.id}/TempWork`).set(Date.now())
              message.channel.send(`> **Você acaba de trabalhar. você ganhou: R$4500**`) 
            }
        }
	}
}