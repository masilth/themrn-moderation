const Discord = require('discord.js');

let botid = ('')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor('GRAY')
.addField('**Müzik Komutları**',`
**:headphones: oynat** : İstediğiniz Müziği Oynatır!
**:headphones: durdur** : Oynatılan Müziği Durdurur!
**:headphones: geç** : Sıradaki Şarkıya Geçer!
**:headphones: ses** : Ses Seviyesini Belirler!
**:headphones: tekrar** : Çalan şarkı bitince tekrar çalar!
**:headphones: kuyruk** : Sıradaki Şarkıları Gösterir!
**:headphones: devamet** : Durdurulan Müziği Oynatır!
**:headphones: oynatılan** : Şuan da Çalan Müziği Gösterir!
**:headphones: ping** : Botun Pingini Gösterir!
**:headphones: kapat** : Oynatılan Müziği Kapatır!`)
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
  name: 'müzik',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'premium'
};
   