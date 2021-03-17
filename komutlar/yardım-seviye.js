const Discord = require('discord.js');

let botid = ('')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor('GRAY')
.addField(' **:champagne_glass: Kullanıcı Komutları :champagne_glass: **',`
**:champagne_glass: seviye** : Seviyenizi Gösterir!
**:champagne_glass: seviye-ayarlar** : Seviye komutlarının Ayarlarını Gösterir!
**:champagne_glass: seviye-aç** : Seviye Sistemini Açar!
**:champagne_glass: seviye-kapat** : Seviye Sistemini Kapatır!
**:champagne_glass: seviye-log** : Seviye Log Kanalını Ayarlar!
**:champagne_glass: seviye-rol** : Seviye Ödülünü Ayarlar!
**:champagne_glass: seviye-xp** : Mesaj Başına Verilen Xpyi Ayarlar!`)
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
  name: 'sevsis',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'premium'
};
   