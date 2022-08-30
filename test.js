const Discord = require("discord.js");

module.exports.run = async (client, message, params) => {
        var Durum = message.author.presence.status;
        var Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
        var durm = (Durum == "online" ? ("Çevrimiçi") : (Durum == "offline" ? ("Çevrimdışı") : (Durum == "idle" ? ("Boşta") : (Durum == "dnd" ? ("Rahatsız Etmeyin") : ("Bilinmiyor/bulunamadı.")))))
        const kullanicibilgimk = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor("#36393E")
        .setTimestamp()
        .addField('Ad:', message.author.username + '#' + message.author.discriminator)
        .addField('ID:', message.author.id)
        .addField('Kayıt tarihi:', message.author.createdAt)
        .addField('Durum:', durm)
        .addField('Şu an oynadığı oyun:', message.author.presence.game ? message.author.presence.game.name : 'Şu an oyun oynamıyor')
        .addField('BOT mu?', message.author.bot ? '\n Evet' : 'Hayır')
        .setThumbnail(`https://cdn.glitch.com/b35329ed-9d90-4a8f-82d7-f02d87eb3ba8%2Fsunucu.png?v=1565289391711`)
        .setFooter(message.author.tag)
        return message.channel.sendEmbed(kullanicibilgimk)
};
  


module.exports.help = {
name: 'test',
category: 'test'
};