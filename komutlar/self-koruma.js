const db = require('quick.db');

exports.run = async (client, message, args, dil) => {
if(args[0] === "kapat") {
  db.delete(`sunucular.${message.guild.id}.koruma`)
  message.channel.send(` Self-bot koruması kapatıldı`)
} else if(args[0] === "aç") {
  db.set(`sunucular.${message.guild.id}.koruma`, `aktif`)
  message.channel.send(' Self-Bot koruması başarıyla **aktif** edildi. <a:on:752561537138425857>')
} else return message.reply(dil.doğrukullanım)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3,
  kategori: "Koruma-Sistem"
};

exports.help = {
  name: 'self-koruma',
  description: 'Self botları engeller',
  usage: 'koruma <aç/kapat>'
};