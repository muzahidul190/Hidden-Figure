const Discord = require("discord.js");
const me = new Discord.Client({disableEveryone: true});

me.on("ready", async () => {
  console.log(`${me.user.username} is online`);
  me.user.setActivity('Coding Discord Bot', { type: 'WATCHING' })
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'Coding'}`))
  .catch(console.error);
  bot.user.setStatus('idle');
});

bot.login(process.env.BOT_TOKEN);
