const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith('!')) return;
    if(message.author.bot) return;
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Tu n'as pas la permission!");
    let botmessage = args.join(" ");
    message.delete();
    message.channel.send(botmessage);
    const saylog = new Discord.RichEmbed()
        .setAuthor(`Say Logs`)
        .addField(`Chanel`,`${message.channel}`)
        .addField(`Texte`,`"${botmessage}"`)
        .setColor("0wFF8000")
        .setTimestamp()
        .setFooter(`KokaBot | Exécuté par  ${message.author.tag}`,"http://kokazia.tk/app/webroot/img/uploads/icon-server/Logo.png")
    message.guild.channels.get('505732469312716814').send(saylog)

}

module.exports.say = {
    name: "say"
}
