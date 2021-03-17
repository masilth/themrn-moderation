const Discord = require('discord.js');
exports.run = (client, message, args) => {

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: **Uyarı** :warning:', '`rol-ver` **adlı komutu özel mesajlarda kullanamazsın.**')
  return message.author.sendEmbed(ozelmesajuyari); }
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply('Bunun için gerekli iznin yok');
  let guild = message.guild
  let rol = message.mentions.roles.first()  
  let user = message.mentions.members.first() 

  if (!user) return message.reply('**Kime Rol Verceğimi Yazmadın!**').catch(console.error);
  if (rol.length < 1) return message.reply('**Rolü belirtmedin**');
user.addRole(rol);
  
   const embed = new Discord.RichEmbed()
        .setDescription(` ${user} Adlı Kullanıcıya Başarıyla ${rol} Rolü Verildi <a:on:752561537138425857> `)
        .setFooter('TitanX Rol Sistemi', client.user.avatarURL)
        .setColor("RANDOM")
        .setTimestamp()
    message.channel.send({embed})
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rolver'],
  permLevel: 0
};

exports.help = {
  name: 'rolver',
  description: 'İstediğiniz kişiyi istediğiniz rolü verir.',
  usage: 'rol-ver [kullanıcı] [@rol]'
};