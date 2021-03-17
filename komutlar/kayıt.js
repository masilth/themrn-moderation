const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {

  const codeshare = await db.fetch(`kayıtk_${message.guild.id}`)
  const tag = " ";
  if(codeshare == null) return message.channel.send('Kayıt Sistemi eklemek için <`-kayıt-rol @rol`/`-kayıt-kanal #kanal`/`-kayıt-log #kanal`> şeklinde ekleyebilirsiniz. ');
  if (message.channel.id !== codeshare) return message.channel.send(`Kayıt Kanalı <#${codeshare}> Şuanda Burası !`);
  if (codeshare == true) return; 
  if (codeshare == false) return message.channel.send(`Kayıt Sistemi Aktif değil`);

  let user = message.member
  let guild = message.guild
  let isim = args[0];
  let yas = args[1];
  if (!isim) return message.channel.send(`İsmini girmelisin.`)
  if (!yas) return message.channel.send(`Yaşını girmelisin.`)
  
  user.setNickname(`${tag} ${isim} | ${yas}`)
  user.addRole(db.fetch(`kayıt_${message.guild.id}`))
  message.channel.send(`${message.author} Sunucuya Başarıyla Kayıt oldun !`)
  message.guild.channels.get(db.fetch(`kayıtlog_${message.guild.id}`)).send(`<a:kayit:707928076926976061> ${message.author} Adlı kullanıcı Başarılı Şekilde Kayıt Oldu ! <a:oldu:707928398902853713> `);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
  kategori: "yetkili"
}

exports.help = {
  name: 'kayıt',
  description: "Sunucuya kayıtolmaya yarar",
  usage: 'kayıt <isim> <yaş>'
}