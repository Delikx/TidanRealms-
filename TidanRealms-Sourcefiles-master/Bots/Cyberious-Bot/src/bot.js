const Discord = require("discord.js");
require('dotenv').config();
const client = new Discord.Client({disableEveryone: true});
client.on("ready", async function (){
    console.log(client.user.username + " is ready!");
    client.user.setActivity("Over Cosmic", { type: "WATCHING"});
});

const offenses =  ['nig','nigg', 'nigga', 'nibb', 'nigger' ]

client.on("message", async (message) => {
    const prefix = "^"
    if (
        !message.content.startsWith(prefix) ||
        message.author.bot ||
        message.channel.type === "dm"
    )
        return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

const deniedEmbed = new Discord.MessageEmbed()
.setColor("#ff0000")
.setTitle("You can not use this.")
.setTimestamp()
const shutdownEmbed = new Discord.MessageEmbed()
.setColor("#000001")
.setTitle("Shutdown")
.setDescription("Bot Shutting Down...")
.setTimestamp()
const offensesDirectEmbed = new Discord.MessageEmbed()
.setColor("#ff0000")
.setTitle("You have been warned for using an offensive word.")
.setDescription(`You said: ${message.content}`)
.setTimestamp()   
const offensesReply = new Discord.MessageEmbed()
.setColor("#ff0000")
.setTitle("Do not use offensive language.")
.setTimestamp()   
const suggestionAddedEmbed = new Discord.MessageEmbed()
.setColor("#00ff00")
.setTitle("Your suggestion has been added!")
.setTimestamp()    
const reportSentEmbed = new Discord.MessageEmbed()
.setColor("#00ff00")
.setTitle("Your report has been sent!")
.setTimestamp()
const bugSentEmbed = new Discord.MessageEmbed()
.setColor("#00ff00")
.setTitle("Your bug has been sent!")
.setTimestamp()   
const cantUseCommandHereEmbed = new Discord.MessageEmbed()
.setColor("#ff0000")
.setTitle("You can not use this command here!")
.setTimestamp()
const provideSuggestionEmbed = new Discord.MessageEmbed()
.setColor("#ff0000")
.setTitle("Please provide a suggestion!")
.setTimestamp()  
const provideReportEmbed = new Discord.MessageEmbed()
.setColor("#ff0000")
.setTitle("Please provide a report!")
.setTimestamp()  
const provideBugEmbed = new Discord.MessageEmbed()
.setColor("#ff0000")
.setTitle("Please provide an argument!")
.setTimestamp()  

if (command === "shutdown") {
    if (message.author.id === "333947242090201111") {
        await message.channel.send(shutdownEmbed)     
        console.log(`The bot has been shut down by ${message.author}`)
        process.exit()
        return;
    }
    else message.channel.send(deniedEmbed)
    return;
}

if (offenses.includes(message.content.toLowerCase())) {
    message.author.send(offensesDirectEmbed);
    message.delete();
    message.channel.send(offensesReply).then(msg => msg.delete({ timeout: 10000 }));;
    return;
}

if (command === "suggest") {
    if(message.channel.name === "suggestions"){
        const args = message.content.substring('suggest'.length + 1)
    const suggestionChannelSendEmbed = new Discord.MessageEmbed()
    .setColor("#00ffe1")
    .setTitle(`${message.author.tag} suggested \n${args}`)
    .setTimestamp()

    if(args === "") {
        message.channel.send(provideSuggestionEmbed).then(msg => msg.delete({ timeout: 3000 })); 
        return;
    }
    else {
        message.channel.send(suggestionAddedEmbed).then(msg => msg.delete({ timeout: 3000 })); 
        message.guild.channels.cache.find(ch => ch.name === "suggestions").send(suggestionChannelSendEmbed).then(sentMessage => {
        sentMessage.react('👍')
        sentMessage.react('👎')
        })
            message.delete();
        return;
    }
}
else {
    message.channel.send(cantUseCommandHereEmbed).then(msg => msg.delete({ timeout: 5000 }));
};
}

if (comand === "bug") {
    if(message.channel.name === "report-a-bug"){
        const args = message.content.substring('bug'.length + 1)
    const bugChannelSendEmbed = new Discord.MessageEmbed()
    .setColor("#00ffe1")
    .setTitle(`${message.author.tag}'s bug report: ${args}`)
    .setTimestamp()

    if(args === "") {
        message.channel.send(provideBugEmbed).then(msg => msg.delete({ timeout: 3000 }));
        return;
    }
    else {
        message.channel.send(bugSentEmbed).then(msg => msg.delete({ timeout: 3000 })); 
        message.guild.channels.cache.find(ch => ch.name === "reported-bugs").send(bugChannelSendEmbed);
        message.delete()
        return;
    }
}
else {
    message.channel.send(cantUseCommandHereEmbed)
};
}

if (command === "report") {
    if(message.channel.name === "report-a-player"){
        const args = message.content.substring('report'.length + 1)
    const reportPlayerEmbed = new Discord.MessageEmbed()
    .setColor("#00ffe1")
    .setTitle(`${message.author.tag}'s report: \n${args}`)
    .setTimestamp()

    if(args === "") {
        message.channel.send(provideReportEmbed).then(msg => msg.delete({ timeout: 3000 })); 
        return;
    }
    else {
        message.channel.send(reportSentEmbed).then(msg => msg.delete({ timeout: 3000 }));
        message.guild.channels.cache.find(ch => ch.name === "reported-players").send(reportPlayerEmbed);
        message.delete()
        return;
    }
}
else {
    message.channel.send(cantUseCommandHereEmbed)
};
}

});
  

client.login(process.env.CYBERIOUS_TOKEN)