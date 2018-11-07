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
        .setFooter(`KokaBot | Exécuté par  ${message.author.tag}`,"http://kokazia.tk/app/webroot/img/uploads/icon-server/Logo.png")
    message.guild.channels.get('505732469312716814').send(clearlog)   
    }); 
}

module.exports.clear = {
    name: "clear"
}
