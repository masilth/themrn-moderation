const Discord = require("discord.js");
const superagent = require("superagent");
module.exports.run = async (client,message,args) => {
 
   let role = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(rol => rol.id === args[0]);
  var wasait = new Discord.RichEmbed()
  .setColor("#36393F")
  .setDescription(":x:  Bir Rol Etiketleyin  `Örnek: t+rolinfo @üye`");
  if(!role) return message.channel.send(wasait);
  var moment = require("moment");
  var temps = moment(message.createdTimestamp).format("LLLL");
  var wasaitEmbed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField('Rol İsmi', role.name, true)
  .addField('ID', role.id, true)
  .addField('Role Sahip Kullanıcılar', role.members.size, true)
  .addField('Renk', role.hexColor, true)
  .addField('Etiketleme?', role.mentionable ? '\nEvet' : 'Hayır', true)
  .addField('Oluşturulduğu Zaman', moment(role.createdAt).format("LL"), true)
  .setFooter("TitanX");
  message.channel.send(wasaitEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rolinfo', 'rol', 'rolbilgi'],
  permLevel: 0
};

exports.help = {
  name: 'rolbilgi',
  description: 'rolinfo | Rol hakkında bilgi verir.',
  usage: 'rolinfo <roletiketi>'
};