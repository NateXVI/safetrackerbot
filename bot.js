class Bot {
    constructor() {
        const api = require('./SafeMoonAPI');
        this.api = new api();
        this.fs = require('fs');
    }
    help(message, config) {
        message.channel.send(`My prefix is **${config.prefix}**\n-Use **~set** to set your safemoon balance\n-Use **~price** to see how much your safemoon is worth\n-Use **~rank** to find the best place to sell`);
    }
    async price(message, quantity) {
        let data = await this.api.getOne();
        console.log(data);
        if (quantity) {
            message.channel.send(`Your **${this.comma(quantity)}** safemoon is worth **${this.comma(data.usdLast * quantity)}**\nSource: ${data.exchangeName} at ${this.comma(data.usdLast)}`);
        } else {
            message.channel.send('Gotta know how much you have first. Use the **set** command followed by the number to lemme know.')
        }
    }
    async set(message, users, id, quantity){
        try {
            quantity = this.noComma(quantity);
            if (!isNaN(Number(quantity))) {
                users[id] = quantity;
                this.fs.writeFile('./users.json', JSON.stringify(users), ()=>{});
                message.channel.send('Quantity set');
            } else {
                message.channel.send('Invalid input');
            }
        } catch (error) {
            console.log(error)
        }
        }
    async rank(message) {
        let data = await this.api.getList();
        data.sort((a,b) => b.usdLast - a.usdLast);
        let output = '';
        for (let i in data) {
            output += `${(Number(i)+1)}. ${data[i].exchangeName} at ${data[i].usdLast} ${data[i].url}\n`
        }
        message.channel.send(output);
    }
    comma(x) {    
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
    noComma(x) {
        return x.replace(/,/g, '');
    }
}

module.exports = Bot;