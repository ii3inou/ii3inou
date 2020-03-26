const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("692653259080597556")
setInterval(function() {
channel.send(`fnbfghdfbgdfgbkdjfgbjkdf`);
}, 30)
})

client.login(process.env.BOT_TOKEN);