const Discord = require('discord.js');
const client = new Discord.Client();
let names = ["Axel", "Sean"]


client.login('Nzc1ODAxOTU1NDAyNTE0NDUz.X6rn3w.wv93ikOl - QILC6mHlaEzN1mRw4Y');

client.on('message', async message => {

    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();

      if (message.content.includes('Grävmaskin')) {
      const dispatcher = connection.play(__dirname+ '/Gravmaskin.m4a');
      }
      names.forEach(name => {
          if (message.content.includes(name)) {
            const dispatcher = connection.play(__dirname + '/Waaa.m4a');
        }
    })
    if (message.content.includes("leave")) {
      connection.disconnect()
    }
}});

client.on('ready', discordOn);

function discordOn(){
    console.log("yes man");
}
 
