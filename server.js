require('dotenv').config();
const fs = require('fs');
const axios = require('axios');

const config = JSON.parse(fs.readFileSync('config.json')) || {prefix:"~"};
const users = JSON.parse(fs.readFileSync('users.json'));

const token = config.token;
const { Client } = require('discord.js');
const client = new Client();

client.on('ready', ()=> {
    console.log(`${client.user.username} connected`);
    setStatus();
});

client.on('message', async (message) => {
    if (message.author.bot === true || message.content == "") return;
    let text = message.content;
    const isCommand = text.startsWith(config.prefix);

    if (isCommand) {
        text = text.slice(config.prefix.length);
        text = text.split(' ');
        switch(text[0].toLowerCase()) {
            case 'price':
            case 'p':
                const p = await getPrice();
                message.channel.send(p)
                break;
            case 'get':
            case 'g':
                const v = await getValue(message.author.id);
                // console.log(v);
                if (v) {
                    message.channel.send(`Your **${numberWithCommas(users[message.author.id])}** safemoon is worth **$${numberWithCommas(v)}!**`)
                } else {
                    message.channel.send('tell me how much safemoon you have by using the **set** command')
                }
                break;
            case 'set':
            case 's':
                const isGood = checkString(text[1]);
                if (isGood && text[1]) {
                    setQuantity(message.author.id, text[1]);
                    message.channel.send('Balance set')
                } else {
                    if (text[1] == undefined) {
                        message.channel.send('Enter a number after the command')
                    } else {
                        message.channel.send('Invalid input');
                    }
                }
                break;
            case 'help':
                message.channel.send(`My prefix is **${config.prefix}**\n-Use **~price** to see the current pice of safemoon\n-Use **~set** to set your safecoin balance\n-Use **~get** to see how much your safemoon is worth`)
        }
    }
});

client.login(token);

async function getPrice() {
    const req = await axios.get('https://api.cryptorank.io/v0/coins/safemoon/tickers');
    return req.data.data[0].usdLast;
}

async function setStatus() {
    client.user.setPresence({activity: {name: `$${await getPrice()}`}});
    setTimeout(setStatus, 1 * 60000)
}

async function getValue(id) {
    if (!!!users[id]) return false;
    const p = await getPrice();
    return p * Number(users[id].replace(/\,/g, ''));
}

function setQuantity(id, quantity) {
    // console.log(id, quantity);
    users[id] = quantity;
    // console.log(users)

    fs.writeFile('./users.json', JSON.stringify(users), ()=>{});
}

function checkString(s) {
    if (!s) return false
    s = s.replace(/\,/g, '');
    if (isNaN(s) && s) return false;
    else return true;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}