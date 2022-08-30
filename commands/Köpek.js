const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client, message, args) => {

    let { body } = await superagent
    .get('https://dog.ceo/api/breeds/image/random');

    let embed = new Discord.RichEmbed()
    .setColor("#36393E")
    .setImage(body.message)
    .setFooter(message.author.tag)
    .setTimestamp();
    message.channel.send({embed})


};

module.exports.help = {
name: 'köpek',
category: 'Genel'
};