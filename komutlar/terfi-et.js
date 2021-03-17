const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => { 

    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu komudu kullanmak için **Rolleri Yönet** yetkisine sahip olmalısın.').setColor(10038562));
    let kullanıcı = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!kullanıcı) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Lütfen bir kullanıcı ismi gir.\nÖrnek: -terfi [@İsim] [@Yetki]`).setColor(10038562));
    let role = message.mentions.roles.first()

    if (!role) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Lütfen bir rol ismi gir.\nÖrnek: -terfi [@İsim] [@Yetki]`).setColor(10038562));
    let aRole = message.mentions.roles.first()
    if (!aRole) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Bu rolü bulamıyorum.\nÖrnek: -terfi [@İsim] [@Yetki]`).setColor(10038562));
  
    if (kullanıcı.roles.has(aRole.id)) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu kullanıcı zaten bu terfiyeye ulaşmış').setColor(10038562));
    await (kullanıcı.addRole(aRole.id))
    message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`**${kullanıcı}** isimli üye \`\`${role.name}\`\` tagına terfi etti.`).setColor('RANDOM'));
  

};

module. exports.conf = {
  aliases: ['terfi-ettir']
};

module.exports.help = {
  name: 'terfi'
};