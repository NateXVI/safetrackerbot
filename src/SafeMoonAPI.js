const { default: axios } = require('axios');

class SafeAPI {
	url = 'https://api.cryptorank.io/v0/coins/safemoon-v2/tickers';
	async getList() {
		const res = await axios('https://api.cryptorank.io/v0/coins/safemoon-v2/tickers');
		return res.data.data;
	}
	async getOne() {
		let res = await axios('https://api.cryptorank.io/v0/coins/safemoon-v2/tickers');
		res = res.data.data;
		const i = res.findIndex((v) => v.exchangeName == 'Pancake Swap');
		return res[i] || res[0];
	}
}

module.exports = SafeAPI;
