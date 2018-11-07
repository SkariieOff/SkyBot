const Discord = require('discord.js');
const prefix = require('../prefix.json')

module.exports.run = (bot, message, args) => {
    if (!message.content.startsWith('!')) return;
      let px = prefix.prefix
      const help = new Discord.RichEmbed()
          .setAuthor("Menu d'aide")
          .setDescription("Le but du menu d'aide est de vous aider (d'où le nom du menu)")
          .addField(`${px}help`,"Affiche ce menu d'aide.")
          .addField(`${px}clear <nombre>`,"Suprime un certains nombre de message.")
          .addField(`${px}say <texte>`,"Il répéte ce que vous dîtes.")
          .addField(`${px}kick <mention user> <texte>`,"Pour expulser un membre du serveur Discord.")
          .addField(`${px}ban <mention user> <texte>`,"Pour bannir un membre du serveur Discord.")
          .setColor("0wFF8000")
          .setFooter(`KokaBot | Requête de ${message.author.tag}`,"https://cdn.discordapp.com/icons/488094402947055647/049024a47a53c3a99d0dff94deb711d5.webp")
      //if(!args[0]) message.guild.channels.get('505733432027119626').send(help)
      if(!args[0]) message.author.send(help)
      message.delete()
      message.reply('la liste des commandes vous a bien été envoyé en message privé !').then(confirmmsg => {
      confirmmsg.react("✉")
      setTimeout(() => {
      confirmmsg.delete()
      }, 3000);});
}


module.exports.help = {
    name: "help"
}
