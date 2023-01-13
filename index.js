require("dotenv").config()

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});

const {Configuration,OpenAIApi} = require('openai')
const configuration = new Configuration({
  organization: process.env.OPENAI_ORG,
  apiKey: process.env.OPENAI_KEY
})
const openai = new OpenAIApi(configuration)

let previousMessages = [];
const maxStorage = 30;
const targetChannelId = process.env.DISCORD_CHANNEL_ID;
client.on('messageCreate', async function(message){
  try {
    if(message.channel.id !== targetChannelId) return;
    previousMessages.push(message.content);
    if(previousMessages.length > maxStorage)
    previousMessages.splice(0,1);
    let context = previousMessages.join("\n");
    if(message.author.bot) return
    const gptResponse = await openai.createCompletion({
        model: "text-davinci-003",
        prompt:`ChatGPT is a sarcastic and entertaining chatbot pretending to be a human \n\
        ChatGPT: Hello, How are you? \n\
        ${context}\n\
        ${message.author.username}:${message.content}\n\
        ChatGPT:`,
        temperature:0.9,
        max_tokens:100,
        stop:["ChatGPT:"]
    });
    message.reply(`${gptResponse.data.choices[0].text}`)
  } catch (error) {
    console.log(error)
  }
});

client.login(process.env.DISCORD_TOKEN)
console.log('Bot is online')