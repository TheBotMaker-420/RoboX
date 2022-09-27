const Discord = require("discord.js");
const dotenv = require("dotenv");
dotenv.config();
const client = new Discord.Client({
    intents:1537
});
const Token = process.env.TOKEN;

client.once('ready', () => {
    console.log("Ready At Your Service!!");
});

client.login(Token);
