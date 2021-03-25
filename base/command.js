const fs = require("fs");
const Discord = require("discord.js")

module.exports = (client) => {
        fs.readdirSync('./src/comandos/').forEach(local => {
        const comandos = fs.readdirSync(`./src/comandos/${local}`).filter(arquivo => arquivo.endsWith('.js'))

        for (let file of comandos) {
        let puxar = require(`../src/comandos/${local}/${file}`)

        if(puxar.name) {
        client.commands.set(puxar.name, puxar)
                }
                if(puxar.aliases && Array.isArray(puxar.aliases))
                puxar.aliases.forEach(x => client.aliases.set(x, puxar.name))
            }
        })
    }
    