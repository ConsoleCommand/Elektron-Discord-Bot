const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client, message, args) => {

    
  let {body} = await superagent
    .get(`https://random-d.uk/api/v1/random?type=jpg`);
  
      let embed = new Discord.RichEmbed()
    .setColor("#36393E")
    .setImage(body.url)
    .setFooter(message.author.tag)
    .setTimestamp();
    message.channel.send({embed})
  
};

module.exports.help = {
name: 'ördek',
category: 'Genel'
};