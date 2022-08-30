const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
	let konus = await args.join(" ");
	if(!konus) return message.channel.send("<:Console_Hata:424685749640757259> Lütfen Bir Soru Sorunuz.");

  var cevap = [
    "Evet",
    "Hayır",
    "Belki",
    "Meh",
    "Bundan Şüpheliyim.",
    "Kararsızım.",
    "Cevap Vermesem Daha İyi.",
    "Araştırırsan Bulursun Cevabını."
  ];

let sonuc = cevap[Math.floor(Math.random() * cevap.length)]

    let embed = new Discord.RichEmbed()
    .setTitle(`${sonuc}`)
    .setColor("#36393E")
    message.channel.send({embed})

};

module.exports.help = {
name: 'sor',
category: 'Genel'
};