const { stripIndents, oneLine } = require('common-tags');
const Discord = require("discord.js");
const bot = new Discord.Client();

let prefix = "?";
let owner = "430011871555223553";

bot.on("ready", () => {
    bot.user.setStatus('online');
    bot.user.setGame(`${prefix}yardım ${prefix}davet ✨ `, "https://www.twitch.tv/scarew0");
    bot.channels.get("441620574943445003").send(`-------------------------------------- \n**Bot başarıyla başlatıldı!** \n**Latency:** ${bot.ping} \n**Zamanlama:** ${new Date().toLocaleString()} \n**Notech bot hazır.**`)
    console.log("Bağlandım!")
});

bot.on("message", message => {
if (message.content.toLowerCase() === prefix + "avatarım") {
message.channel.sendEmbed(new Discord.RichEmbed()
.setDescription(`Avatarınız:`)
.setImage(`${message.author.avatarURL} `)
.setColor("RANDOM"));
   }
});

bot.on('guildCreate', guild => {
	let channel = bot.channels.get("441620137313828864")
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(`Giriş ${guild.name}`)
        .setThumbnail(guild.iconURL)
        .addField("Kurucu", guild.owner)
        .addField("Sunucu ID", guild.id, true)
        .addField("Toplam Kullanıcı", guild.memberCount, true)
        .addField("Toplam Kanal", guild.channels.size, true)
         channel.send(embed);
	});
bot.on('guildDelete', guild => {
	let channel = bot.channels.get("441620137313828864")
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(`Çıkış ${guild.name}`)
        .setThumbnail(guild.iconURL)
        .addField("Kurucu", guild.owner)
        .addField("Sunucu ID", guild.id, true)
        .addField("Toplam Kullanıcı", guild.memberCount, true)
        .addField("Toplam Kanal", guild.channels.size, true)
         channel.send(embed);
	});

bot.on("message", message => {
if (message.content.toLowerCase() === prefix + "sunucuresmi") {
message.channel.sendEmbed(new Discord.RichEmbed()
.setDescription(`Sunucu Resmi:`)
.setImage(`${message.guild.iconURL} `)
.setColor("RANDOM"));
   }
});

bot.on("message", message => {
if (message.content.toLowerCase() === prefix + "parti") {
message.channel.sendEmbed(new Discord.RichEmbed()
.setDescription(`<a:disko:443135556185096212> <a:disko:443135556185096212> <a:disko:443135556185096212> <a:disko:443135556185096212> <a:disko:443135556185096212> <a:disko:443135556185096212> <a:disko:443135556185096212> <a:disko:443135556185096212> <a:disko:443135556185096212>`)
.setColor("RANDOM"));
   }
});

bot.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'gamesunucu') {
    if (message.author.id !== `${owner}`) {
      message.reply('sie');
    } else {
      message.channel.sendMessage(`Başarılı bir şekilde profilime sunucu sayımı koydum.`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      bot.user.setGame(`${bot.guilds.size} Sunucu 👀`, "https://www.twitch.tv/scarew0");
    })
   }
  }
});

bot.on("message", message => {

    if(message.author.bot) return;

    if(!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0].toLowerCase();
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);

    console.log(message.author.username + " " + message.author.id + ": " + message.content.toString())

    if(command === "blok") {
        var letters = args.join("").toLowerCase().split("");
        var i = 0;
        var output = "";
        while(i < letters.length) {
            output = output + ":regional_indicator_" + letters[i] + ":";
            i++
        }
	message.delete()
        message.channel.sendMessage(output);
    }

});

bot.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'gameyeni') {
    if (message.author.id !== `${owner}`) {
      message.reply('sie');
    } else {
      message.channel.sendMessage(`Başarılı bir şekilde profilime yardım ve daveti koydum.`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      bot.user.setGame(`${prefix}yardım @Notech yardım ✨ `, "https://www.twitch.tv/scarew0");
    })
   }
  }
});

bot.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'gameyenilik') {
    if (message.author.id !== `${owner}`) {
      message.reply('sie');
    } else {
      message.channel.sendMessage(`Başarılı bir şekilde profilime yeniliğimi koydum.`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      bot.user.setGame(`Yeni komutlar eklendi! görmek için: ${prefix}yardım ✨ `, "https://www.twitch.tv/scarew0");
    })
   }
  }
});

  bot.on('message', function (message) {
	if (message.content.startsWith(prefix + 'sor')) {
		const replies = ["Evet",
		"Belki",
			"Hayır",
		"Ben nereden bileyim?",
			"Hayır amq hayır",
		"Evet evet aynen ondan"];
			message.replytext = Math.floor((Math.random() * replies.length) + 0);
		return message.reply(replies[message.replytext]);
	  }
});

bot.on('message', msg => {
  if (msg.content.startsWith(prefix + "saat")) {
    msg.channel.send(`${new Date().toLocaleString()}`);
    }
    });

bot.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'gamepls') {
    if (message.author.id !== `${owner}`) {
      message.reply('sie');
    } else {
      message.channel.sendMessage(`Başarılı bir şekilde profilime yalvarma mesajını koydum.`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      bot.user.setGame(`Arkadaşlar gelişmemiz için lütfen botu paylaşır mısınız? `, "https://www.twitch.tv/scarew0");
    })
   }
  }
});

bot.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'gametoplam') {
    if (message.author.id !== `${owner}`) {
      message.reply('sie');
    } else {
      message.channel.sendMessage(`Başarılı bir şekilde profilime bütün sayılarımı koydum.`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      bot.user.setGame(`${prefix}yardım ✨ ${bot.guilds.size} Sunucu ${bot.users.size} Kullanıcı `, "https://www.twitch.tv/scarew0");
    })
   }
  }
});

bot.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'gamekanal') {
    if (message.author.id !== `${owner}`) {
      message.reply('sie');
    } else {
      message.channel.sendMessage(`Başarılı bir şekilde profilime kanal sayımı koydum.`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      bot.user.setGame(`${bot.channels.size} Kanal 📄`, "https://www.twitch.tv/scarew0");
    })
   }
  }
});

bot.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'gamekullanıcı') {
    if (message.author.id !== `${owner}`) {
      message.reply('sie');
    } else {
      message.channel.sendMessage(`Başarılı bir şekilde profilime kullanıcı sayımı koydum.`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      bot.user.setGame(`${bot.users.size} Kullanıcı 💞`, "https://www.twitch.tv/scarew0");
    })
   }
  }
});

bot.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'kurulum') {
    if (message.author.id !== `${owner}`) {
      message.reply('Kurucumun izni olması lazım. Kurucum: <@430011871555223553> ');
    } else {
      message.channel.sendMessage(` :white_check_mark: Gerekli şeyleri başarılı bir şekilde kurdum.`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      message.guild.createChannel('notech-log');
    })
   }
  }
});

bot.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'gamebakım') {
    if (message.author.id !== `${owner}`) {
      message.reply('sie');
    } else {
      message.channel.sendMessage(`Başarılı bir şekilde profilime bakım komudunu koydum.`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      bot.user.setGame(`BAKIMDAYIZ | İletişim: Scarew#0001 `, "https://www.twitch.tv/scarew0");
    })
   }
  }
});

bot.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'gameyardım') {
    if (message.author.id !== `${owner}`) {
      message.reply('sie');
    } else {
      message.channel.sendMessage(`Başarılı bir şekilde profilime yardım komudunu koydum.`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      bot.user.setGame(`${prefix}yardım  ✨ `, "https://www.twitch.tv/scarew0");
    })
   }
  }
});

bot.on('message', async msg => {
  if (msg.content.toLowerCase() === prefix + 'yardım') {
    await msg.react('🇹');
    msg.react('🇲');
  }
});

bot.on('message', async msg => {
  if (msg.content.toLowerCase() === '<@439756873311322112> yardım') {
    await msg.react('🇹');
    msg.react('🇲');
  }
});

bot.on('message', msg => {
  if (msg.content.startsWith(prefix + "yaz")) {
    let mesaj = msg.content.substring(2 + 3);
    msg.delete();
    msg.channel.send(mesaj);
    }
    });

bot.on('message', msg => {
  if (msg.content.startsWith(prefix + "çekiliş")) {
    msg.channel.send(`Çekilişi Kazanan: **${msg.guild.members.random().displayName}**`);
    }
    });

bot.on('message', msg => {
  if (msg.content.startsWith(prefix + "syt")) {
    let mesaj = msg.content.substring(2 + 3);
    msg.delete();
    msg.guild.owner.send(`Şikayet Bildiren: **${msg.author.tag}** \nŞikayet: ` + mesaj);
    }
    });

bot.on('message', message => {
if (message.content.toLowerCase() === prefix + "zekam") {
    var sans = ["11", "15", "20", "24", "28", "31", "39", "45", "49", "54", "58", "63", "67", "77", "73", "84", "80", "83", "96", "94", "99", "Albert Einstein mısın krdşm"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
    .addField(`***___Zekan___***`, `${sonuc}`)
    return message.channel.sendEmbed(embed);
}
});

bot.on('message', message => {
if (message.content.toLowerCase() === prefix + "havadurumu") {
    var sans = ["☁", "⛅", "⛈", "🌤", "🌥", "🌦", "🌧", "🌩", "🌪"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
    .addField(`***___Hava Durumu___***`, `${sonuc}`)
    return message.channel.sendEmbed(embed);
}
});

bot.on('message', message => {
if (message.content.toLowerCase() === prefix + "espriyap") {
    var sans = ["Geçen gün geçmiş günlerimi aradım ama meşguldü.", "Yağmur yağmış kar peynir", "Dünya dönermiş ay da köfte…", "Bu erikson başka erik yok.", "Yıkanan Ton a ne denir Washington", "Hadi oyun oynayalım. Vazgeçtim oymadan oynayalım!", "Geçen gün kamyonu sürdüm Leonardo da Vinci.", "Doğumdan sonra çok kilo aldım. Doğduğumda 2 kiloydum şimdi 62.", "Adam 7 gün boyunca nezle olmuş. Sıkılmış bugün de Petek le olayım demiş.", "Yarasa yararlı bir hayvandır. Yararlı bir hayvan olmasaydı yaramasa derlerdi.", " Benim neden kardeşim yok baba  Seni görünce ikincisine cesaret edemedik.", "Osmanlıda kimseye borç takamıyordun mesela sikke sikke ödüyodun…", "Tatlı yiyip, tatlı konuşuluyorsa bundan sonra mantı yiyip mantıklı konuşacağız.", "Babamı sahura kaldırmayı unuttuk anneme masada ne eksik diyorum tuzluk mu diyor.", "+Okeyde kıza elin nasıl dedim. Ojeli dedi. Ben Şoka girdim. O Migrosa.", "Canım sıkkın kanka sonra gel"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
    .addField(`***___Espri___***`, `${sonuc}`)
    return message.channel.sendEmbed(embed);
}
});

bot.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(' ')[0];
  command = command.slice(prefix.length);

  let args = message.content.split(' ').slice(1);

  if (command === 'topla') {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p+c);
    message.channel.sendMessage(`${total}`);
  }
  if (command === 'çıkar') {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p-c);
    message.channel.sendMessage(`${total}`);
  }
  if (command === 'çarp') {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p*c);
    message.channel.sendMessage(`${total}`);
  }
  if (command === 'böl') {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p/c);
    message.channel.sendMessage(`${total}`);
  }
});

bot.on("message", message => {
    const dmchannel = bot.channels.find("name", "notechdm");
    if (message.channel.type === "dm") {
        if (message.author.id === bot.user.id) return;
        dmchannel.sendMessage("", {embed: {
                color: 000007,
                title: `Yazan: ${message.author.tag} ID: ${message.author.id}`,
                description: `${message.content}`
              }})
    }
    if (message.channel.bot) return;
});

bot.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'avatar 1') {
    if (message.author.id !== `${owner}`) {
      message.reply('sie');
    } else {
      message.channel.sendMessage(`Notech yazısını başarılı bir şekilde profilime koydum.`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      bot.user.setAvatar(`https://cdn.discordapp.com/attachments/438102365460234264/440961261581107210/NUTECH.png`);
    })
   }
  }
});

bot.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'avatar 2') {
    if (message.author.id !== `${owner}`) {
      message.reply('sie');
    } else {
      message.channel.sendMessage(`Glitch efektini başarılı bir şekilde profilime koydum.`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      bot.user.setAvatar(`https://cdn.discordapp.com/attachments/438102365460234264/440878633524133901/notechh.JPG`);
    })
   }
  }
});

bot.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'avatar 3') {
    if (message.author.id !== `${owner}`) {
      message.reply('sie');
    } else {
      message.channel.sendMessage(`Büyük yeşil yazı stilini başarılı bir şekilde profilime koydum.`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      bot.user.setAvatar(`https://cdn.discordapp.com/attachments/438102365460234264/441007116183011330/Adsz.png`);
    })
   }
  }
});

bot.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'durum1') {
    if (message.author.id !== `${owner}`) {
      message.reply('sie');
    } else {
      message.channel.sendMessage(`Başarıyla çevrimiçi moduna geçtim.`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      bot.user.setStatus(`online`);
    })
   }
  }
});

bot.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'durum2') {
    if (message.author.id !== `${owner}`) {
      message.reply('sie');
    } else {
      message.channel.sendMessage(`Başarıyla afk moduna geçtim.`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      bot.user.setStatus(`idle`);
    })
   }
  }
});

bot.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'durum3') {
    if (message.author.id !== `${owner}`) {
      message.reply('sie');
    } else {
      message.channel.sendMessage(`Başarıyla rahatsız etmeyin moduna geçtim.`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      bot.user.setStatus(`dnd`);
    })
   }
  }
});

bot.on('guildMemberAdd', member => {
  let guild = member.guild;
  let joinRole = guild.roles.find('name', '👥 Member');
  member.addRole(joinRole);

  const channel = member.guild.channels.find('name', 'notech-log');
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('0x00cc44')
  .setAuthor(bot.user.username, bot.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle(`<a:parti:443114800843587599> ${member.user.username} Sunucuya katıldı. \n[${member.guild.memberCount} Kişi]`)
  .setTimestamp()
  channel.sendEmbed(embed);
});

bot.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', 'notech-log');
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('0xff1a1a')
  .setAuthor(bot.user.username, bot.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle(`<:kizgin:441544726596943872> ${member.user.username} Sunucudan ayrıldı. \n[${member.guild.memberCount} Kişi]`)
  .setTimestamp()
  channel.sendEmbed(embed); 
});

bot.on('message', msg => {
if (msg.content.toLowerCase() === prefix + "sigara") {
msg.channel.send(':smoking: :cloud::cloud::cloud:')
.then(nmsg => nmsg.edit(':smoking: :cloud::cloud::cloud:'))
.then(nmsg => nmsg.edit(':smoking: :cloud::cloud:'))
.then(nmsg => nmsg.edit(':smoking: :cloud:'))
.then(nmsg => nmsg.edit('**Sigaram bitti** | **Sigara İçmeyiniz.** :no_smoking: **Sigara Sağlığa Zararlıdır**'));
}
});


bot.on('message', msg => {
if (msg.content.toLowerCase() === prefix + "ping") {
msg.channel.send(' :ping_pong: ')
.then(nmsg => nmsg.edit(`[Ping?](https://discord.gg/DZsZsEG) **${Math.round(bot.ping)}ms**`));
}
});

bot.on("message", message => {
    
    if (message.content.toLowerCase() === prefix + "davet") {
        const embed = new Discord.RichEmbed()
    .setDescription('Davet linkim için [üzerime tıkla.](https://discordapp.com/oauth2/authorize?client_id=439756873311322112&permissions=8&scope=bot)')
        return message.channel.sendEmbed(embed);
    }
    
    if (message.content.toLowerCase() === "notech") {
        message.reply("rahat bırak beni krdşm")
    }
    
    if (message.content.toLowerCase() === prefix + 'yenile') {
    if (message.author.id !== "430011871555223553") {
      message.reply('sie');
    } else {
      message.channel.sendMessage(`bak şu an yenileniyorum`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      process.exit(0);
    })
   }
  }
   
        
    if (message.content.toLowerCase() === prefix + "sunucubilgi") {
        const embed = new Discord.RichEmbed()
    .setTimestamp()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField('Sunucu Adı:', message.guild.name)
    .addField('Sunucu ID:', message.guild.id)
    .addField('Ana kanal:', message.guild.defaultChannel)
    .addField('Sunucu Bölgesi:', message.guild.region)
    .addField('Üye sayısı:', message.guild.memberCount)
    .addField('Sahibi:', message.guild.owner + ' (' + message.guild.ownerID + ')')
    .addField('Kanal sayısı:', message.guild.channels.size)
    .addField('Oluşturulma tarihi:', message.guild.createdAt)
            .setColor("RANDOM")

        return message.channel.sendEmbed(embed)
    }
	
    if (message.content.toLowerCase() === prefix + "botbilgi") {
        const embed = new Discord.RichEmbed()
            .addField("Bot Sahibi", `<@${owner}>`, true)
            .addField("Version", "11.3.2", true)
            .addField("Toplam Sunucu Sayısı", bot.guilds.size, true)
            .addField("Toplam Kullanıcı Sayısı", bot.users.size, true)
            .addField("Toplam Kanal Sayısı", bot.channels.size, true)
            .addField("Kitaplık Türü", "discord.py")
            .setColor("RANDOM")
        return message.channel.sendEmbed(embed)
    }
    if (message.content.toLowerCase() === prefix + "yardım") {
        const embed = new Discord.RichEmbed()
  .setTitle("")
  .setDescription('')
  .setColor("RANDOM")
  .addField("Komutlar", `**${prefix}anakomutlar** - Bilgi Komutları \n**${prefix}eğlence** - Eğlence Komutları \n**${prefix}moderasyon** - Moderasyon Komutları \n**${prefix}kişisel** - Kişisel komutlar`)
  .addField("Bağlantılar", "[Davet Linki](https://discordapp.com/oauth2/authorize?client_id=439756873311322112&permissions=8&scope=bot) | [Destek Sunucusu](https://discord.gg/DZsZsEG) | [Web Site](https://notechbot.glitch.me/)")
  .setFooter('Eğer "notech-log" adında bir kanal oluşturursanız bot log durumlarını söyler.')
  .setThumbnail(`${message.author.avatarURL}`)
        
        return message.channel.sendEmbed(embed)
    }
	
    if (message.content.toLowerCase() === "<@439756873311322112> yardım") {
        const embed = new Discord.RichEmbed()
  .setTitle("")
  .setDescription('')
  .setColor("RANDOM")
  .addField("Komutlar", `**${prefix}anakomutlar** - Bilgi Komutları \n**${prefix}eğlence** - Eğlence Komutları \n**${prefix}moderasyon** - Moderasyon Komutları \n**${prefix}kişisel** - Kişisel komutlar`)
  .addField("Bağlantılar", "[Davet Linki](https://discordapp.com/oauth2/authorize?client_id=439756873311322112&permissions=8&scope=bot) | [Destek Sunucusu](https://discord.gg/DZsZsEG) | [Web Site](https://notechbot.glitch.me/)")
  .setFooter('Eğer "notech-log" adında bir kanal oluşturursanız bot log durumlarını söyler.')
  .setThumbnail(`${message.author.avatarURL}`)
        
        return message.channel.sendEmbed(embed)
    }
    
    if (message.content.toLowerCase() === prefix + "ekip") {
        const embed = new Discord.RichEmbed()
  .setTitle("Notech™ Ekip")
  .setDescription('')
  .setColor("RANDOM")
  .addField("🎩 Admin", `<@430011871555223553> <:onay:441544015670804480> \n<@341194704085319683> <:onay:441544015670804480>`)
  .addField("✨ Crazy Lady", `<@441164897175339010> <:onay:441544015670804480>`)
  .addField("🎈 Divilgador", `Şu anda [**Divilgador**](https://discord.gg/DZsZsEG) bulunmamaktadır.`)
  .addField("👁‍🗨 Coadjutor", `Şu anda [**Coadjutor**](https://discord.gg/DZsZsEG) bulunmamaktadır.`)
  .addField("Medya", "[YouTube](https://www.youtube.com/channel/UC-vmxOLvfLPUSzHA_WMIV4g) | [Instagram](https://www.instagram.com/talhanehirx) | [Web Site](https://notechbot.glitch.me/)")
  .setFooter('')
        
        return message.channel.sendEmbed(embed)
    }
	
    if (message.content.toLowerCase() === prefix + "panel") {
        const embed = new Discord.RichEmbed()
  .setTitle("")
  .setDescription('')
  .setColor("RANDOM")
  .addField("Komutlar", `[**Anakomutlar**](https://discord.gg/DZsZsEG) Aktif :white_check_mark: \n[**Eğlence**](https://discord.gg/DZsZsEG) Aktif :white_check_mark: \n[**Kişisel**](https://discord.gg/DZsZsEG) Aktif :white_check_mark: \n[**Moderasyon**](https://discord.gg/DZsZsEG) Disaktif :x:`)
  .setFooter('')
        
        return message.channel.sendEmbed(embed)
    }
    
    if (message.content.toLowerCase() === prefix + "anakomutlar") {
        const embed = new Discord.RichEmbed()
  .setTitle("")
  .setDescription('')
  .setColor("RANDOM")
  .addField("Notech Ana Komutları", `**${prefix}kurulum** - Bot için gerekli dosyaları hazırlar. \n**${prefix}istatistik** - Botun istatistiğini gösterir. \n**${prefix}ping** - Botun pingini ölçer. \n**${prefix}sunucubilgi** - Sunucu hakkkında detaylı bilgi verir. \n**${prefix}sunucuresmi** - Sunucunun resmini gönderir. \n**${prefix}yardım** - Botun bütün komutlarını size gösterir. \n**${prefix}botbilgi** - Bot hakkında bilgi verir. \n**${prefix}davet** - Botun davet linkini atar. \n**${prefix}panel** - Komut panelini gösterir.`)
  .setFooter('')
        
        return message.channel.sendEmbed(embed)
    }
    
    if (message.content.toLowerCase() === prefix + "kişisel") {
        const embed = new Discord.RichEmbed()
  .setTitle("")
  .setDescription('')
  .setColor("RANDOM")
  .addField("Notech Kişisel Komutları", `**${prefix}syt** - Yazdığınız şikayeti sunucunun kurucusuna iletir. \n**${prefix}gir** - Bot sesli kanala girer. \n**${prefix}sor** - Sorduğunuz soruya kısa cevaplar verir.  \n**${prefix}blok** - Yazdığınız mesajı blok olarak gönderir. \n**${prefix}yaz** - Yazdığınız mesajı bota yazdırır. \n**${prefix}çekiliş** - Sunucudan rastgele birisini seçer.`)
  .setFooter('')
        
        return message.channel.sendEmbed(embed)
    }
    
    if (message.content.toLowerCase() === prefix + "eğlence") {
        const embed = new Discord.RichEmbed()
  .setTitle("")
  .setDescription('')
  .setColor("RANDOM")
  .addField("Notech Eğlence Komutları", `**${prefix}havadurumu** - Bot havadurumunu tahmin eder. \n**${prefix}espriyap** - Bot espri yapar. \n**${prefix}zekam** - Zeka puanınızı gösterir. \n**${prefix}matematik** - Matematik işlemi yapar. \n**${prefix}sigara** - Bot sigara içer. \n**${prefix}avatarım** - Avatarınızı gönderir. \n**${prefix}kurabiye** - Size kurabiye verir.`)
  .setFooter('')
        
        return message.channel.sendEmbed(embed)
    }
    
    if (message.content.toLowerCase() === prefix + "moderasyon") {
        const embed = new Discord.RichEmbed()
  .setTitle("")
  .setDescription('')
  .setColor("RANDOM")
  .addField("Notech Moderasyon Komutları", `**${prefix}kick** - Etiketlenen kişiyi sunucudan atar. [BAKIM] \n**${prefix}mute** - Etiketlenen kişiyi susturur. [BAKIM] \n**${prefix}ban** - Etiketlenen kişiyi sunucudan banlar. [BAKIM] \n**${prefix}temizle** - Bot belirttiğiniz kadar mesaj siler. [BAKIM] \n**${prefix}yenile** - Botu yeniden başlatır. \n**${prefix}ekip** - Botun ekibini gösterir.`)
  .setFooter('')
        
        return message.channel.sendEmbed(embed)
    }
    
    if (message.content.toLowerCase() === prefix + "matematik") {
        const embed = new Discord.RichEmbed()
  .setTitle("")
  .setDescription('')
  .setColor("RANDOM")
  .addField("Notech Matematik Komutları", `**${prefix}topla** - Yazdığınız iki sayıyı toplar. \n**${prefix}çıkar** - Yazdığınız iki sayıyı çıkarır. \n**${prefix}çarp** - Yazdığınız iki sayıyı çarpar. \n**${prefix}böl** - Yazdığınız iki sayıyı böler.`)
  .setFooter(`Kullanım: ${prefix}topla 1 1`)
        
        return message.channel.sendEmbed(embed)
    }

    if (message.content === prefix + "kurabiye") {
        message.channel.sendMessage(`Canım gel buraya sana kurabiye vereceğim! <@${message.author.id}>`)
        message.react("🍪")
    }
    
    if (message.content.toLowerCase() === prefix + "istatistik") {
        message.channel.sendMessage(stripIndents`
\`\`\`fix
         Anlık İstatistik

- ` + bot.guilds.size + ` Sunucu 👀

-`+ bot.channels.size + ` Kanal 📄

-`+ bot.users.size + ` Kullanıcı 💞
\`\`\` `)
   }
});

bot.on("message", message => {
  const args = message.content.split(" ").slice(1);

  if (message.content.startsWith(prefix + "eval")) {
    if(message.author.id !== "430011871555223553") return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
});

const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

bot.login(process.env.BOT_TOKEN);

