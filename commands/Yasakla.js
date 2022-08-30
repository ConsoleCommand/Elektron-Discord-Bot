const Discord = require("discord.js");
const moment = require("moment");
module.exports.run = async (client, message, args) => {

if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Bu Moderatör Komutu İçin \`Üyeleri Engelle\` Yetkisi Gerekli!");

  let logs = message.guild.channels.find("name", "yetkili-aktivite");
  if(!logs) return message.channel.send(`\`yetkili-aktivite\` Adında Bir Kanal Bulamıyorum.`);

  let user = message.mentions.users.first();
  if(!user) return message.reply(`Lütfen Bir \`Kullanıcı\` Etiketleyin.`);

  let reason = args.slice(1).join(" ");
  if(!reason) return message.reply(`Lütfen Bir \`Sebeb\` Yazın.`);
  let banreason = reason + 
  await message.guild.member(user).ban(banreason).then(message.channel.send(`<:Console_Basarili:480822342117883906> Kullanıcı Yasaklandı.`));

  let logsEmbed = new Discord.RichEmbed()
  .setTitle("Kullanıcı Yasaklandı.")
  .setColor("#ff0000")
  .setFooter(`${message.author.tag} Tarafından`)
  .setTimestamp()
  .setThumbnail(message.guild.iconURL) 
  .addField("Yasaklanan Kullanıcı:", `${user}, ID: ${user.id}`,true)
  .addField("Sebeb:", reason,true)
  .addField("Yetkili:", `${message.author}, ID: ${message.author.id}`, true)
  .addField("Zaman:", moment(message.createdAt).format("DD-MM-YYYY HH:mm:ss"), true)
  .addField("Kanal:", message.channel,true)

  await logs.send(logsEmbed);

};

module.exports.help = {
name: 'yasakla',
category: 'Mod'
};