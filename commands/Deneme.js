const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (client, message, args) => {

let ReklamEmbed = new Discord.RichEmbed()
    .setColor("#00ff9a")
    .addField('Reklam !',`${message.author} ||  Reklam Yapmayı Bırakmazsan Ban Yiyeceksin.`)
    .setFooter(client.user.tag)
    .setTimestamp();
    message.channel.send(ReklamEmbed)


      }


module.exports.help = {
name: 'deneme',
category: 'Sahip'
};