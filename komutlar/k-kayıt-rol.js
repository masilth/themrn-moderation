const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let rol = message.mentions.roles.first()
  if (!rol) return message.channel.send('Lütfen bir rol etiketlermisin?')
   
  db.set(`kayıt_${message.guild.id}`, rol.id)
  message.channel.send(`Başarıyla Rol Ayarlandı Ayarlanan Rol ise Bu **${rol}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3,
  kategori:"yetkili"
};

exports.help = {
 name: 'kayıt-rol',
 description: 'kayıt Olunca Verilecek rolü ayarlarsınız',
 usage: 'kayıt-rol <@rol>'
};