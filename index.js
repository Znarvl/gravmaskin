const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
let names = ["Axel Boström", "Sean"]

client.login(config.token);

client.on('message', async message => {
  if (!message.guild) return;


    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();

      if (message.content.includes('grävmaskin')) {
      const dispatcher = connection.play(__dirname+ '/Gravmaskin.m4a');
      }
      
      if (message.content.includes("Axel Boström")|| message.content.includes("Sean")) {
        const dispatcher = connection.play(__dirname + '/Waaa.m4a');
      }
      
    } 
      else {
      message.reply('Grävmaskin hittar inget häng');
      }

});

client.on('ready', discordOn);

function discordOn(){
    console.log("yes");
}

