const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if(message.channel.id == "498421252138991648") 
    {      
let  rol = message.guild.roles.find('name', 'Üye')
	  	await message.member.addRole(rol)
  const id = "498433312944291841";
  const channel = await client.channels.get(id);

  channel.send(`${message.author}, Sunucumuza Hoş Geldin !`);
}

};

module.exports.help = {
name: 'onay',
category: 'aaaa'
};