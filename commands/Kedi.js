const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client, message, args) => {

  let { body } = await superagent
  .get(`http://aws.random.cat/meow`);

  let catembed = new Discord.RichEmbed()
  .setColor("#36393E")
  .setImage(body.file)
  .setFooter(message.author.tag)
  .setTimestamp();
  message.channel.send(catembed);



};

module.exports.help = {
name: 'kedi',
category: 'Genel'
};