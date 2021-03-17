const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = (client, message, args) => {
         let mesaj = args.slice(0).join(' ')



  if(mesaj === "id") {
     const emojiList = message.guild.emojis.map((e, x) => (x + ' | ' + e)).join('\n');
      var emojis = message.guild.emojis.array();
  const embed2 = new Discord.RichEmbed()
.setColor("RED")
  .setFooter(`Sadece emojileri görmek için -emojiler`)
.setDescription(`\`\`\`js
Sunucuda Bulunan Emojiler (${emojis.length} adet)
${emojiList}
\`\`\``)
             .setTimestamp() 
 message.channel.send(embed2);
        return
  }
    const embed = new Discord.RichEmbed()
  .setTitle(`Emoji Sayısı: [${message.guild.emojis.size}]`)
  .setColor(0x36393E)
     .addField('Emojiler:', `${message.guild.emojis.map(e => e.toString()).join('**  -  **')}`, true)
.setFooter('Emojileri IDleri ile birlikte görmek için; .emojiler id.')

      message.channel.send(embed);
 
}


exports.conf = {
    enabled: true,
    guildOnly: false,
  aliases: ["emoji"],
  permLevel: 0,
  }

exports.help = {
    name: 'emojiler',
  category:'Kullanıcı',
    description: 'Sunucuda bulunan emojileri gösterir.',
    usage: 'emojiler'
}