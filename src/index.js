const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const Token = process.env.TOKEN;

const bot = new TelegramBot(Token, {polling: true});

// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;

//     bot.sendMessage(chatId, 'Received your message');
//     console.log(message);
// });


bot.on('message', (message) => {
    console.log(message);

})