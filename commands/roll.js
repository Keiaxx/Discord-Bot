module.exports = {
    name: 'roll',
    description: 'roll dnd',
    execute(message, args, newEmbed) {
        const Discord = require("discord.js")
        // var b = Math.floor(Math.random() * 8)
        // message.channel.send(b);
        if (args[0] == `d20`)
        {
          var total = 0
          if (args.length > 1)
          {
            for (var i = 0; i < args[1]; i++)
            {
              total += (Math.floor(Math.random() * 19)+1)
            }
          }
          else
          {
            total += (Math.floor(Math.random() * 19)+1)
          }
          var d20 = total
          const embed = new Discord.RichEmbed()
          .setColor(0x34CD32)
          // .setImage("https://leinad.pw/images/die.jpg")
          .addField("Rolling a d20..", d20)
          .setTimestamp(new Date())
          message.channel.send({embed});
          console.log(d20)
        }
        if (args[0] == `d8`)
        {
          var total = 0
          if (args.length > 1)
          {
            for (var i = 0; i < args[1]; i++)
            {
              total += (Math.floor(Math.random() * 7)+1)
            }
          }
          else
          {
            total += (Math.floor(Math.random() * 7)+1)
          }
          var d8 = total
          const embed = new Discord.RichEmbed()
          .setColor(0x34CD32)
          .addField("Rolling a d8..", d8)
          .setTimestamp(new Date())
          message.channel.send({embed});
          console.log(d8)
        }
        if (args[0] == `d12`)
        {
          var total = 0
          if (args.length > 1)
          {
            for (var i = 0; i < args[1]; i++)
            {
              total += (Math.floor(Math.random() * 11)+1)
            }
          }
          else
          {
            total += (Math.floor(Math.random() * 11)+1)
          }
          var d12 = total
          const embed = new Discord.RichEmbed()
          .setColor(0x34CD32)
          .addField("Rolling a d12..", d12)
          .setTimestamp(new Date())
          message.channel.send({embed});
          console.log(d12)
        }
        if (args[0] == `d6`)
        {
          var total = 0
          if (args.length > 1)
          {
            for (var i = 0; i < args[1]; i++)
            {
              total += (Math.floor(Math.random() * 5)+1)
            }
          }
          else
          {
            total += (Math.floor(Math.random() * 5)+1)
          }
          var d6 = total
          const embed = new Discord.RichEmbed()
          .setColor(0x34CD32)
          .addField("Rolling a d6..", d6)
          .setTimestamp(new Date())
          message.channel.send({embed});
          console.log(d6)
        }
        if (args[0] == `d4`)
        {
          var total = 0
          if (args.length > 1)
          {
            for (var i = 0; i < args[1]; i++)
            {
              total += (Math.floor(Math.random() * 3)+1)
            }
          }
          else
          {
            total += (Math.floor(Math.random() * 3)+1)
          }
          var d4 = total
          const embed = new Discord.RichEmbed()
          .setColor(0x34CD32)
          .addField("Rolling a d4", d4)
          .setTimestamp(new Date())
          message.channel.send({embed});
          console.log(d4)
        }
        if (args[0] == `d10`)
        {
          var total = 0
          if (args.length > 1)
          {
            for (var i = 0; i < args[1]; i++)
            {
              total += (Math.floor(Math.random() * 9)+1)
            }
          }
          else
          {
            total += (Math.floor(Math.random() * 9)+1)
          }
          var d10 = total
          const embed = new Discord.RichEmbed()
          .setColor(0x34CD32)
          .addField("Rolling a d10", d10)
          .setTimestamp(new Date())
          message.channel.send({embed});
          console.log(d10)
        }
        if(args.length === 0)
        {
          message.channel.send("Type !roll {dice type} [# rolls]")
        }
    },
};
