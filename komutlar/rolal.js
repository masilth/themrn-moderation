const Discord = require('discord.js');
exports.run = (client, message, args) => {

    if (!message.guild) {
        const ozelmesajuyari = new Discord.RichEmbed()
            .setColor(0xFF0000)
            .setTimestamp()
            .setAuthor(message.author.username, message.author.avatarURL)
            .addField(':warning: **Uyarı** :warning:', '`rol-al` **adlı komutu özel mesajlarda kullanamazsın.**')
        return message.author.sendEmbed(ozelmesajuyari);
    }
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply('Bunun için gerekli iznin yok');
    let guild = message.guild
    let rol = message.mentions.roles.first()
    let user = message.mentions.members.first()

    if (!user) return message.reply('**Kimden rol alınacağını yazmadın!**').catch(console.error);
    if (rol.length < 1) return message.reply('**Rolü belirtmedin**');
    user.removeRole(rol);

    const embed = new Discord.RichEmbed()
        .setDescription(`<a:gogo:712605398816784405> ${user} Adlı Kullanıcıdan Başarıyla ${rol} Rolü Alındı <a:okey:711999433486893058>`)
        .setFooter('TitanX Rol Sistemi', client.user.avatarURL)
        .setColor("RANDOM")
        .setTimestamp()
    message.channel.send({ embed })
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['rolal'],
    permLevel: 0
};

exports.help = {
    name: 'rolal',
    description: 'İstediğiniz kişiden istediğiniz rolü alır.',
    usage: 'rol-al [kullanıcı] [@rol]'
};