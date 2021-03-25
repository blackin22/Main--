require("dotenv").config()
const { Client, Collection } = require("discord.js")
const client = new Client({ disableEveryone: false })
const fs = require("fs")
require('./quote.js')
const dbConnection = require("./src/database/connection.js")
dbConnection.start()

client.commands = new Collection()
client.aliases = new Collection()
client.categories = fs.readdirSync("./src/comandos");

['command', 'event'].forEach(x => require(`./base/${x}`)(client));

client.login(process.env.Token)