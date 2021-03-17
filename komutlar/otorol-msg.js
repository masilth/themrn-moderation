const Discord = require('discord.js');
const db = require('quick.db') 
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, args) => {

if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(':x: bu özelliği kullanabilmek için `Yönetici` yetkisine sahip olmalısınız')

   let mesaj = args.slice(0).join(" ")
if(!mesaj) return message.reply('Ayarlanacak mesajı belirtmedin.')
    var mesajs = mesaj.replace("-uye-", `${message.author.tag}`).replace("-uyetag-", `${message.author.username}`) .replace("-server-", `${message.guild.name}`).replace("-rol-", message.guild.roles.get(db.fetch(`codemingrol_${message.guild.id}`)).name).replace("-onlineuyesayısı-", message.guild.members.filter(s => s.presenceStatus === "online").size).replace("-botsayisi-", message.guild.members.filter(s => s.bot).size) .replace('-kanalsayisi-' ,message.guild.channels.size ).replace("-uyesayisi-", message.guild.memberCount).replace("-bolge-", message.guild.region)
   message.channel.send(` Otorol mesajını ${mesajs} olarak ayarlandım. `)
  db.set(`codemingmesaj_${message.guild.id}` , mesaj)
 };


exports.conf = { 
enabled: true,
guildOnly: false,
 aliases: [], 
permLevel: 0
}

exports.help = {
 name: 'otorol-mesajı', 
description: 'taslak',
 usage: 'oto-rol-msg' 
};