// import fs 
const fs = require('fs');
const axios = require('axios');

// import config file and users balance file
const config = JSON.parse(fs.readFileSync('config.json')) || {prefix:"~"};
const users = JSON.parse(fs.readFileSync('users.json'));

// import and make new instance of the Safeoon API
const Safe = require('./SafeMoonAPI');
const safe = new Safe();

// get token from config
const token = config.token;

// bot message handler
const Bot = require('./bot');
const bot = new Bot();

// make new discord bot client
const { Client } = require('discord.js');
const client = new Client();

// when bot connects
client.on('ready', () => {
    console.log(`${client.user.username} connected`)
    bot.setStatus(client);
});

client.on('message', (message) => {
    let text = message.content;

    if (text.charAt(0) == config.prefix) {
        text = text.slice(config.prefix.length);
        text = text.split(' ');

        switch(text[0].toLowerCase()) {
            case 'help':
            case 'h':
                bot.help(message, config);
                break;
            case 'price':
            case 'p':
                console.log(users[message.author.id])
                bot.price(message, users[message.author.id]);
                break;
            case 'set':
            case 's':
                bot.set(message, users, message.author.id, text[1]);
                break;
            case 'rank':
            case 'r':
                bot.rank(message)
                break;
        }
    }
});

client.login(token);

// safe.getList().then((val) => console.log(val));

