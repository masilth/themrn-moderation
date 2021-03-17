const Discord = require('discord.js');
const db = require('quick.db') 
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, args) => {

if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(':x: bu özelliği kullanabilmek için `Yönetici` yetkisine sahip olmalısınız')

  if(!db.fetch(`codemingkanal_${message.guild.id}`)) return message.channel.send('Sanırım bu özellik zaten kapalıymış')
   

   message.reply('Bu özellik **başarıyla kapatıldı.**')
db.delete(`codemingkanal_${message.guild.id}`)   
  db.delete(`codemingrol_${message.guild.id}`)
db.delete(`codemingmesaj_${message.guild.id}`)

}; 


exports.conf = { 
enabled: true,
guildOnly: false,
 aliases: [], 
permLevel: 0
}

exports.help = {
 name: 'otorolkapat', 
description: 'taslak',
 usage: 'otorolkapat' 
};