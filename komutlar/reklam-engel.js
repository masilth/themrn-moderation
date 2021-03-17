const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async (client, message, args) => {
const code = message.mentions.channels.first() || message.channel
const codeshare = args[0]
if (!codeshare) return message.reply(`Reklam engel sistemini açmak için reklam-engel aç #kanal veya reklam-engel aç yazmalısın!`)
 
  if (codeshare == 'aç') { 
  let açıkkapalı = await db.fetch(`reklamEngelcodeshare_${code.id}`)
  if(açıkkapalı) return message.reply(`Zaten reklam engel bu kanalda/belirttiğiniz kanalda aktif!`)
    
db.set(`reklamEngelcodeshare_${code.id}`,'açık')
message.reply(`Reklam engel sistemi başarıyla bu kanalda/belirttiğiniz kanalda aktif edildi!`)
  }
  
  if (codeshare == 'kapat') {
  let açıkkapalı = await db.fetch(`reklamEngelcodeshare_${code.id}`)
  if(!açıkkapalı) return message.reply(`Zaten Reklam engel bu kanalda/belirttiğiniz kanalda deaktif!`)
    
db.delete(`reklamEngelcodeshare_${code.id}`)
message.reply(`Reklam engel sistemi başarıyla bu kanalda/belirttiğiniz kanalda deaktif edildi! <a:on:752561537138425857>`)
}
};
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};
exports.help = {
  name: 'reklam-engel',
  description: 'reklam engellemeyi açar',
  usage: 'CodeShare'
}