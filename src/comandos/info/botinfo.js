const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "botinfo",
    aliases: ["maininfo"],
    run: async (client, message, args, db, prefix) => {
        let embed = new MessageEmbed()
        .addField(`> Fui criado por: ${this.client.users.cache.get("")}\n> **Prefixo neste servidor: ${prefix}**\n> **Data de criação ${moment(client.user.createdAt).format("L")}`)
    }
}