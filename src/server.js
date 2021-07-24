require('dotenv').config();

// import fs
const fs = require('fs');
const axios = require('axios');

// import config file and users balance file
// const config = JSON.parse(fs.readFileSync('config.json')) || { prefix: '~' };
const users = JSON.parse(fs.readFileSync('users.json'));

// import and make new instance of the Safeoon API
const Safe = require('./SafeMoonAPI');
const safe = new Safe();

// get token from config
const token = process.env.TOKEN;
const prefix = process.env.PREFIX;
// bot message handler
const Bot = require('./bot');
const bot = new Bot();

// make new discord bot client
const { Client } = require('discord.js');
const client = new Client();

// when bot connects
client.on('ready', () => {
	console.log(`${client.user.username} connected`);
	bot.setStatus(client);
	setInterval(
		function (client) {
			bot.setStatus(client);
		},
		60000,
		client
	);
});

// when the bot recieves a message
client.on('message', (message) => {
	// get the content of the message
	let text = message.content;

	// if the first character in the message is the prefix
	if (text.charAt(0) == prefix) {
		text = text.slice(prefix.length);
		text = text.split(' ');

		// convert text to lowercase to ignore case
		switch (text[0].toLowerCase()) {
			// if help send help message
			case 'help':
			case 'h':
				bot.help(message, config);
				break;
			// if price send back the price and how much the user's value
			case 'price':
			case 'p':
				console.log(users[message.author.id]);
				bot.price(message, users[message.author.id]);
				break;
			// if set, set the user's value
			case 'set':
			case 's':
				bot.set(message, users, message.author.id, text[1]);
				break;
			// if rank rank the different exchanges that are available
			case 'rank':
			case 'r':
				bot.rank(message);
				break;
		}
	}
});

// login to the discord bot
client.login(token);
