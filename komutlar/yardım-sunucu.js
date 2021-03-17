const Discord = require('discord.js');

let botid = ('')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("GRAY")
    .addField('**Sunucu Komutları**',`
**:white_small_square: otorol-ayarla** : Otorol Ayarlar!
**:white_small_square: otorol-mesajı** : Otorol Mesajını Ayarlar!
**:white_small_square: otorolkapat** : Otorolü Kapatır!
**:white_small_square: küfür-engelle** : Küfür Engel Açar!
**:white_small_square: reklam-engel** : Reklam Engel Açar!
**:white_small_square: reklamban** : Reklam Ban Sistemini Açar!
**:white_small_square: reklambankapat** : Reklam Ban Sistemini Kapat!
**:white_small_square: reklam-taraması** : Reklam Taraması Yapar!
**:white_small_square: capsengel** : Capslock Engel Açar!
**:white_small_square: kayıt-sistemi** : Kayıt Sistemini Gösterir!
**:white_small_square: sayaç** : Sayaç Sistemini Gösterir!
**:white_small_square: sa-as** : Sa-As Açar!
**:white_small_square: modlog** : Modlog Kanalını Belirler!
**:white_small_square: güvenlik** : Resimli Güvenlik!
**:white_small_square: hgbb-kanal** : Resimli Giriş Çıkış!
**:white_small_square: ototag** : Ototagı Ayarlar!
**:white_small_square: ever-engel** : Everyoneyi Engeller!`)
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
  name: 'sunucu',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'premium'
};
   