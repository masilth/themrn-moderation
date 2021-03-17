const Discord = require("discord.js");
const fs = require("fs");
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu Komutu kullanmanız için `Yönetici` yetkisine sahip olmalısınız.') 


  let d = await db.fetch(`okanal_${message.guild.id}`)
  const sea = message.guild.channels.get(d)
  if (!sea) return message.channel.send('Oylama kanalı ayarlanmamış. Ayarlamak için `t+oylama-kanal #kanal`')

    let yazi = args.slice(0).join(' ')
    if (!yazi) return message.channel.send('Lütfen Oylamada Ne Olacağını Yaz!')
    message.channel.send(`Oylama gönderildi. Gönderilen kanal: <#${d}>`)
    const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setTitle('||@everyone|| ||@here||')
    .addField('Heey , Oylamaya Katılmayı Unutma!',`**${yazi}**`)
    .setAuthor(`TitanX Oylama Sistemi`)
    .setThumbnail(`https://cdn.discordapp.com/attachments/704396564227031130/710399172108615730/bilinmeyen-1.gif`)
    .setFooter(`${message.author.tag} Tarafından Yapıldı.`, message.author.avatarURL)
    .setTimestamp()
     sea.send('',{embed: embed}).then(m => {
   let re = m.react('✅');
   let ra = m.react('❌');
        
    })
    }

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['oylama-yap', 'oylamayap', 'oylamalar'],
 permLevel: 2,
 kategori: "yetkili"
};

exports.help = {
 name: 'oylama',
 description: 'Bulunduğunuz kanala oylama yapar.',
 usage: 'oylama'
};