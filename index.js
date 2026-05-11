const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  if (message.content === "ping") {
    message.reply("pong!");
  }

  if (message.content === "hello") {
    message.reply("Hello! ");
  }
});

// 🔥 重要：TOKEN 從 Railway 環境變數來
client.login(process.env.MTUwMzE4MzU3MTc3NzQ5MTExNQ.Gp654v.zvcEK_sXYDypGsHnVkPIyi0dgVxWVWt-YepJNA);
