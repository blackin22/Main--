const firebase = require("firebase")
let db = firebase.database()
const Mention = (id) => new RegExp(`^<@!?${id}>( |)$`);
module.exports = async (client, message) => {
	if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    let prefix = await db.ref(`Guilds/${message.guild.id}/Prefixo`).once("value")
    prefix = prefix.val()
    if(prefix === null) prefix = "m/"

    if(message.content.match(Mention(client.user.id))) {
    	return message.channel.send(`> **Olá ${message.author}, o meu prefixo neste servidor é \`${prefix}\` para ver meus comandos: \`${prefix}help\`**`)
    }

    if(!message.content.startsWith(prefix)) return;
	let args = message.content.slice(prefix.length).trim().split(/ +/g);
	let cmd = args.shift().toLowerCase()
    let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))

    command.run(client, message, args, db, prefix); }