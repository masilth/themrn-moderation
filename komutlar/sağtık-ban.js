const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send('⛔ Bu komudu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!')
  
    if (!args[0]) return message.channel.send('⛔ Sistemi kullanabilmek için: `.sağtıkban aç veya kapat`')

    if (args[0] == 'aç') {
        db.set(`koruma_${message.guild.id}`, 'acik')
        message.channel.send(`Sağ Tık Ban sistemi açıldı.`)

    }
    if (args[0] == 'kapat') {
        db.set(`koruma_${message.guild.id}`, 'kapali')
        message.channel.send(`Sağ Tık Ban sistemi kapatıldı`)

    }

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sağtıkban'],
    permLevel: 0
};

exports.help = {
    name: 'sağtıkban',
    description: '',
    usage: 'sağtıkban aç/kapat'
}; 