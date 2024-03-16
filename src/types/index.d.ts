import * as Exchanges from './exchanges'

export { QueryDollarResponse } from './dollar'
export { QueryFeesResponse } from './fees'
export { QueryBanksResponse, Bank } from './banks'

export type CryptoCurrency =
	| 'BTC'
	| 'ETH'
	| 'USDT'
	| 'USDC'
	| 'DAI'
	| 'UXD'
	| 'USDP'
	| 'WLD'
	| 'BNB'
	| 'SOL'
	| 'XRP'
	| 'ADA'
	| 'AVAX'
	| 'DOGE'
	| 'TRX'
	| 'LINK'
	| 'DOT'
	| 'MATIC'
	| 'SHIB'
	| 'LTC'
	| 'BCH'
	| 'EOS'
	| 'XLM'
	| 'FTM'
	| 'AAVE'
	| 'UNI'
	| 'ALGO'
	| 'BAT'
	| 'PAXG'
	| 'CAKE'
	| 'AXS'
	| 'SLP'
	| 'MANA'
	| 'SAND'
	| 'CHZ'

export type FiatCurrency =
	| 'ARS'
	| 'BRL'
	| 'CLP'
	| 'COP'
	| 'MXN'
	| 'PEN'
	| 'VES'
	| 'BOB'
	| 'UYU'
	| 'USD'
	| 'EUR'

export type QueryExchangeParams =
	| Exchanges.ArgenbtcExchange
	| Exchanges.BanexcoinExchange
	| Exchanges.BeloExchange
	| Exchanges.BinanceExchange
	| Exchanges.BinanceP2PExchange
	| Exchanges.BingxP2PExchange
	| Exchanges.BitcointoyouExchange
	| Exchanges.BitcointradeExchange
	| Exchanges.BitgetP2PExchange
	| Exchanges.BitmonederoExchange
	| Exchanges.BitsoExchange
	| Exchanges.BitsoalphaExchange
	| Exchanges.BrasilbitcoinExchange
	| Exchanges.BudaExchange
	| Exchanges.BuenbitExchange
	| Exchanges.BybitExchange
	| Exchanges.BybitP2PExchange
	| Exchanges.CocoscryptoExchange
	| Exchanges.CryptomktExchange
	| Exchanges.DecryptoExchange
	| Exchanges.EldoradoP2PExchange
	| Exchanges.EluterExchange
	| Exchanges.FiwindExchange
	| Exchanges.FlowbtcExchange
	| Exchanges.FluyezExchange
	| Exchanges.FoxbitExchange
	| Exchanges.HuobiP2PExchange
	| Exchanges.KriptonmarketExchange
	| Exchanges.KucoinP2PExchange
	| Exchanges.LatamexExchange
	| Exchanges.LemoncashExchange
	| Exchanges.LemoncashP2PExchange
	| Exchanges.LetsbitExchange
	| Exchanges.Lnp2pbotP2PExchange
	| Exchanges.MercadobitcoinExchange
	| Exchanges.OkexP2PExchange
	| Exchanges.PagcriptoExchange
	| Exchanges.PaxfulP2PExchange
	| Exchanges.PaydeceP2PExchange
	| Exchanges.PluscryptoExchange
	| Exchanges.RipioExchange
	| Exchanges.RipioexchangeExchange
	| Exchanges.SaldoExchange
	| Exchanges.SatoshitangoExchange
	| Exchanges.SykloP2PExchange
	| Exchanges.TiendacryptoExchange
	| Exchanges.TruBitExchange
	| Exchanges.TruBitP2PExchange
	| Exchanges.VibrantExchange
	| Exchanges.XapoBankExchange

export type QueryExchangeResponse = {
	ask: number
	totalAsk: number
	bid: number
	totalBid: number
	time: number
}

export type ExchangeDataKeys =
	| 'argenbtc'
	| 'buenbit'
	| 'ripio'
	| 'ripioexchange'
	| 'satoshitango'
	| 'cryptomkt'
	| 'decrypto'
	| 'latamex'
	| 'letsbit'
	| 'binancep2p'
	| 'fiwind'
	| 'lemoncash'
	| 'okexp2p'
	| 'bitmonedero'
	| 'paxfulp2p'
	| 'belo'
	| 'huobip2p'
	| 'tiendacrypto'
	| 'bybitp2p'
	| 'kucoinp2p'
	| 'saldo'
	| 'kriptonmarket'
	| 'trubitp2p'
	| 'bitgetp2p'
	| 'pluscrypto'
	| 'bybit'
	| 'lnp2pbotp2p'
	| 'eluter'
	| 'binance'
	| 'eldoradop2p'
	| 'trubit'
	| 'bitsoalpha'
	| 'cocoscrypto'

export type QueryCoinParams = {
	coin: CryptoCurrency
	fiat: FiatCurrency
	volume?: number
}

export type QueryCoinResponse = {
	[exchange in ExchangeDataKeys]: QueryExchangeResponse
}

export interface QueryCERAndUVAResponse {
	time: number
	value: number
}
