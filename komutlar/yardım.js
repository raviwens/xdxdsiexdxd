const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» Flex BOT Komut Sistemleri')
.setTimestamp()
.addField('» .ymod', 'Moderasyon Yardım Kodları')
.addField('» .ybot', 'Bot Komutlarını Gösterir')
.setFooter('© 2020 Flex Bot', client.user.avatarURL())
.setImage('')
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};