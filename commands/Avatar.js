const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

let user = message.mentions.users.first() || message.author;
    const embed = new Discord.RichEmbed()
        .setColor("#36393E")
        .setTitle(`${user.tag}`)
        .setImage(user.displayAvatarURL)
        .setFooter(message.author.tag)
        .setTimestamp();
    await message.channel.send(embed)
  
};

module.exports.help = {
name: 'avatar',
category: 'Genel'
};