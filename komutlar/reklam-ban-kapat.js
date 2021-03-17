const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send(':warning: Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!')
  let zatenkapalı = await db.fetch(`reklambanayar_${message.guild.id}`)
  if(zatenkapalı == 'kapali') {
    message.channel.send('Reklam Ban sistemi zaten kapalı :wink:')
  };
if(zatenkapalı == 'acik') {
        db.delete(`reklamsınır_${message.guild.id}`)
  db.set(`reklambanayar_${message.guild.id}`, 'kapali')
        message.channel.send(`Reklam Ban sistemi kapatıldı :white_check_mark:`);
};
  };

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['reklam-ban-kapat'],
    permLevel: 0
};

exports.help = {
    name: 'reklambankapat',
    description: 'Reklam ban sistemini kapatır.',
    usage: 'reklambankapat'
};