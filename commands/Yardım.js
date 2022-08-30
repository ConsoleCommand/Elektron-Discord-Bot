const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let anancı = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} / Komut Listesi`,client.user.displayAvatarURL)
        .addField(" 💎 Genel", `${client.commands.filter(cmd => cmd.help.category === 'Genel').map(cmd => `\`${cmd.help.name}\``).join(" ,  ")}`)
        .addField(" 🛠 Moderatör", `${client.commands.filter(cmd => cmd.help.category === 'Mod').map(cmd => `\`${cmd.help.name}\``).join(" ,  ")}`)
        .setColor("#36393E")
        .setFooter(message.author.tag)
        .setTimestamp()
    message.channel.send(anancı)

};

module.exports.help = {
name: 'yardım',
category: '31'
};