module.exports = {
    name: "lang",
    aliases: ["language"],
    run: async (client, message, args, db, prefix) => {
                
        if(!args[0]) {
            let embed = new MessageEmbed()
            .setTitle(`> testeeeeeeeeeeeee`)
            .addField(':flag_br: - Brazil:', `\`(Tranlaste By Daddy)\``)
            .addField(':flag_us: - English:', `\`(Tranlaste by Daddy.)\``)
            return message.channel.send(embed).then(async(msg) => {
                msg.react("🇧🇷")
                msg.react("🇺🇸")

                const filter = (reaction, user) => {
                  return reaction.emoji.name === '🇧🇷' && user.id === message.author.id;
              };
              const filter2 = (reaction, user) => {
                  return reaction.emoji.name === '🇺🇸' && user.id === message.author.id;
              };
              
              const collector = msg.createReactionCollector(filter, { time: 60000 });
              const collector2 = msg.createReactionCollector(filter2, { time: 60000 });

              collector.on("collect", async r => {
                  collector.stop()
                  collector2.stop()
                  r.users.remove(message.author.id)
                  await db.ref(`Guilds/${message.guild.id}/Lang`).set("pt-BR")
                  return message.quote(`**Sucesso! Agora estou a falar em __Portugues Brasil.__**`)
              })

              collector2.on("collect", async r => {
                  collector.stop()
                  collector2.stop()
                  r.users.remove(message.author.id)
                  await db.ref(`Guilds/${message.guild.id}/Lang`).set("en-US")
                  return message.quote(`**Success! Now I'm talking about __English [United States].__**`)
              })
            })
          }
    }
}