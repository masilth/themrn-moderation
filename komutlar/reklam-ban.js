const db = require("quick.db");
const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  const sınır = args.slice(0).join(" ");
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      ":warning: Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!"
    );

  if (!sınır)
    return message.channel.send(
      ":warning: Reklam Ban sınırını belirtmeyi unuttun :wink:"
    );

  db.set(`reklamsınır_${message.guild.id}`, sınır);
  db.set(`reklambanayar_${message.guild.id}`, "acik");
  const dbsınır = await db.get(`reklamsınır_${message.guild.id}`);
  message.channel.send(
    `Reklam Ban sınırı \`${dbsınır}\` olarak ayarlandı :white_check_mark:`
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["reklam-ban"],
  permLevel: 0
};

exports.help = {
  name: "reklamban",
  description: "Reklam ban sisteminin sınırını belirler.",
  usage: "reklamban <sayı>"
};