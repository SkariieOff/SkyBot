const Discord = require('discord.js');
const prefix = require('../prefix.json')

module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith('!')) return;
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la permission!")
    let banUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!banUser) message.channel.send("Je n'arrive pas à trouver cet utilisateur!")
    let banReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission!")
    if(banUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Cette personne ne peux pas être expulsée du serveur!")

    let banEmbed = new Discord.RichEmbed()
        .setAuthor("Ban")
        .setColor("#bc0000")
        .addField("Personne sanctionnée", `<@${banUser.id}>`)
        .addField(`Banni par`,`<@${message.author.id}>`)
        .addField("Heure",message.createdAt)
        .addField("Raison",banReason)

    let banChannel = message.guild.channels.get('505732469312716814')
    if(!banChannel) return message.channel.send("Je n'arrive pas à trouver le channel sanction.");
    message.delete();
    message.guild.member(banUser).ban(banReason)
    banChannel.send(banEmbed);

    return;
}

module.exports.ban = {
    name: "ban"
}
