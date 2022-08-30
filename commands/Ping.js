module.exports.run = async (client, message, args) => {

  const msg = await message.channel.send("Ölçülüyor...");
  msg.edit('<:Console_Basarili:480822342117883906> Başarılı. `' + `${msg.createdTimestamp - message.createdTimestamp}` + 'ms`' + ' API `' + `${client.ping}` + 'ms`');
  
};

module.exports.help = {
name: 'ping',
category: 'Genel'
};