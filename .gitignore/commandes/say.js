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
        .setFooter(`SkyBot | Exécuté par  ${message.author.tag}`)
    message.guild.channels.get('509737142398877697').send(saylog)

}

module.exports.say = {
    name: "say"
}
