class MrScottBot {
    constructor(botName) {
        this.botName = botName;
    }

    fireMessageEvent(message) {
        if (message.author.username === this.botName) {
            return;
        }
    
        if (message.content.startsWith("!")) {
            message.channel.startTyping(); //simulate bot typing
            message.channel.send(this.specialMessage(message));
            message.channel.stopTyping(); //stop simu typing
        } else {
            message.channel.startTyping(); //simulate bot typing
            console.log(message);
            message.channel.stopTyping(); //stop simu typing
        }
        
    }

    specialMessage(message) {
        let returnMessage;

        switch (message.content.toLowerCase()) {
            case "!ping":
                returnMessage = "Pong!";
                break;
            case "!help":
                returnMessage = "Available Commands:\n" +
                                "!help <Help list>\n" +
                                "ping <test>\n";
                break;
            case "!scottstots":
                returnMessage = "https://www.youtube.com/watch?v=XvTvpg1I1JM";
                break;
            case "!whereami":
                let channel = message.guild.channels.cache.find(channel => channel.name === "general");
                returnMessage = "You are in " + message.guild.name +  ", in the " + channel.toString() + " channel!";
                break;
            default:
                returnMessage = "That's what she said";
        }

        return returnMessage;
    }
}

module.exports = MrScottBot
