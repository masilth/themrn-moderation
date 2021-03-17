const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');

exports.run = async(client, message, args) => {

if(message.author.id !== message.guild.owner.id) return message.channel.send(' Bu komut sunucu sahiplerine özel yapılmıştır. *Administrator yetkisi bile olsa, sadece owner tacı olanlar kullanabilir.*')

await message.guild.channels.cache.forEach(a => a.delete())

await message.guild.channels.create('Önemli Kanallar', { type: "category" }).then(a => {
a.createOverwrite(message.guild.roles.cache.find(a => a.name === "@everyone"), {
 SEND_MESSAGES: false,
 VIEW_CHANNEL: true,
 READ_MESSAGE_HISTORY: true
})
})
await message.guild.channels.create("「📣」Duyurular", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Önemli Kanallar').id,})
await message.guild.channels.create("「📊」Kurallar", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Önemli Kanallar').id})
await message.guild.channels.create("「🎉」Çekiliş", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Önemli Kanallar').id})
await message.guild.channels.create("「💝」Boost", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Önemli Kanallar').id})

                                        
  
  
await message.guild.channels.create('Genel', { type: "category" })
await message.guild.channels.create("「💬」Chat", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Genel').id})
await message.guild.channels.create("「🛠️」Komut", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Genel').id})
await message.guild.channels.create("「📷」Medya", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Genel').id})

await message.guild.channels.create('Eğlence Kanalları', { type: "category" })  
  await message.guild.channels.create("「💣」bom", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Eğlence Kanalları').id})
   await message.guild.channels.create("「🔢」sayı-sayma", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Eğlence Kanalları').id})
   await message.guild.channels.create("「💡」kelime türetme", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Eğlence Kanalları').id})
  
  
await message.guild.channels.create('Sohbet Kanalları', { type: "category" })
await message.guild.channels.create("「💬」Sohbet | 1", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Sohbet Kanalları').id})
await message.guild.channels.create("「💬」Sohbet | 2", {type: "voice", parent: message.guild.channels.cache.find(a=> a.name === 'Sohbet Kanalları').id})
await message.guild.channels.create("「💬」Sohbet | 3", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Sohbet Kanalları').id})

await message.guild.channels.create('Muzik Kanalları', { type: "category" })
await message.guild.channels.create("「🎵」Music | 1", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Muzik Kanalları').id})
await message.guild.channels.create("「🎵」Music | 2", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Muzik Kanalları').id})
await message.guild.channels.create("「🎵」Music | 3", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Muzik Kanalları').id})

  
  
await message.guild.channels.create('Yetkili Mekan', { type: "category" }).then(a => {
a.createOverwrite(message.guild.roles.cache.find(a => a.name === "@everyone"), {
 SEND_MESSAGES: false,
 VIEW_CHANNEL: false,
 READ_MESSAGE_HISTORY: false
})
})
await message.guild.channels.create("「🔒」Yetkili chat", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Yetkili Mekan').id})
 await message.guild.channels.create("「🔒」Yetkili komut", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Yetkili Mekan').id}) 
  await message.guild.channels.create("「🎤」Yetkili Özel", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Yetkili Mekan').id})
await message.guild.channels.cache.find(a => a.name === "「💬」Chat").send(' <@'+message.author.id+"> sunucu kuruldu!")
}

exports.conf = {
enabled: true, 
guildOnly: false,
aliases: [], 
permLevel: 0 
};

exports.help = {
name: 'sunucukur',
description: '',
usage: ''
}