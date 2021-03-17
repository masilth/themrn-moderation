

const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('819206725776310282') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('#0066FF')
        .setTitle(`${client.user.username} - Yardım Menüsü`)
        .setDescription(`:dark_sunglasses: | **${ayarlar.prefix}yetkili** Yetkili Komutları\n:dark_sunglasses:  | **${ayarlar.prefix}sunucu** Sunucu Komutları\n:dark_sunglasses:  | **${ayarlar.prefix}kullanıcı** Kullanıcı Komutları\n:dark_sunglasses:   | **${ayarlar.prefix}kayıt** Kayıt Komutları\n:dark_sunglasses:  | **${ayarlar.prefix}sevsis** Seviye Komutları\n:dark_sunglasses:    | **${ayarlar.prefix}ekonomi** Ekonomi Komutları\n:dark_sunglasses:  | **${ayarlar.prefix}invite** Davet Komutları\n:dark_sunglasses:   | **${ayarlar.prefix}müzik** Müzik Komutları\n:dark_sunglasses:  | **${ayarlar.prefix}koruma** Koruma Komutları`)  
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
        .setImage('https://media.discordapp.net/attachments/817338630090522695/818476784831954944/standard.gif')  
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: ''
};








