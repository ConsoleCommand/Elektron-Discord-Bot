const ayarlar = require ("./ayarlar.json");
const Discord = require("discord.js");
const express = require('express');
const app = express();
const fs = require("fs")
const http = require('http');
const moment = require("moment");
const ownerID = ayarlar.owner;
const prefix = ayarlar.prefix;
const client = new Discord.Client({disableEveryone: true});
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();


fs.readdir("./commands/", (err, files) => {
  if(err) console.error(err);

  let jsfiles = files.filter(f => f.split(".").pop() === "js");
  if(jsfiles.lengths <= 0) {
    console.log("Hiç Komut Yok!")
    return;
  }
    console.log('[------------] Elektron [-------------]');
  console.log(`${jsfiles.length} Adet Komut Yükleniyor!`)

  jsfiles.forEach((f,i) => {
      let props = require(`./commands/${f}`);
      console.log(`${i + 1}: ${f} Komutu Yüklendi.`)
      client.commands.set(props.help.name, props)
  });
    console.log('[------------] Elektron [-------------]');
});

client.on("ready", () => {
  var Yazı = [
      "☁ ConsoleBey#0290",
      "Make The Sky Great Again!",
      "Krdşm Uslu Dur Ltfn.",
      "Benim Niye Sevgilim Yok...",
      "¯\\_(ツ)_/¯",
      "Sıkıldım Be."
  ];
  
  setInterval(() => {
    var rastgeleOyun = Math.floor(Math.random() * Yazı.length);
	client.user.setActivity(`${Yazı[rastgeleOyun]}`, {type: "WATCHING"});
  }, 30000); 

    console.log(`Bot Devrede! ${client.user.username}`);

  
client.setMaxListeners(50)
});

client.on('guildMemberRemove', member => {
  let kanal = member.guild.channels.find("name", "giriş-çıkış");


        let cikis = new Discord.RichEmbed()
        .setAuthor(`${member.user.tag}   [${member.user.id}]`,member.user.displayAvatarURL)
        .setColor("#EF4747")
        .setFooter(member.guild.memberCount)
        .setTimestamp()
    kanal.send(cikis)

  let kanal1 = member.guild.channels.find("name", "giriş-çıkış-ayrıntılı-kayıt");


    let selam1 = new Discord.RichEmbed()
    .setAuthor(`${member.user.tag}`,member.user.displayAvatarURL)
    .setDescription(`<@${member.user.id}>`)
    .addField("Hesap Yaratılış Tarihi", `**${moment(member.user.createdAt).format("DD-MM-YYYY HH:mm:ss")}**`)
    .addField("Çıkış Tarihi",  `**${moment(Date.now()).format("DD-MM-YYYY HH:mm:ss")}**`)
    .setColor("#EF4747")
    .setFooter(`ID: ${member.user.id}`)
    kanal1.send(selam1)
});

client.on('channelDelete', channel => {
  let kanal = channel.guild.channels.find("name", "diğer");


    let selam = new Discord.RichEmbed()
    .setAuthor(`Kanal Silindi` , "https://cdn.discordapp.com/emojis/417574812622258186.png?v=1")
    .setDescription(`**Kanal Adı : ${channel.name}**`)
    .setColor("#EF4747")
    .setTimestamp()
    .setFooter(`ID: ${channel.id}`)
    kanal.send(selam)
});
client.on("messageDelete", function(message) {
if(message.author.bot == true) return;
  let kanal1 = message.guild.channels.find("name", "mesaj-kayıt");


    let selam1 = new Discord.RichEmbed()
    .setAuthor(`Mesaj Silindi`,"https://cdn.discordapp.com/emojis/417574812399960065.png?v=1")
    .setDescription(`<@${message.author.id}> Ait Mesaj Silindi \n\`${message.author.tag}\``)
    .addField("Mesaj", `${message.content}`)
    .setColor("#EF4747")
    .setTimestamp()
    .setFooter(`ID: ${message.id}`)
    kanal1.send(selam1)
});

client.on('guildMemberAdd', member => {
  let kanal = member.guild.channels.find("name", "giriş-çıkış");


        let giris = new Discord.RichEmbed()
        .setAuthor(`${member.user.tag}   [${member.user.id}]`,member.user.displayAvatarURL)
        .setColor("#42B580")
        .setFooter(member.guild.memberCount)
        .setTimestamp()
    kanal.send(giris)

  let kanal1 = member.guild.channels.find("name", "giriş-çıkış-ayrıntılı-kayıt");


    let selam1 = new Discord.RichEmbed()
    .setAuthor(`${member.user.tag}`,member.user.displayAvatarURL)
    .setDescription(`<@${member.user.id}>`)
    .addField("Hesap Yaratılış Tarihi",  `**${moment(member.user.createdAt).format("DD-MM-YYYY HH:mm:ss")}**`)
    .addField("Giriş Tarihi",  `**${moment(Date.now()).format("DD-MM-YYYY HH:mm:ss")}**`)
    .setColor("#42B580")
    .setFooter(`ID: ${member.user.id}`)
    kanal1.send(selam1)


});

client.on('channelCreate', channel => {
  let kanal = channel.guild.channels.find("name", "diğer");


    let selam = new Discord.RichEmbed()
    .setAuthor(`Kanal Yaratıldı` , "https://cdn.discordapp.com/emojis/417574812425125888.png?v=1")
    .setDescription(`**Kanal Adı : ${channel.name}**`)
    .setColor("#42B580")
    .setFooter(`ID: ${channel.id}`)
    .setTimestamp()
    kanal.send(selam)
});

client.on('channelUpdate', channel => {
  let kanal = channel.guild.channels.find("name", "diğer");


    let selam = new Discord.RichEmbed()
    .setAuthor(`Kanal Düzenlendi` , "https://cdn.discordapp.com/emojis/417574812240576514.png?v=1")
    .setDescription(`**Kanal Adı : ${channel.name}**`)
    .setColor("#FAA61A")
    .setTimestamp()
    .setFooter(`ID: ${channel.id}`)
    kanal.send(selam)
});


client.on("messageUpdate", function(oldMessage, newMessage) {
if(oldMessage.content == newMessage.content) return;
if(oldMessage.author.bot == true) return;
  let kanal1 = oldMessage.guild.channels.find("name", "mesaj-kayıt");


    let selam1 = new Discord.RichEmbed()
    .setAuthor(`Mesaj Düzenlendi`,"https://cdn.discordapp.com/emojis/446853280308396032.png?v=1")
    .setDescription(`<@${oldMessage.author.id}> Mesajını Düzenledi \n\`${oldMessage.author.tag}\``)
    .addField("Önce", `${oldMessage.content}`)
    .addField("Sonra", `${newMessage.content}`)
    .setColor("#FAA61A")
    .setTimestamp()
    .setFooter(`ID: ${oldMessage.id}`)
    kanal1.send(selam1)
});


client.on("message",  message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    if(!command.startsWith(prefix)) return;
    let cmd = client.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(client, message, args);
  });

client.on("message", async message => {
if(message.author.bot) return;
if(message.channel.type === "dm") return;
if(message.member.hasPermission("MANAGE_MESSAGES")) return;
if(message.member.hasPermission("MANAGE_GUILD")) return;
  if (message.content.toLowerCase().match(/(discord\.gg\/)|(discordapp\.com\/invite\/)/g)) {
    message.delete()
    let ReklamEmbed = new Discord.RichEmbed()
    .setColor("#36393E")
    .addField('Reklam !',`${message.author} ||  Reklam Yapmayı Bırakmazsan Ban Yiyeceksin.`)
    .setFooter(client.user.tag)
    .setTimestamp();
    message.channel.send(ReklamEmbed).then(msg => msg.delete(5000))
    
  let reeklam = message.guild.channels.find("name", "reklam-kayıt");

    let ReklamkayıtEmbed = new Discord.RichEmbed()
    .setColor("#ff5000")
    .setTitle("Bir Reklamcımız Var !")
    .addField("Reklamcı", `${message.author} - ${message.author.tag}`,true)
    .addField("Kanal", `<#${message.channel.id}>`,true)
    .addField("Yazı", `${message.content}`,true)
    .setFooter("ID - "+ message.author.id )
    .setTimestamp()
    reeklam.send(ReklamkayıtEmbed)



  }
});

client.on("message",  async message => {
    if(message.channel.type === "dm") return;
  if(message.author.bot) return;
    if(message.channel.id === "498421252138991648")
    {
    message.delete();
    }
    if(message.channel.id === "502498791065387022")
    {
    message.delete();
    }


  });


app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 120000);

process.on('unhandledRejection', error => console.log(`unhandledRejection:\n${error.stack}`))

client.login(ayarlar.token)