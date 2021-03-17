const Discord = require('discord.js');

let botid = ('')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor('GRAY')
.addField(' **:game_die:  Güvenlik Komutları  :game_die: **',`
**:game_die: rol-koruma** : Rolleri Korur!
**:game_die: self-koruma** : Self Botları Susturur!
**:game_die: ddos-sistemi** : ddos Koruma Sistemini Aktif Eder!
**:game_die: sağtıkban** : Sağtık Ban Korumasını Aktif Eder!
**:game_die: kanal-koruma** : Kanalları Korur!
**:game_die: anti-raid** : Sunucuya Eklenen Botları Kickler!`)
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
  name: 'koruma',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'premium'
};
   