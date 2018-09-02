const Discord = require("discord.js");
const me = new Discord.Client({disableEveryone: true});

me.on("ready", async () => {
  console.log(`${me.user.username} is online`);
  me.user.setActivity('BOOKS 📖', { type: 'WATCHING' })
  .then(presence => console.log(`Okay`))
  .catch(console.error);
  me.user.setStatus('online');
});
me.on("message", async msg => {
  if(msg === `~HF`) return message.channel.send(`Here I'm....`);
});

me.login(process.env.BOT_TOKEN);
