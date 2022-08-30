const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client, message, args) => {

  let {body} = await superagent
    .get(`https://nekos.life/api/neko`);
  
    let NekoEmbed = new Discord.RichEmbed()
    .setColor("#36393E")
    .setImage(body.neko)
    .setFooter(message.author.tag)
    .setTimestamp();
    message.channel.send(NekoEmbed);
  
};

module.exports.help = {
name: 'neko',
category: 'Genel'
};