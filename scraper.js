const cheerio = require('cheerio')

const request  = require('request')

let price  =  null;
function scrapeprice(){
    request('https://www.marketwatch.com/investing/stock/aapl', (error, Response, html)=>{
        if(!error && Response.statusCode ==200){
            const $ = cheerio.load(html)
            price = $('.intraday__price ').children('bg-quote').text()
            console.log(price)
        }
    })
}

scrapeprice()