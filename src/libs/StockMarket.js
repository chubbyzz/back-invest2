const axios = require('axios');

module.exports = {
    async request(action, params) {
        const key = 'XMGJW324QR4KXWQG';
        params = Object.keys(params).map((key) => { return "&"+ key + "=" + params[key]}).join("");
        const url = `https://www.alphavantage.co/query?function=${action}${params}&apikey=${key}`;
        console.log(url);
        const response = await axios.get(url);
        return response.data;
    },
    async search (code) {
        const action = 'TIME_SERIES_INTRADAY'
        code = code + ".SAO";
        const response = await this.request(action, {symbol: code, interval: "5min", compact: 'compact'});
        return this.format(response);
    },
    format (response){
        if(response['Error Message']) return null;
        return {
            name: response['Meta Data']['2. Symbol'].replace('.SAO', ''),
            price: parseFloat(Object.entries(response['Time Series (5min)'])[0][1]['1. open'])
        };
    }
}