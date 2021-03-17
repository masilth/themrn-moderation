const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {
  
  let prefix = ayarlar.prefix
 
  if (!params[0]) {
    message.channel.sendCode("asciidoc",`DDOS SYSTEM MENÜSÜ
                    
​
✅DDOS Sistemi Otomatik Olarak Aktiftir Sadece ddos-system Diye Bir Tane Metin Kanalı Açınız.           
​
`);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.sendCode('asciidoc', `= ${command.help.name} =
​
Hakkında  :: ${command.help.description}
Kullanım  :: ${prefix}${command.help.usage}`);
    }
  }
  //CodeShare Developer Team
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'ddos-sistemi',
  description: 'Botun yardım komutlarını gösterir.',
  usage: 'yardım'
};