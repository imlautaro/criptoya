interface BaseExchange {
	volume?: number
}

// ArgenBTC
export interface ArgenbtcExchange extends BaseExchange {
	exchange: 'argenbtc'
	coin: 'BTC' | 'DAI' | 'ETH' | 'USDT'
	fiat: 'ARS'
}

// Banexcoin
export interface BanexcoinExchange extends BaseExchange {
	exchange: 'banexcoin'
	coin: 'BTC' | 'USDC'
	fiat: 'USD' | 'PEN'
}

// Belo
export interface BeloExchange extends BaseExchange {
	exchange: 'belo'
	coin: 'BTC' | 'DAI' | 'ETH' | 'USDC' | 'USDT'
	fiat: 'ARS'
}

// Binance
export interface BinanceExchange extends BaseExchange {
	exchange: 'binance'
	coin: 'BNB' | 'BTC' | 'ETH' | 'USDT'
	fiat: 'ARS' | 'BRL'
}

// Binance P2P
export interface BinanceP2PExchange extends BaseExchange {
	exchange: 'binancep2p'
	coin:
		| 'ADA'
		| 'BNB'
		| 'BTC'
		| 'DAI'
		| 'DOGE'
		| 'ETH'
		| 'MATIC'
		| 'SLP'
		| 'USDT'
		| 'XRP'
	fiat:
		| 'BOB'
		| 'MXN'
		| 'VES'
		| 'CLP'
		| 'PEN'
		| 'ARS'
		| 'COP'
		| 'UYU'
		| 'BRL'
		| 'USD'
}

// BingX P2P
export interface BingxP2PExchange extends BaseExchange {
	exchange: 'bingxp2p'
	coin: 'USDT'
	fiat: 'CLP' | 'PEN' | 'ARS' | 'COP' | 'VES' | 'BRL' | 'MXN'
}

// BitcoinToYou
export interface BitcointoyouExchange extends BaseExchange {
	exchange: 'bitcointoyou'
	coin: 'BTC'
	fiat: 'BRL'
}

// BitcoinTrade
export interface BitcointradeExchange extends BaseExchange {
	exchange: 'bitcointrade'
	coin:
		| 'ADA'
		| 'AVAX'
		| 'AXS'
		| 'BAT'
		| 'BCH'
		| 'BNB'
		| 'BTC'
		| 'CAKE'
		| 'CHZ'
		| 'DAI'
		| 'DOT'
		| 'EOS'
		| 'ETH'
		| 'FTM'
		| 'LINK'
		| 'LTC'
		| 'MANA'
		| 'MATIC'
		| 'PAXG'
		| 'SAND'
		| 'SHIB'
		| 'SLP'
		| 'SOL'
		| 'UNI'
		| 'USDC'
		| 'USDT'
		| 'XRP'
	fiat: 'BRL'
}

// Bitget P2P
export interface BitgetP2PExchange extends BaseExchange {
	exchange: 'bitgetp2p'
	coin: 'BTC' | 'DAI' | 'ETH' | 'USDC' | 'USDT' | 'WLD'
	fiat: 'ARS' | 'COP' | 'BRL' | 'PEN' | 'CLP' | 'VES' | 'MXN' | 'UYU'
}

// Bitmonedero
export interface BitmonederoExchange extends BaseExchange {
	exchange: 'bitmonedero'
	coin: 'BTC' | 'USDT'
	fiat: 'ARS'
}

// Bitso
export interface BitsoExchange extends BaseExchange {
	exchange: 'bitso'
	coin:
		| 'AAVE'
		| 'ADA'
		| 'ALGO'
		| 'AXS'
		| 'BAT'
		| 'BCH'
		| 'CHZ'
		| 'DAI'
		| 'DOGE'
		| 'DOT'
		| 'FTM'
		| 'LINK'
		| 'LTC'
		| 'MANA'
		| 'MATIC'
		| 'PAXG'
		| 'SAND'
		| 'SHIB'
		| 'SOL'
		| 'TRX'
		| 'UNI'
		| 'XRP'
	fiat: 'COP' | 'ARS' | 'MXN' | 'BRL'
}

// Bitso Alpha
export interface BitsoalphaExchange extends BaseExchange {
	exchange: 'bitsoalpha'
	coin:
		| 'ADA'
		| 'BAT'
		| 'BCH'
		| 'BTC'
		| 'DAI'
		| 'DOGE'
		| 'DOT'
		| 'ETH'
		| 'LINK'
		| 'LTC'
		| 'MANA'
		| 'MATIC'
		| 'SHIB'
		| 'SOL'
		| 'TRX'
		| 'USDC'
		| 'USDT'
		| 'XRP'
	fiat: 'BRL' | 'MXN' | 'ARS' | 'USD' | 'COP'
}

// Brasil Bitcoin
export interface BrasilbitcoinExchange extends BaseExchange {
	exchange: 'brasilbitcoin'
	coin:
		| 'AAVE'
		| 'ADA'
		| 'AXS'
		| 'BAT'
		| 'BCH'
		| 'BTC'
		| 'CHZ'
		| 'DOGE'
		| 'ETH'
		| 'FTM'
		| 'LINK'
		| 'LTC'
		| 'MANA'
		| 'MATIC'
		| 'PAXG'
		| 'SAND'
		| 'SHIB'
		| 'SOL'
		| 'UNI'
		| 'USDT'
		| 'XRP'
	fiat: 'BRL'
}

// Buda
export interface BudaExchange extends BaseExchange {
	exchange: 'buda'
	coin: 'BCH' | 'BTC' | 'ETH' | 'LTC' | 'USDC'
	fiat: 'CLP' | 'COP' | 'PEN'
}

// Buenbit
export interface BuenbitExchange extends BaseExchange {
	exchange: 'buenbit'
	coin:
		| 'ADA'
		| 'AVAX'
		| 'AXS'
		| 'BNB'
		| 'BTC'
		| 'DAI'
		| 'DOT'
		| 'ETH'
		| 'FTM'
		| 'MATIC'
		| 'NUARS'
		| 'NUPEN'
		| 'USDC'
		| 'USDT'
		| 'UXD'
	fiat: 'ARS' | 'PEN' | 'USD'
}

// Bybit
export interface BybitExchange extends BaseExchange {
	exchange: 'bybit'
	coin:
		| 'ADA'
		| 'AVAX'
		| 'BTC'
		| 'DAI'
		| 'DOGE'
		| 'DOT'
		| 'EOS'
		| 'ETH'
		| 'LINK'
		| 'MATIC'
		| 'TRX'
		| 'USDC'
		| 'USDT'
		| 'XRP'
	fiat: 'ARS' | 'BRL' | 'MXN'
}

// Bybit P2P
export interface BybitP2PExchange extends BaseExchange {
	exchange: 'bybitp2p'
	coin: 'BTC' | 'ETH' | 'USDC' | 'USDT'
	fiat: 'COP' | 'VES' | 'BRL' | 'MXN' | 'CLP' | 'PEN' | 'ARS'
}

// Cocos Crypto
export interface CocoscryptoExchange extends BaseExchange {
	exchange: 'cocoscrypto'
	coin: 'BTC' | 'DAI' | 'ETH' | 'LINK' | 'MATIC' | 'USDC' | 'USDT'
	fiat: 'ARS'
}

// CryptoMarket
export interface CryptomktExchange extends BaseExchange {
	exchange: 'cryptomkt'
	coin:
		| 'AAVE'
		| 'ADA'
		| 'ALGO'
		| 'AVAX'
		| 'BCH'
		| 'BNB'
		| 'BTC'
		| 'DAI'
		| 'DOT'
		| 'EOS'
		| 'ETH'
		| 'LINK'
		| 'LTC'
		| 'MATIC'
		| 'PAXG'
		| 'SHIB'
		| 'SOL'
		| 'TRX'
		| 'UNI'
		| 'USDC'
		| 'USDT'
		| 'XLM'
		| 'XRP'
	fiat: 'BRL' | 'PEN' | 'CLP' | 'ARS' | 'COP'
}

// Decrypto
export interface DecryptoExchange extends BaseExchange {
	exchange: 'decrypto'
	coin: 'BTC' | 'DAI' | 'USDT'
	fiat: 'USD' | 'ARS' | 'PEN'
}

// El Dorado P2P
export interface EldoradoP2PExchange extends BaseExchange {
	exchange: 'eldoradop2p'
	coin: 'BTC' | 'USDC' | 'USDT'
	fiat: 'CLP' | 'VES' | 'COP' | 'ARS' | 'PEN'
}

// Eluter
export interface EluterExchange extends BaseExchange {
	exchange: 'eluter'
	coin: 'BTC' | 'CHZ' | 'DOGE' | 'DOT' | 'ETH' | 'LTC' | 'USDT' | 'XRP'
	fiat: 'ARS'
}

// Fiwind
export interface FiwindExchange extends BaseExchange {
	exchange: 'fiwind'
	coin:
		| 'ADA'
		| 'BNB'
		| 'BTC'
		| 'DAI'
		| 'DOT'
		| 'ETH'
		| 'MATIC'
		| 'SOL'
		| 'USDC'
		| 'USDT'
	fiat: 'ARS' | 'USD'
}

// FlowBTC
export interface FlowbtcExchange extends BaseExchange {
	exchange: 'flowbtc'
	coin: 'BTC' | 'EOS' | 'ETH' | 'LTC' | 'XRP'
	fiat: 'BRL'
}

// Fluyez
export interface FluyezExchange extends BaseExchange {
	exchange: 'fluyez'
	coin: 'BTC'
	fiat: 'USD' | 'PEN'
}

// Foxbit
export interface FoxbitExchange extends BaseExchange {
	exchange: 'foxbit'
	coin:
		| 'AAVE'
		| 'ADA'
		| 'AVAX'
		| 'AXS'
		| 'BAT'
		| 'BCH'
		| 'BNB'
		| 'BTC'
		| 'CHZ'
		| 'DAI'
		| 'DOGE'
		| 'DOT'
		| 'EOS'
		| 'ETH'
		| 'FTM'
		| 'LINK'
		| 'LTC'
		| 'MANA'
		| 'MATIC'
		| 'SAND'
		| 'SHIB'
		| 'SLP'
		| 'SOL'
		| 'UNI'
		| 'USDC'
		| 'USDT'
		| 'XLM'
		| 'XRP'
	fiat: 'BRL'
}

// HTX P2P
export interface HuobiP2PExchange extends BaseExchange {
	exchange: 'huobip2p'
	coin: 'BTC' | 'ETH' | 'LTC' | 'USDT'
	fiat: 'ARS' | 'MXN' | 'UYU'
}

// Kripton Market
export interface KriptonmarketExchange extends BaseExchange {
	exchange: 'kriptonmarket'
	coin: 'BTC' | 'DAI' | 'ETH' | 'MATIC' | 'USDC' | 'USDT'
	fiat: 'COP' | 'UYU' | 'ARS'
}

// KuCoin P2P
export interface KucoinP2PExchange extends BaseExchange {
	exchange: 'kucoinp2p'
	coin: 'BTC' | 'ETH' | 'USDC' | 'USDT'
	fiat: 'BRL' | 'COP' | 'ARS' | 'MXN'
}

// Latamex
export interface LatamexExchange extends BaseExchange {
	exchange: 'latamex'
	coin: 'BTC' | 'DAI' | 'ETH' | 'LTC' | 'MATIC' | 'TRX' | 'USDC' | 'USDT'
	fiat: 'MXN' | 'ARS' | 'BRL'
}

// Lemon Cash
export interface LemoncashExchange extends BaseExchange {
	exchange: 'lemoncash'
	coin:
		| 'AAVE'
		| 'ADA'
		| 'ALGO'
		| 'AVAX'
		| 'AXS'
		| 'BNB'
		| 'BTC'
		| 'DAI'
		| 'DOT'
		| 'ETH'
		| 'FTM'
		| 'LTC'
		| 'MANA'
		| 'MATIC'
		| 'PAXG'
		| 'SAND'
		| 'SLP'
		| 'SOL'
		| 'UNI'
		| 'USDC'
		| 'USDT'
		| 'XLM'
	fiat: 'ARS' | 'BRL'
}

// Lemon Cash P2P
export interface LemoncashP2PExchange extends BaseExchange {
	exchange: 'lemoncashp2p'
	coin: 'USDT'
	fiat: 'ARS'
}

// Let'sBit
export interface LetsbitExchange extends BaseExchange {
	exchange: 'letsbit'
	coin:
		| 'ADA'
		| 'AVAX'
		| 'BCH'
		| 'BTC'
		| 'CAKE'
		| 'DAI'
		| 'DOGE'
		| 'ETH'
		| 'LINK'
		| 'LTC'
		| 'MATIC'
		| 'NUARS'
		| 'SOL'
		| 'TRX'
		| 'USDC'
		| 'USDP'
		| 'USDT'
		| 'XLM'
		| 'XRP'
	fiat: 'ARS' | 'COP' | 'PEN' | 'USD'
}

// Lnp2pBot P2P
export interface Lnp2pbotP2PExchange extends BaseExchange {
	exchange: 'lnp2pbotp2p'
	coin: 'BTC'
	fiat: 'VES' | 'BRL' | 'MXN' | 'CLP' | 'PEN' | 'ARS' | 'COP'
}

// Mercado Bitcoin
export interface MercadobitcoinExchange extends BaseExchange {
	exchange: 'mercadobitcoin'
	coin:
		| 'AAVE'
		| 'ADA'
		| 'ALGO'
		| 'AVAX'
		| 'AXS'
		| 'BAT'
		| 'BCH'
		| 'BTC'
		| 'CHZ'
		| 'DAI'
		| 'DOGE'
		| 'DOT'
		| 'ETH'
		| 'LINK'
		| 'LTC'
		| 'MANA'
		| 'MATIC'
		| 'PAXG'
		| 'SAND'
		| 'SHIB'
		| 'SLP'
		| 'SOL'
		| 'UNI'
		| 'USDC'
		| 'USDP'
		| 'XLM'
		| 'XRP'
	fiat: 'BRL'
}

// OKX P2P
export interface OkexP2PExchange extends BaseExchange {
	exchange: 'okexp2p'
	coin: 'BTC' | 'DAI' | 'ETH' | 'USDC' | 'USDT'
	fiat: 'CLP' | 'PEN' | 'ARS' | 'COP' | 'UYU' | 'BRL' | 'MXN' | 'VES'
}

// PagCripto
export interface PagcriptoExchange extends BaseExchange {
	exchange: 'pagcripto'
	coin: 'BTC'
	fiat: 'BRL'
}

// Paxful P2P
export interface PaxfulP2PExchange extends BaseExchange {
	exchange: 'paxfulp2p'
	coin: 'BTC' | 'USDC' | 'USDT'
	fiat: 'PEN' | 'BOB' | 'COP' | 'UYU' | 'BRL' | 'MXN' | 'ARS' | 'CLP'
}

// Paydece P2P
export interface PaydeceP2PExchange extends BaseExchange {
	exchange: 'paydecep2p'
	coin: 'USDT'
	fiat: 'ARS' | 'VES'
}

// Plus Crypto
export interface PluscryptoExchange extends BaseExchange {
	exchange: 'pluscrypto'
	coin: 'BNB' | 'BTC' | 'DAI' | 'ETH' | 'MATIC' | 'SOL' | 'USDC' | 'USDT'
	fiat: 'ARS'
}

// Ripio
export interface RipioExchange extends BaseExchange {
	exchange: 'ripio'
	coin:
		| 'AAVE'
		| 'ALGO'
		| 'AVAX'
		| 'AXS'
		| 'BAT'
		| 'BNB'
		| 'BTC'
		| 'CHZ'
		| 'DAI'
		| 'DOGE'
		| 'ETH'
		| 'LINK'
		| 'LTC'
		| 'MANA'
		| 'MATIC'
		| 'SLP'
		| 'TRX'
		| 'UNI'
		| 'USDC'
		| 'USDT'
		| 'UXD'
		| 'WLD'
		| 'XLM'
	fiat: 'ARS' | 'MXN' | 'BRL' | 'UYU' | 'COP'
}

// Ripio Trade
export interface RipioexchangeExchange extends BaseExchange {
	exchange: 'ripioexchange'
	coin: 'BTC' | 'DAI' | 'ETH' | 'USDC' | 'USDT' | 'UXD'
	fiat: 'ARS' | 'BRL'
}

// Saldo
export interface SaldoExchange extends BaseExchange {
	exchange: 'saldo'
	coin: 'BTC' | 'DAI' | 'USDT'
	fiat: 'COP' | 'MXN' | 'ARS' | 'VES'
}

// SatoshiTango
export interface SatoshitangoExchange extends BaseExchange {
	exchange: 'satoshitango'
	coin:
		| 'ADA'
		| 'AVAX'
		| 'BCH'
		| 'BTC'
		| 'DAI'
		| 'DOGE'
		| 'DOT'
		| 'ETH'
		| 'LINK'
		| 'LTC'
		| 'MANA'
		| 'SOL'
		| 'UNI'
		| 'USDC'
		| 'USDT'
		| 'XLM'
		| 'XRP'
	fiat: 'BRL' | 'CLP' | 'ARS' | 'PEN'
}

// Syklo P2P
export interface SykloP2PExchange extends BaseExchange {
	exchange: 'syklop2p'
	coin: 'USDC'
	fiat: 'ARS' | 'COP' | 'UYU' | 'BOB' | 'MXN' | 'VES' | 'CLP' | 'PEN'
}

// TiendaCrypto
export interface TiendacryptoExchange extends BaseExchange {
	exchange: 'tiendacrypto'
	coin: 'BNB' | 'BTC' | 'DAI' | 'ETH' | 'MATIC' | 'SOL' | 'USDC' | 'USDT'
	fiat: 'ARS' | 'USD'
}

// TruBit
export interface TruBitExchange extends BaseExchange {
	exchange: 'trubit'
	coin:
		| 'ADA'
		| 'AVAX'
		| 'BTC'
		| 'DOGE'
		| 'DOT'
		| 'ETH'
		| 'LTC'
		| 'MATIC'
		| 'NUARS'
		| 'SOL'
		| 'USDC'
		| 'USDT'
		| 'XRP'
	fiat: 'MXN' | 'BRL' | 'ARS'
}

// TruBit P2P
export interface TruBitP2PExchange extends BaseExchange {
	exchange: 'trubitp2p'
	coin: 'BTC' | 'USDT'
	fiat: 'ARS' | 'MXN'
}

// Vibrant
export interface VibrantExchange extends BaseExchange {
	exchange: 'vibrant'
	coin: 'USDC' | 'XLM'
	fiat: 'ARS'
}

// Xapo Bank
export interface XapoBankExchange extends BaseExchange {
	exchange: 'xapo'
	coin: 'BTC' | 'USDC' | 'USDT'
	fiat: 'USD'
}
