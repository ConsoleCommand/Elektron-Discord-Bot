const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
	const embed = new Discord.RichEmbed()
		.setAuthor(message.guild.name)
		.setColor("#36393E")
		.setThumbnail(message.guild.iconURL)
		.addField('Üyeler', `**${message.guild.memberCount}**`, true)
    //.addBlankField(true)
		.addField('Kullanıcı', `🙂 **${message.guild.members.filter(member => !member.user.bot).size}**`, true)
		.addField('Bot', `<:Console_Bot:424685600780582923> **${message.guild.members.filter(member => member.user.bot).size}**`, true)
		.addField('Sunucu Durum', `<:Console_Cevrimici:424685600981909505> **${message.guild.members.filter(o => o.presence.status === 'online').size}**\n<:Console_Bosta:424685600642170902> **${message.guild.members.filter(i => i.presence.status === 'idle').size}**\n<:Console_Mesgul:424685600768000001> **${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}**\n<:Console_Cevrimdisi:424685602156314644>||<:Console_Gorunmez:424685600734445572> **${message.guild.members.filter(off => off.presence.status === 'offline').size}**\n<:Console_Yayinda:424685600747159573> **${message.guild.members.filter(s => s.presence.status === 'streaming').size}**`)
		.setFooter(`Sahibi: ${message.guild.owner.user.tag}`)
    .setTimestamp()
	message.channel.send(embed);
};

module.exports.help = {
name: 'üyeler',
category: 'Genel'
};