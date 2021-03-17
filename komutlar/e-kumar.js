const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
  
  let para = await db.fetch(`puan_${message.author.id}`)
  
  
  
  
  if(para < 1000) return message.reply('Bu oyunu oynamak için çok fakirsin.Oynaman için **'+1000-para+'** miktarında daha paraya ihtiyacın var.')
  
  message.channel.send('Kumar oynamaktan gerçekten emin misin? \n Oyun sonunda paranın yarısını kazanabilirsin veya paranın yarısını kaybedebilirsin. \n\n `devam / iptal`').then(s => {
  
  
  
       let filtre = mes => mes.author.id === message.author.id;    
  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
   if(collected.first().content === "iptal") {
     
  s.edit(':x: Oyun iptal edildi!')   
    return 
   }
    
    if(collected.first().content === "devam") {
     //🎰
   s.edit('🎰 | Kumar oynanıyor..!').then(codeming => {
     
  setTimeout(() => {
    
  s.edit('🎰 | Zarlar atılıyor..!')  
    
    
    
  }, 4000)
             
     
  setTimeout(() => {
    
let veriler = ["0","1","0","1","0","1","0","1","0","1","0","1","0","1"]
    
let mete = veriler[Math.floor(Math.random() * veriler.length)];    
    
if(mete === "0") {
  
  let kesilecek = para / 2
  
  
let embed = new Discord.RichEmbed()
.setTitle(':cry: Kötü Şans!')  
.setDescription('Maalesef kumarda kaybettin.Paranın yarısı; **'+kesilecek+'** kumar borcuna ödendi.')  
.setFooter(client.user.username, message.guild.iconURL)  
.setColor('RED')  


s.delete()

message.channel.send(embed)  
  
db.add(`puan_${message.author.id}`, -kesilecek)  
  
  
 return 
}    
    
if(mete === "1") {
  
  
 let verilecek = para * 2 
  
  
  let embed = new Discord.RichEmbed()
.setTitle('💰 Bu inanılmaz!')  
.setDescription('Kumarda tüm düşmanlarını yenerek; **'+para+'**,paranı ikiye katlıyarak **'+verilecek+'** Miktarında para kazandın! :)')  
.setFooter(client.user.username, message.guild.iconURL)  
.setColor('GREEN')  


s.delete()

message.channel.send(embed)  
  
  db.add(`puan_${message.author.id}`, -verilecek) 
  
}    
    
    
    
    
  }, 10000)     
     
     
     
   })   
      
    
      
      
      
      
      
      

     
   }   
    
    
    
  })
  
  
  
  })
  
  
  
  
  //CODEMİNG TÜM HAKLARI SAKLIDIR.
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'kumar',
  description: 'taslak', 
  usage: 'kumar'
};
