const Discord = require('discord.js');
const client  = new Discord.Client();

var prefix = ''
client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith(prefix + 'ping'))
      message.channel.send('pong');
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith(prefix + 'im'))
      message.channel.send('I am about to blow my fucking brains out');
});

client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith(prefix + 'fuck'))
      message.channel.send('no u');
});

client.login('NDM1MjI5MDAzMzQzOTg2Njg4.DbWAuw.8-UsVoiEvlZrwiiopyTVMrFUt_8')
