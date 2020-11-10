const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.login(config.token);

client.on('message', async message => {
  if (!message.guild) return;

  if (message.content === 'grävmaskin') {

    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      const dispatcher = connection.play(__dirname+ '/Gravmaskin.m4a');
    } else {
      message.reply('Grävmaskin hittar inget häng');
    }
  }
});

client.on('ready', discordOn);

function discordOn(){
    console.log("yes");
}

