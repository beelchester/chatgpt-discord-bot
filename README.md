
# ChatGPT Discord Bot

A discord bot based on text-davinci-003 model from OpenAI API


## Installation

1. Clone the repository
```bash
git clone https://github.com/sahilyeole/chatgpt-discord-bot
```
2. cd into the **chatgpt-discord-bot** directory
3. Make sure you have  the latest version of Node installed and run the following command
```bash
  npm install
```
4. Create a new application on Discord Developer Portal and check message content intent in the Bot section
5. Add a custom Authorization Link in OAuth2 section
```
https://discord.com/oauth2/authorize?scope=bot&permissions=8&client_id=<YOUR_CLIENT_ID>
```
6. Invite the bot to the server using the link and grant it Administrator privilege
7. Create .env file and add your credentials for the following variables from OpenAI API and Discord Developer Portal

```
DISCORD_TOKEN = 
DISCORD_CHANNEL_ID = 
OPENAI_ORG =  
OPENAI_KEY =
```

*Note:*

*- You can get the channel id by right-clicking the channel name on discord*

*- OPENAI_ORG is for the organization key*

8. Run the bot
```
node index.js
```
