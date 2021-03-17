const Discord = require('discord.js')
const fs = require('fs');
const ayarlar = require('../ayarlar.json');
let kanal = JSON.parse(fs.readFileSync("./ayarlar/glog.json", "utf8"));
var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu Komutu Kullanabilmek İçin **Yönetici** İznine Sahip Olmalısın!`);
  
  let channel = message.mentions.channels.first()
    if (!channel) {
        message.channel.send(':x: | Kullanım: `.hgbb-kanal #kanal`')
        return
    }
    if(!kanal[message.guild.id]){
        kanal[message.guild.id] = {
            resim: channel.id
        };
    }
    fs.writeFile("./ayarlar/glog.json", JSON.stringify(kanal), (err) => {
        console.log(err)
    })
    message.channel.send(`:white_check_mark: | ** Resimli Hoşgeldin - Görüşürüz kanalı ${channel} Olarak Ayarlandı.** `)
}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
}
exports.help = {
    name: 'hgbb-kanal',
    description: 'Giriş Çıkış Kanalını Ayarlar.',
    usage: 'resimli-giriş-çıkış <#kanal>'
}
