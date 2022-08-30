module.exports.run = async (client, message, args) => {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Bu Moderatör Komutu İçin \`Mesajları Yönet\` Yetkisi Gerekli.');
  let sayı = args[0]
  if (isNaN(sayı)) return message.channel.send(' <:Console_Hata:424685749640757259> Lütfen Geçerli Bir \`Sayı\` Giriniz.');

  if (sayı > 100) return message.channel.send(' <:Console_Hata:424685749640757259> Lütfen \`100\`\'ün Altında Bir Sayı Giriniz.');
try
{
    const tara = await message.channel.fetchMessages({limit: sayı});
    await message.channel.bulkDelete(tara)
    .then(messages => message.channel.send(`<:Console_Basarili:480822342117883906> Başarıyla  \`${args[0]}\` Adet Mesaj Silindi.`)
    .then(msg => msg.delete(5000)))
}

catch(e)
{
message.channel.send(`<:Console_Hata:424685749640757259> Bir Hata Meydana Geldi; \n\`${e}\``);
}

}

module.exports.help = {
name: 'sil',
category: 'Mod'
};