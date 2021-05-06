require('dotenv').config();
const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true});

client.on("ready", async function (){
    console.log(client.user.username + " is ready!");
    client.user.setActivity("Over your account 🔒", { type: "WATCHING"});
});

const authMatch = ['your authentication code is:']
const verifyMatch = ['Verifying account for',]

client.on("message", async (message) => {
    if(message.channel.id!='827589112596791366'){
        return;
    }
    const {content} = message

    const member = message.mentions.users.first();
    const words =  message.content.split('>');
// EMBED CONSTS - IGNORE THESE
const deniedEmbed = new Discord.MessageEmbed()
.setColor("#ff0000")
.setTitle("You can not use this.")
.setTimestamp()  
const authenticationEmbed = new Discord.MessageEmbed()
.setColor("#ff0000")
.setTitle(`${words[1]}`)
.setTimestamp()  
const accountVeryficationEmbed = new Discord.MessageEmbed()
.setColor("#000001")
.setTitle(`${words[1]}`)
.setTimestamp()

if (content.includes(verifyMatch)) {
    if(message.author.bot) {
        member.send(accountVeryficationEmbed).then(msg => msg.delete({ timeout: 30000 }));
        return;
    }
    else {
        message.channel.send(deniedEmbed)
        return;
    }
};
if (content.includes(authMatch)) {
    if(message.author.bot) {
        member.send(authenticationEmbed).then(msg => msg.delete({ timeout: 60000 }));
        message.delete();
        return; 
    }
    else {
        message.channel.send(deniedEmbed)
        return;
    }
};
});
client.login(process.env.COSMIC_AUTH_BOT_TOKEN);