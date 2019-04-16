const Discord = require('discord.js')
const Bot = new Discord.Client()
const prefixe = require('./prefix.json')
const prefix = prefixe.prefix
const fs = require("fs");
Bot.commandes = new Discord.Collection();

Bot.on("ready", () => {
  Bot.user.setActivity("!help")
})

/* */

console.log("Loading...");

fs.readdir("./commandes/", (err, files) => {

    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.length <= 0){
      console.log(`TEXTE  ERREUR`);
      return;
    }
  
     jsfile.forEach((f, i) =>{
      let helpjs = require(`./commandes/help.js`);
      let clearjs = require(`./commandes/clear.js`);
      let sayjs = require(`./commandes/say.js`);
      let wysixjs = require(`./commandes/wysix.js`);
      let kickjs = require(`./commandes/kick.js`);
      let banjs = require(`./commandes/ban.js`);
      console.log(`File ${f} is fully loaded!`);
      Bot.commandes.set(helpjs.help.name, helpjs);
      Bot.commandes.set(clearjs.clear.name, clearjs);
      Bot.commandes.set(sayjs.say.name, sayjs);
      Bot.commandes.set(kickjs.kick.name, kickjs);
      Bot.commandes.set(banjs.ban.name, banjs);
    });
  });

  Bot.on("message", message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
  
    let commandfile = Bot.commandes.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(Bot, message, args);
  });

  /* */

/* Message de Bienvenue */
Bot.on('guildMemberAdd', member => {
    member.createDM().then(function (channel) {
       return channel.send("Bonjour/Bonsoir " + member.displayName + ",\n\nJe t'apporte ce magnifique message pour te souhaiter la bienvenue sur le Discord officiel de Kokazia :wink:.\nPasse de très bon moment tout en respectant les règles du serveur Discord.\nA tout de suite :smiley: ! Et passe de bon moment sur le serveur Discord.\n**Les informations à connaitres :**\n**:robot: __Site Internet :__ https://kokazia.tk/ **\n**:space_invader: __IP :__ play.kokazia.tk **\n\nCordialement, L'équipe de Kokazia.")
    }).catch(console.error)
})

Bot.on('guildMemberRemove', member => {
  const byeEmbed = new Discord.RichEmbed()
    .setAuthor("Leave")
    .setDescription(`:negative_squared_cross_mark: ${member.displayName} viens de quitter le serveur Discord`)
    .setColor("#e74c3c")
    .setFooter(`Ce message est automatique.`,"https://cdn.discordapp.com/icons/488094402947055647/049024a47a53c3a99d0dff94deb711d5.webp")
  member.guild.channels.get('499238319692054538').send(byeEmbed)
})

Bot.login(process.env.TOKEN)
