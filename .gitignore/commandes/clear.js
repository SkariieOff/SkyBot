const Discord = require('discord.js');
const prefix = require('../prefix.json')

module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith('!')) return;
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Tu n'as pas la permission!");
    if(!args[0]) return message.reply("Combien?")
    message.delete();
    message.channel.bulkDelete(args[0]).then(() => {
    const clearlog = new Discord.RichEmbed()
        .setAuthor(`Clear Logs`)
        .addField(`Chanel`,`${message.channel}`)
        .addField(`Messages Supprimés`,`${args[0]}`)
        .setColor("0wFF8000")
        .setTimestamp(new Date())
        .setFooter(`KokaBot | Exécuté par  ${message.author.tag}`,"https://cdn.discordapp.com/icons/488094402947055647/049024a47a53c3a99d0dff94deb711d5.webp")
    message.guild.channels.get('509737142398877697').send(clearlog)   
    }); 
}

module.exports.clear = {
    name: "clear"
}
