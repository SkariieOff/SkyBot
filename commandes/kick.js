const Discord = require('discord.js');
const prefix = require('../prefix.json')

module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith('!')) return;
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission!")
    let kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kickUser) message.channel.send("Je n'arrive pas à trouver cet utilisateur!")
    let kickReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission!")
    if(kickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Cette personne ne peux pas être expulsée du serveur!")

    let kickEmbed = new Discord.RichEmbed()
    .setAuthor("Kick")
    .setColor("#e56b00")
    .addField("Personne sanctionnée", `<@${kickUser.id}>`)
    .addField(`Kick par`,`<@${message.author.id}>`)
    .addField("Heure",message.createdAt)
    .addField("Raison",kickReason)

    let kickChannel = message.guild.channels.get('505732469312716814')
    if(!kickChannel) return message.channel.send("Je n'arrive pas à trouver le channel sanction.");
    message.delete();
    message.guild.member(kickUser).kick(kickReason)
    kickChannel.send(kickEmbed);

    return;
}

module.exports.kick = {
    name: "kick"
}
