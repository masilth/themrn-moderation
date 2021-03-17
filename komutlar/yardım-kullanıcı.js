const Discord = require('discord.js');

let botid = ('')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor('GRAY')
.addField('**:eyes:  Kullanıcı Komutları :eyes: **',`
**:eyes: avatar** : Avatarını Gösterir!
**:eyes: sunucubilgi** : Sunucu Bilgilerini Gösterir!
**:eyes: havadurumu** : HavaDurumunu Gösterir!
**:eyes: yasaklar** : Yasaklı Kişileri Gösterir!
**:eyes: üyedurum** : Üye Durum Gösterir!
**:eyes: döviz** : Döviz Kurlarını Gösterir!
**:eyes: saat** : Saati Gösterir!
**:eyes:  youtube** : Aradığınızı Bulur!
**:eyes: servericon** : Sunucu Resmini Gösterir!
**:eyes: hesapla** : Toplama Yapar!
**:eyes: kısalt** : Link Kısaltır!
**:eyes: banner** : Yazınızı Banner Yapar!
**:eyes: korona** : Korona Durumunu Gösterir!
**:eyes: kanalbilgi** : Kanalın Bilgisini Gösterir!
**:eyes: istatistik** : Bot İstatistiklerini Gösterir!
**:eyes: canlıdestek** : Canlı Destek Açarsınız!`)
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
  name: 'kullanıcı',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'premium'
};
   