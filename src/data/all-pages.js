import { library } from '@fortawesome/fontawesome-svg-core'
import { faGlobe, faCreditCard, faDice, faGlasses, faCommentAlt, faMoneyBillWave, faNewspaper, faWrench, faChartLine, faStore, faRss, faTools, faVoteYea } from '@fortawesome/free-solid-svg-icons'
library.add(faGlobe, faCreditCard, faDice, faGlasses, faCommentAlt, faMoneyBillWave, faNewspaper, faWrench, faChartLine, faStore, faRss, faTools, faVoteYea)

const categories =  [
    {
        name: 'UTILS',
        icon: 'globe',
        color: '#3934A1',
        pages: [
            {
                name: 'Name',
                url: 'https://google.com',
                description: 'Google.',
                icon: './images/pages/heart.png'
            }
        ],
    },
    {
        name: 'DAPPS',
        icon: 'money-bill-wave',
        color: '#3934A1',
        pages: [
            {
                name: 'Name',
                url: 'https://google.com',
                description: 'Google.',
                icon: './images/pages/heart.png'
            }
        ],
    },
    {
        name: 'TRADING',
        icon: 'chart-line',
        color: '#ACA9E3',
        pages: [
            {
                name: '1inch',
                url: 'https://1inch.exchange/',
                description: '1inch is a DEX aggregator with the best DEX prices and single point of entry for DeFi.',
                icon: './images/dapps/1inch.png'
            },
            {
                name: 'CoinGecko',
                url: 'https://www.coingecko.com/en/coins/',
                description: 'Find useful information, including price history, trends, and rank on CoinGecko.',
                icon: './images/dapps/coingecko.png'
            },
            {
                name: 'CoinMarketCap',
                url: 'https://coinmarketcap.com/currencies/',
                description: 'Find useful information, including market rank, price history, and trends on CMC.',
                icon: './images/dapps/coinmarketcap.png'
            },
            {
                name: 'DEX Tools',
                url: 'https://www.dextools.io/app/uniswap/pair-explorer/',
                description: 'If you are a Uniswap user, and want to develop better trading strategies, DEXTools is for you.',
                icon: './images/dapps/dextools.png'
            },
            {
                name: 'Gate.io',
                url: 'https://www.gate.io/en/trade/',
                description: 'Ranked above Binance US in the top 5 trusted exchnges on CoinGecko, Gate is a centralized exchange, avoid gas fees trading on this platform.',
                icon: './images/dapps/gateio.png'
            },
            {
                name: 'Swap on Uniswap',
                url: 'https://app.uniswap.org/#/swap',
                description: 'Swap ETH (or any other ERC-20 token) on Uniswap, which is the number one (by daily volume) decentralized exchange.',
                icon: './images/dapps/uniswap-techno.png'
            },
            {
                name: 'Price Room',
                url: 'https://t.me/unipriceoracle',
                description: 'Visit the historical price and liquidity for tokens on Uniswap, the decentralized exchange.',
                icon: './images/dapps/telegram.png'
            },
            {                
                name: 'Uniswap.info',
                url: 'https://info.uniswap.org/',
                description: 'Visit the historical price and liquidity for tokens on Uniswap, the decentralized exchange.',
                icon: './images/dapps/uniswap-info.png'
            }
        ],   
    },
    {
        name: 'CONTRACTS',
        icon: 'glasses',
        color: '#ACA9E3',
        pages: [
            {
                name: 'Name',
                url: 'https://google.com',
                description: 'Google.',
                icon: './images/icons/heart.png'
            }

        ],   
    },
    {
        name: 'COMMUNITY',
        icon: 'comment-alt',
        color: '#000000',
        pages: [
            {
                name: 'Name',
                url: 'https://google.com',
                description: 'Google.',
                icon: './images/icons/heart.png'
            }
        ],
    },
    {
        name: 'BUY',
        icon: 'credit-card',
        color: '#000000',
        pages: [
            {
                name: 'Name',
                url: 'https://google.com',
                description: 'Google.',
                icon: './images/icons/heart.png'
            }
        ]
    }
];

export default categories;
