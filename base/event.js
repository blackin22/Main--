const fs = require('fs')

module.exports = (client) => {
const construct = local => {
const eventos = fs.readdirSync(`./src/eventos/${local}/`).filter(x => x.endsWith('.js'));
   for (let file of eventos) {
       const l = require(`../src/eventos/${local}/${file}`);
       let nome = file.split('.')[0];
       client.on(nome, l.bind(null, client))
        }
    }
    ["client", "guild"].forEach(x => construct(x))
}