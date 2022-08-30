const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (client, message, args) => {


var rol = args.join(" ");
  let role = message.guild.roles.find("name", `${rol}`)
  if(!role) return message.channel.send(`<:Console_Hata:424685749640757259> HATA! Rol Bulunamadı. Lütfen Bilgisini Almak İstediğiniz Rolün Adını Düzgün Giriniz. \n \`Örnek;\` **-Rol Admin**`);
if(await role.hexColor == "#000000")
{
  var renk = "Yok";
}
else
{
var renk = role.hexColor;
}

  var roleinfoEmbed = new Discord.RichEmbed()
  .setAuthor(`${role.name} Adlı Rolün Bilgileri`)
  .setColor(`${renk}`)
  .addField('ID', role.id, true)
  .addField('Sahip Kullanıcı Sayısı', role.members.size, true)
  .addField('Renk Kodu', `${renk}`, true)
  .addField('Oluşturulduğu Zaman', moment(role.createdAt).format("DD-MM-YYYY HH:mm:ss"), true)
  .setFooter(message.author.tag)
  .setTimestamp()
	.setThumbnail(message.guild.iconURL)
  message.channel.send(roleinfoEmbed)
}

module.exports.help = {
name: 'rol',
category: 'Genel'
};