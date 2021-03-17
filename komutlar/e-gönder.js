const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
  
  let user = message.mentions.users.first() || client.users.get(args[0])
  let para = await db.fetch(`puan_${message.author.id}`)
  let miktar = args[1]
  let x = miktar-para
  if(!user) return message.reply('💸 Para gönderme işlemine devam etmek için bir kullanıcı belirt.').then(çalanlara_selam => çalanlara_selam.delete(10000))
  
  
  if(user.id === message.author.id) return message.reply(':x: Kendine para göndermezsin zeki jojuk! :)').then(çalanlara_selam => çalanlara_selam.delete(10000))
  
  if(!para) return message.reply(':x: Gönderecek hiç paran yok :(').then(çalanlara_selam => çalanlara_selam.delete(10000))
  
  if(!miktar) return message.reply(':x: Göndermek istediğin miktarı belirtmelisin.').then(çalanlara_selam => çalanlara_selam.delete(10000))
  
  if(miktar < 1)  return message.reply(':x: Bu sayı da ne?! İq miktarın mı? | en az 1 gönderebilirsin.').then(çalanlara_selam => çalanlara_selam.delete(10000))
  
  if(isNaN(miktar))  return message.reply(':x: Bu bir sayı değil. :)').then(çalanlara_selam => çalanlara_selam.delete(10000))
  
  if(miktar > para) return message.reply(':x: Göndermek istediğin; **'+miktar+'** para gönderilemedi.Göndermek için **'+x+'** Miktarda paraya ihtiyacın var.').then(çalanlara_selam => çalanlara_selam.delete(10000))
  
  
  
   let s = '💸 Para gönderim işlemi başarılı. <@!'+user.id+'> Kullanıcısına **'+miktar+'** miktarında para gönderildi.!'
  
  
  let codeming = new Discord.RichEmbed()
  .setTitle('İşlem Başarılı!')
  .setDescrtiption(s)
  .setFooter('TitanX')
  .setColor('GREEN')
  message.channel.send(codeming)
  
  


    
   db.add(`puan_${message.author.id}`, - miktar) 
db.add(`puan_${user.id}`, miktar)   
    
 user.send('Hesabınıza,'+message.author+' tarafından **'+miktar+'** para yatırıldı!') 
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'gönder',
  description: 'taslak', 
  usage: 'gönder'
};
