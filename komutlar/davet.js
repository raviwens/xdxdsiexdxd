const Discord = require("discord.js")
exports.run = async(client, message, args) => {

const embed = new Discord.MessageEmbed()
.setThumbnail("https://cdn.discordapp.com/attachments/701762042708623460/790589058610233374/flex.png")   
.addField("Selam, beni buradan davet edebilirsin","[TIKLA](https://discord.com/oauth2/authorize?client_id=645226005144797184&scope=bot&permissions=2147483647)")
.addField("Botuma burdan oy vererek destek olabilirsin","[TIKLA](https://discord.com/oauth2/authorize?client_id=645226005144797184&scope=bot&permissions=2147483647)")
message.channel.send(embed);
  };

  module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
  };

  module.exports.help = {
    name: "davet",
    description: "Davet linki",
    usage: "Davet Linki"
  };