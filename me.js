const Discord = require("discord.js");
const me = new Discord.Client({disableEveryone: true});

me.on("ready", async () => {
  console.log(`${me.user.username} is online`);
  me.user.setActivity('Coding Discord Bot on github', { type: 'WATCHING' })
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'Coding'}`))
  .catch(console.error);
  me.user.setStatus('dnd');
});

me.login(process.env.BOT_TOKEN);
