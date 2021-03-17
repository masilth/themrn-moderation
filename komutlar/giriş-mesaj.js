const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args, member) => {
//  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(' `SUNUCUYU_YÖNET` yetkisine sahip olmalısın!') 
  let mesaj = args.join(' ');
  if (!mesaj) return message.channel.send("Giriş mesajlarını ayarlamak için birşeyler **belirtiniz!** `Sunucuya hoşgeldin, {kullanıcı}! Seninle beraber {toplam} kişiyiz!`"); 
  if (message.channel.type === "dm") return;
  if (message.author.bot) return;
    let newMessage;
    if (args.join(" ").toLowerCase() === `none`) newMessage = '';
    else newMessage = args.join(" ").trim();
    let i = await db.set(`memberGiris_${message.guild.id}`, newMessage)
    return message.channel.send(`Giriş mesajı başarıyla **ayarlandı!**`)

}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'dm-hg',
  description: 'dm den giriş mesajı yollar',
  usage: 'dm-hg'
};