const Discord = require('discord.js');

let botid = ('')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("GRAY")
    .addField(`** :gem:  Yetkili Komutları  :gem: **`, `
**:gem: ban ** : Sunucudan Yasaklar!
**:gem: unban** : Yasağını Kaldırır!
**:gem: kick** : Sunucudan Kickler!
**:gem: emojiler** : Sunucudaki Emojileri Listeler!
**:gem: sil** : Mesaj Siler!
**:gem: rolbilgi** : Rol Bilgilerini Gösterir!
**:gem: oylama** : Oylama Yapar!
**:gem: hatırlat** : Hatırlatma Yapar!
**:gem: süreliban** : Süreli Yasaklar!
**:gem: temizle-üye** : Kişinin Mesajlarını Siler!
**:gem: çekiliş** : Çekiliş Yapar!
**:gem: kanalkilit** : Kanalı Süreli Kilitler!
**:gem: rolver** : Kişiye Rol Verir!
**:gem: rolal** : Kişinin Rolünü Alır!
**:gem: terfi** : Kişiyi Terfi Eder!
**:gem: yavaşmod** : Süreli Yavaş Modu Açar!
**:gem: uyarı** : Uyarı Sistemini Gösterir!`) 
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
  name: 'yetkili',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'premium'
};
   