const Discord = require("discord.js");
const moment = require("moment");
module.exports.run = async (client, message, args) => {
let a = moment(message.channel.guild.createdAt)
let b = moment(Date.now());
let days = b.diff(a, 'days');

  let verifLevels = ["Yok", "Düşük", "Orta", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
    let region = {
        "brazil": ":flag_br: Brezilya",
        "eu-central": ":flag_eu: Merkez Avrupa",
        "singapore": ":flag_sg: Singapur",
        "us-central": ":flag_us: Merkez ABD",
        "sydney": ":flag_au: Sidney",
        "us-east": ":flag_us: Doğu ABD",
        "us-south": ":flag_us: Güney ABD",
        "us-west": ":flag_us: Batı ABD",
        "eu-west": ":flag_eu: Batı Avrupa",
        "vip-us-east": ":flag_us: VIP Doğu ABD",
        "london": ":flag_gb: Londra",
        "amsterdam": ":flag_nl: Amsterdam",
        "hongkong": ":flag_hk: Hong Kong",
        "russia": ":flag_ru: Rusya",
        "southafrica": ":flag_za:  Güney Afrika"
    };
    const embed = new Discord.RichEmbed()
        .setColor("#36393E")
        .setAuthor(message.guild.name, message.guild.iconURL)
        .addField("Sunucu İsmi", message.guild.name, true)
        .addField("ID", message.guild.id, true)
        .addField("Sahibi", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
        .addField("Bölgesi", region[message.guild.region], true)
        //.addField("Toplam | Kullanıcı | Botlar", `${message.guild.members.size} | ${message.guild.members.filter(member => !member.user.bot).size} | ${message.guild.members.filter(member => member.user.bot).size}`, true)
        .addField("Üye Sayısı", `${message.guild.members.size}`, true)
        .addField("Güvenlik Seviyesi", verifLevels[message.guild.verificationLevel], true)
        .addField("Kanal", message.guild.channels.size, true)
        .addField("Roller", message.guild.roles.size, true)
        .addField("Kuruluş Tarihi", `${a.format("DD-MM-YYYY HH:mm:ss")}\n(${days} Gün Önce)`, true)
        .setThumbnail(`https://cdn.glitch.com/b35329ed-9d90-4a8f-82d7-f02d87eb3ba8%2Fsunucu.png?v=1565289391711`)
        .setFooter(message.author.tag)
        .setTimestamp();
    message.channel.send({embed});
}
module.exports.help = {
name: 'Sunucu',
category: 'Genel'
};

