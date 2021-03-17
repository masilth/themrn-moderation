const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
 let kanal = message.mentions.channels.first()
if (!kanal) return message.channel.send('Kanal Etiketle')
   
  db.set(`kayıtk_${message.guild.id}`, kanal.id)

 
  message.channel.send(`Başarıyla Kanal Ayarlandı Ayarlanan Kanal ise Bu **${kanal}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3,
kategori:"yetkili"
};

exports.help = {
 name: 'kayıt-kanal',
 description: 'kayıt kanalı Olunacak kanalı seçersiniz',
 usage: 'kayıt-kanal <#kanal>'
};