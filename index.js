let key = require("./_keys.js");
const discord = require("discord.js");
const bot = new discord.Client();
const axios = require('axios');
const MrScottBot = require("./mr_scott_bot.js");
let theScottBot;

console.log("starting mr scott...");
bot.login(key.discord_token);

bot.on("ready", () => {
    theScottBot = new MrScottBot(bot.user.username);
});

bot.on("message", (message) => {   
    _message = message;
    theScottBot.fireMessageEvent(message);
});
