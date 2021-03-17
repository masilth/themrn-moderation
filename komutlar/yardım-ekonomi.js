 const Discord = require('discord.js');

let botid = ('')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
   .setColor('GRAY')
.addField(' :fire:  **Ekonomi Komutları**:fire: ',`
**:fire:  emoji-yakalamaca** : Puan Oyunu!
**:fire:  gönder** : Puan Gönderir!
**:fire:  günlük** : Günlük Puan Alırsın!
**:fire:  kumar** : Sunucudaki Emojileri Listeler!
**:fire: puan** : Puanınızı Gösterir!
**:fire: puan-ver** : Puan Verir (Bot Sahibi Kullanabilir)!
**:fire: satın-al** : Marketten Bişey Alırsınız!(bakım şuan)
**:fire: çal** : Cepcilik Yaparsınız!`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'ekonomi',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'premium'
};
   