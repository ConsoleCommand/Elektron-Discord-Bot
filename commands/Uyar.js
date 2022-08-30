module.exports.run = async (client, message, args) => {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Bu Moderatör Komutu İçin \`Mesajları Yönet\` Yetkisi Gerekli.');
   let warnedmember = message.guild.member(message.mentions.users.first());
    if (!warnedmember) return ("Lütfen Uyarmamı İstediğiniz Kullanıcıyı Etiketleyin");
     let reason = args.slice(1).join(' ');
    if(!reason) return message.channel.send(`Lütfen Sebebi Yazınız !`)
   
    

  try
{
       message.delete().catch(O_o=>{});
await warnedmember.send(`**${message.guild.name}** Adlı Sunucuda **${message.author.tag}** Tarafından \`${reason}\` Sebebiyle Uyarıldınız.`)
    message.channel.send(`<:Console_Basarili:480822342117883906>**${warnedmember.user.tag}** Adlı Kullanıcı Uyarıldı !`)
}
catch(e)
{
message.channel.send(`<:Console_Hata:424685749640757259> Kullanıcı Ya Artık Sunucuda Değil Yada Özel'i Genele Kapalı.`);
}


}

module.exports.help = {
name: 'uyar',
category: 'Mod'
};