const Discord = require('discord.js');

exports.run = (client, message) => {


let sunucu = new Discord.RichEmbed()
.setAuthor('Sunucu Bilgi', message.guild.iconURL)
.setThumbnail(message.guild.iconURL)
.addField('Sunucu İsmi', message.guild.name)
.addField('Sunucu İdsi', message.guild.id)
.addField('Sunucu Bölgesi', message.guild.region)
.addField(`Üyeler ${message.guild.memberCount}`, `Çevrimiçi : ${message.guild.members.filter(m => m.user.presence.status === "online").size}\n Rahatsız Etmeyin: ${message.guild.members.filter(m => m.user.presence.status === 'dnd').size} \n Boşta: ${message.guild.members.filter(m => m.user.presence.status === 'idle').size} \n Çevrimdışı: ${message.guild.members.filter(m => m.user.presence.status === 'offline').size}`)
.addField(`Kanallar ${message.guild.memberCount}`, ` Yazı: ${message.guild.channels.filter(c => c.type === 'text').size} \n Sesli: ${message.guild.channels.filter(c => c.type === 'voice').size} \n Kategori: ${message.guild.channels.filter(c => c.type === 'category').size}`)
.addField('Roller:', message.guild.roles.map(role => role.name).join(', '), true)
.addField('AFK kanalı:', `${message.guild.afkChannel}`, true)
.addField('AFK zaman aşımı:', message.guild.afkTimeout, true)
.addField('Oluşturma tarihi:', message.guild.createdAt, true)
.setTimestamp()
.setFooter('Sunucu Bilgi', message.guild.iconURL)
return message.channel.send(sunucu)

}; 

module.exports.conf = {
aliases: [],
permLevel: 0, 
enabled: true,
guildOnly: true
};

module.exports.help = {
    name: 'sunucubilgi',
    description: '',
    usage: 'sunucubilgi'
};