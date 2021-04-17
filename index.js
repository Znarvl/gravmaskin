const Discord = require('discord.js');
const client = new Discord.Client();
let names = ["Axel Boström", "Sean"]

client.login('Nzc1ODAxOTU1NDAyNTE0NDUz.X6rn3w.wv93ikOl - QILC6mHlaEzN1mRw4Y');

client.on('message', async message => {
  if (!message.guild) return;

    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();

      if (message.content.includes('Grävmaskin')) {
      const dispatcher = connection.play(__dirname+ '/Gravmaskin.m4a');
      }
      
      if (message.content.includes("Axel Boström")|| message.content.includes("Sean")) {
        const dispatcher = connection.play(__dirname + '/Waaa.m4a');
      }
      
    } 
});

client.on('ready', discordOn);

function discordOn(){
    console.log("yes");
}

