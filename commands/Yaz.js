const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
	let konus = await args.join(" ");
	if(!konus) return message.channel.send("<:Console_Hata:424685749640757259> Lütfen Bir Yazı Yazınız.");
  message.delete()
    let embed = new Discord.RichEmbed()
    .setDescription(konus)
    .setColor("#36393E")
    .setFooter(message.author.tag)
    .setTimestamp()
    message.channel.send({embed})

};

module.exports.help = {
name: 'yaz',
category: 'Genel'
};