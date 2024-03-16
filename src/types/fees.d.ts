export interface QueryFeesResponse {
	'Binance P2P': BinanceP2P
	'Bitso': Bitso
	'Buda': Buda
	'Buenbit': Buenbit
	'Copter': Copter
	'Letsbit': Letsbit
	'Ripio': Ripio
	'SatoshiTango': SatoshiTango
	'ArgenBTC': ArgenBtc
	'CryptoMKT': CryptoMkt
	'LemonCash': LemonCash
	'Fiwind': Fiwind
	'UniversalCoins': UniversalCoins
	'Bitmonedero': Bitmonedero
	'Domitai': Domitai
	'Vitawallet': Vitawallet
	'Orionx': Orionx
	'OKX P2P': OkxP2P
	'Belo': Belo
	'Huobi P2P': HuobiP2P
	'TiendaCrypto': TiendaCrypto
	'Decrypto': Decrypto
	'Vibrant': Vibrant
	'Airtm': Airtm
	'Kraken': Kraken
	'Bybit P2P': BybitP2P
	'KuCoin P2P': KuCoinP2P
	'Latamex': Latamex
	'RipioTrade': RipioTrade
	'KriptonMarket': KriptonMarket
	'Bitget P2P': BitgetP2P
	'Saldo': Saldo
	'FlowBTC': FlowBtc
	'Bitcointoyou': Bitcointoyou
	'Syklo P2P': SykloP2P
	'Foxbit': Foxbit
	'PagCripto': PagCripto
	'Eluter': Eluter
	'Paxful P2P': PaxfulP2P
	'AstroPay': AstroPay
	'Banexcoin': Banexcoin
	'El Dorado P2P': ElDoradoP2P
	'TruBit': TruBit
	'BingX P2P': BingXP2P
	'Xapo': Xapo
	'PlusCrypto': PlusCrypto
	'Lnp2pBot P2P': Lnp2pBotP2P
	'Paydece P2P': PaydeceP2P
	'Fluyez': Fluyez
	'BrasilBitcoin': BrasilBitcoin
	'MercadoBitcoin': MercadoBitcoin
	'Trubit': Trubit
	'CocosCrypto': CocosCrypto
}

export interface BinanceP2P {
	BTC: Btc
	ETH: Eth
	DAI: Dai
	USDT: Usdt
	USDC: Usdc
	ADA: Ada
	BNB: Bnb
	DOGE: Doge
	MATIC: Matic
	XRP: Xrp
}

export interface Btc {
	BITCOIN: number
	BSC: number
	ETHEREUM: number
	LN: number
}

export interface Eth {
	ETHEREUM: number
	ARBITRUM: number
	BSC: number
}

export interface Dai {
	ETHEREUM: number
	BSC: number
}

export interface Usdt {
	ETHEREUM: number
	BSC: number
	SOLANA: number
	TRON: number
	AVALANCHE: number
}

export interface Usdc {
	ETHEREUM: number
	AVALANCHE: number
	BSC: number
	POLYGON: number
	SOLANA: number
	TRON: number
}

export interface Ada {
	CARDANO: number
}

export interface Bnb {
	BSC: number
}

export interface Doge {
	DOGECOIN: number
}

export interface Matic {
	POLYGON: number
}

export interface Xrp {
	RIPPLE: number
}

export interface Bitso {
	BTC: Btc2
	ETH: Eth2
	DAI: Dai2
	LTC: Ltc
	BCH: Bch
	USDT: Usdt2
	USDC: Usdc2
	LINK: Link
	XRP: Xrp2
	MANA: Mana
	AXS: Axs
	UNI: Uni
	USDP: Usdp
	FTM: Ftm
	BAT: Bat
	DOT: Dot
	DOGE: Doge2
	SOL: Sol
	AAVE: Aave
	SAND: Sand
	SHIB: Shib
	CHZ: Chz
	ADA: Ada2
	ALGO: Algo
	TRX: Trx
	PAXG: Paxg
	MATIC: Matic2
}

export interface Btc2 {
	BITCOIN: number
}

export interface Eth2 {
	ETHEREUM: number
}

export interface Dai2 {
	ETHEREUM: number
}

export interface Ltc {
	LITECOIN: number
}

export interface Bch {
	BITCOINCASH: number
}

export interface Usdt2 {
	ETHEREUM: number
	TRON: number
}

export interface Usdc2 {
	ETHEREUM: number
}

export interface Link {
	ETHEREUM: number
}

export interface Xrp2 {
	RIPPLE: number
}

export interface Mana {
	ETHEREUM: number
}

export interface Axs {
	ETHEREUM: number
}

export interface Uni {
	ETHEREUM: number
}

export interface Usdp {
	ETHEREUM: number
}

export interface Ftm {
	ETHEREUM: number
}

export interface Bat {
	ETHEREUM: number
}

export interface Dot {
	POLKADOT: number
}

export interface Doge2 {
	DOGECOIN: number
}

export interface Sol {
	SOLANA: number
}

export interface Aave {
	ETHEREUM: number
}

export interface Sand {
	ETHEREUM: number
}

export interface Shib {
	ETHEREUM: number
}

export interface Chz {
	ETHEREUM: number
}

export interface Ada2 {
	CARDANO: number
}

export interface Algo {
	ALGORAND: number
}

export interface Trx {
	TRON: number
}

export interface Paxg {
	ETHEREUM: number
}

export interface Matic2 {
	ETHEREUM: number
}

export interface Buda {
	BTC: Btc3
	ETH: Eth3
	LTC: Ltc2
	BCH: Bch2
	USDC: Usdc3
}

export interface Btc3 {
	BITCOIN: number
	LN: number
}

export interface Eth3 {
	ETHEREUM: number
}

export interface Ltc2 {
	LITECOIN: number
}

export interface Bch2 {
	BITCOINCASH: number
}

export interface Usdc3 {
	ETHEREUM: number
}

export interface Buenbit {
	BTC: Btc4
	DAI: Dai3
	ETH: Eth4
	BNB: Bnb2
	USDT: Usdt3
	USDC: Usdc4
	ADA: Ada3
	DOT: Dot2
	MATIC: Matic3
	AVAX: Avax
	FTM: Ftm2
	AXS: Axs2
	NUARS: Nuars
}

export interface Btc4 {
	BITCOIN: number
	BSC: number
}

export interface Dai3 {
	ETHEREUM: number
	BSC: number
}

export interface Eth4 {
	ETHEREUM: number
	BSC: number
}

export interface Bnb2 {
	BSC: number
}

export interface Usdt3 {
	BSC: number
	ETHEREUM: number
	POLYGON: number
	ARBITRUM: number
	OPTIMISM: number
	TRON: number
}

export interface Usdc4 {
	BSC: number
	ETHEREUM: number
	POLYGON: number
}

export interface Ada3 {
	BSC: number
}

export interface Dot2 {
	BSC: number
}

export interface Matic3 {
	BSC: number
	POLYGON: number
}

export interface Avax {
	BSC: number
}

export interface Ftm2 {
	BSC: number
}

export interface Axs2 {
	BSC: number
}

export interface Nuars {
	POLYGON: number
}

export interface Copter {
	BTC: Btc5
	ETH: Eth5
	USDC: Usdc5
	USDT: Usdt4
}

export interface Btc5 {
	BITCOIN: number
	BSC: number
}

export interface Eth5 {
	ETHEREUM: number
	BSC: number
}

export interface Usdc5 {
	ETHEREUM: number
	BSC: number
}

export interface Usdt4 {
	ETHEREUM: number
	BSC: number
}

export interface Letsbit {
	BTC: Btc6
	ETH: Eth6
	DAI: Dai4
	LINK: Link2
	USDT: Usdt5
	UNI: Uni2
	MATIC: Matic4
	USDC: Usdc6
	DOGE: Doge3
	USDP: Usdp2
	ADA: Ada4
	LTC: Ltc3
	CAKE: Cake
	SOL: Sol2
	AAVE: Aave2
	AVAX: Avax2
	PAXG: Paxg2
	XLM: Xlm
	XRP: Xrp3
	NUARS: Nuars2
	TRX: Trx2
	BCH: Bch3
}

export interface Btc6 {
	BITCOIN: number
	BSC: number
}

export interface Eth6 {
	ETHEREUM: number
	ARBITRUM: number
	OPTIMISM: number
	BSC: number
}

export interface Dai4 {
	ETHEREUM: number
	BSC: number
}

export interface Link2 {
	ETHEREUM: number
}

export interface Usdt5 {
	ETHEREUM: number
	BSC: number
	TRON: number
	AVALANCHE: number
	POLYGON: number
}

export interface Uni2 {
	ETHEREUM: number
}

export interface Matic4 {
	POLYGON: number
	ETHEREUM: number
}

export interface Usdc6 {
	ETHEREUM: number
	POLYGON: number
	SOLANA: number
	BSC: number
}

export interface Doge3 {
	DOGECOIN: number
}

export interface Usdp2 {
	ETHEREUM: number
}

export interface Ada4 {
	CARDANO: number
	BSC: number
}

export interface Ltc3 {
	LITECOIN: number
}

export interface Cake {
	BSC: number
}

export interface Sol2 {
	SOLANA: number
}

export interface Aave2 {
	ETHEREUM: number
}

export interface Avax2 {
	AVALANCHE: number
}

export interface Paxg2 {
	ETHEREUM: number
}

export interface Xlm {
	STELLAR: number
}

export interface Xrp3 {
	RIPPLE: number
}

export interface Nuars2 {
	BSC: number
}

export interface Trx2 {
	TRON: number
}

export interface Bch3 {
	BITCOINCASH: number
}

export interface Ripio {
	BTC: Btc7
	ETH: Eth7
	DAI: Dai5
	LTC: Ltc4
	USDC: Usdc7
	LINK: Link3
	UNI: Uni3
	AXS: Axs3
	SLP: Slp
	MANA: Mana2
	BAT: Bat2
	AAVE: Aave3
	CHZ: Chz2
	DOGE: Doge4
	USDT: Usdt6
	AVAX: Avax3
	MATIC: Matic5
	BNB: Bnb3
	XLM: Xlm2
	TRX: Trx3
	UXD: Uxd
	ALGO: Algo2
	WLD: Wld
}

export interface Btc7 {
	BITCOIN: number
	LN: number
}

export interface Eth7 {
	ETHEREUM: number
	ARBITRUM: number
	BSC: number
	OPTIMISM: number
	ZKSYNC: number
}

export interface Dai5 {
	ETHEREUM: number
	POLYGON: number
	BSC: number
	ARBITRUM: number
	OPTIMISM: number
}

export interface Ltc4 {
	LITECOIN: number
}

export interface Usdc7 {
	ETHEREUM: number
	POLYGON: number
	BSC: number
	STELLAR: number
	OPTIMISM: number
	ZKSYNC: number
	ALGORAND: number
}

export interface Link3 {
	ETHEREUM: number
}

export interface Uni3 {
	ETHEREUM: number
}

export interface Axs3 {
	ETHEREUM: number
}

export interface Slp {
	ETHEREUM: number
}

export interface Mana2 {
	ETHEREUM: number
}

export interface Bat2 {
	ETHEREUM: number
}

export interface Aave3 {
	ETHEREUM: number
}

export interface Chz2 {
	ETHEREUM: number
}

export interface Doge4 {
	DOGECOIN: number
}

export interface Usdt6 {
	ETHEREUM: number
	POLYGON: number
	BSC: number
	ARBITRUM: number
	TRON: number
	OPTIMISM: number
	ALGORAND: number
	AVALANCHE: number
}

export interface Avax3 {
	AVALANCHE: number
}

export interface Matic5 {
	POLYGON: number
}

export interface Bnb3 {
	BSC: number
}

export interface Xlm2 {
	STELLAR: number
}

export interface Trx3 {
	TRON: number
}

export interface Uxd {
	LACHAIN: number
}

export interface Algo2 {
	ALGORAND: number
}

export interface Wld {
	ETHEREUM: number
	OPTIMISM: number
}

export interface SatoshiTango {
	BTC: Btc8
	ETH: Eth8
	DAI: Dai6
	XRP: Xrp4
	LTC: Ltc5
	USDC: Usdc8
	BCH: Bch4
	ADA: Ada5
	USDT: Usdt7
	SOL: Sol3
	XLM: Xlm3
	UNI: Uni4
	LINK: Link4
	DOGE: Doge5
	MANA: Mana3
	DOT: Dot3
	AVAX: Avax4
}

export interface Btc8 {
	BITCOIN: number
}

export interface Eth8 {
	ETHEREUM: number
}

export interface Dai6 {
	ETHEREUM: number
	BSC: number
	POLYGON: number
}

export interface Xrp4 {
	RIPPLE: number
}

export interface Ltc5 {
	LITECOIN: number
}

export interface Usdc8 {
	ETHEREUM: number
	BSC: number
	POLYGON: number
	TRON: number
}

export interface Bch4 {
	BITCOINCASH: number
}

export interface Ada5 {
	CARDANO: number
}

export interface Usdt7 {
	ETHEREUM: number
	BSC: number
	POLYGON: number
	TRON: number
}

export interface Sol3 {
	SOLANA: number
}

export interface Xlm3 {
	STELLAR: number
}

export interface Uni4 {
	ETHEREUM: number
}

export interface Link4 {
	ETHEREUM: number
}

export interface Doge5 {
	DOGECOIN: number
}

export interface Mana3 {
	ETHEREUM: number
}

export interface Dot3 {
	POLKADOT: number
}

export interface Avax4 {
	AVALANCHE: number
}

export interface ArgenBtc {
	BTC: Btc9
	DAI: Dai7
	ETH: Eth9
	USDT: Usdt8
}

export interface Btc9 {
	BITCOIN: number
}

export interface Dai7 {
	ETHEREUM: number
	BSC: number
}

export interface Eth9 {
	ETHEREUM: number
}

export interface Usdt8 {
	ETHEREUM: number
	BSC: number
}

export interface CryptoMkt {
	BTC: Btc10
	EOS: Eos
	ETH: Eth10
	XLM: Xlm4
	USDT: Usdt9
	BNB: Bnb4
	SOL: Sol4
	ADA: Ada6
	XRP: Xrp5
	USDC: Usdc9
	DOT: Dot4
	MATIC: Matic6
	LINK: Link5
	DAI: Dai8
	UNI: Uni5
	BCH: Bch5
	LTC: Ltc6
	AVAX: Avax5
	AAVE: Aave4
	SHIB: Shib2
	ALGO: Algo3
	PAXG: Paxg3
	TRX: Trx4
}

export interface Btc10 {
	BITCOIN: number
}

export interface Eos {
	EOS: number
}

export interface Eth10 {
	ETHEREUM: number
}

export interface Xlm4 {
	STELLAR: number
}

export interface Usdt9 {
	ETHEREUM: number
	TRON: number
	SOLANA: number
	BSC: number
}

export interface Bnb4 {
	BSC: number
}

export interface Sol4 {
	SOLANA: number
}

export interface Ada6 {
	CARDANO: number
}

export interface Xrp5 {
	RIPPLE: number
}

export interface Usdc9 {
	ETHEREUM: number
	POLYGON: number
	TRON: number
	SOLANA: number
	BSC: number
}

export interface Dot4 {
	POLKADOT: number
}

export interface Matic6 {
	POLYGON: number
	ETHEREUM: number
}

export interface Link5 {
	ETHEREUM: number
}

export interface Dai8 {
	ETHEREUM: number
}

export interface Uni5 {
	ETHEREUM: number
}

export interface Bch5 {
	BITCOINCASH: number
}

export interface Ltc6 {
	LITECOIN: number
}

export interface Avax5 {
	AVALANCHE: number
}

export interface Aave4 {
	ETHEREUM: number
}

export interface Shib2 {
	ETHEREUM: number
}

export interface Algo3 {
	ALGORAND: number
}

export interface Paxg3 {
	ETHEREUM: number
}

export interface Trx4 {
	TRON: number
}

export interface LemonCash {
	BTC: Btc11
	ETH: Eth11
	USDT: Usdt10
	UNI: Uni6
	ADA: Ada7
	DAI: Dai9
	SOL: Sol5
	AXS: Axs4
	SLP: Slp2
	MANA: Mana4
	USDC: Usdc10
	SAND: Sand2
	DOT: Dot5
	ALGO: Algo4
	BNB: Bnb5
	AVAX: Avax6
	MATIC: Matic7
	AAVE: Aave5
	FTM: Ftm3
	PAXG: Paxg4
	XLM: Xlm5
	LTC: Ltc7
}

export interface Btc11 {
	BITCOIN: number
	BSC: number
	LN: number
}

export interface Eth11 {
	ETHEREUM: number
	BSC: number
	ARBITRUM: number
	OPTIMISM: number
}

export interface Usdt10 {
	ETHEREUM: number
	BSC: number
	POLYGON: number
	TRON: number
}

export interface Uni6 {
	ETHEREUM: number
}

export interface Ada7 {
	CARDANO: number
}

export interface Dai9 {
	ETHEREUM: number
	BSC: number
}

export interface Sol5 {
	SOLANA: number
}

export interface Axs4 {
	ETHEREUM: number
}

export interface Slp2 {
	ETHEREUM: number
}

export interface Mana4 {
	ETHEREUM: number
}

export interface Usdc10 {
	ETHEREUM: number
	BSC: number
	POLYGON: number
	STELLAR: number
	TRON: number
}

export interface Sand2 {
	ETHEREUM: number
}

export interface Dot5 {
	POLKADOT: number
}

export interface Algo4 {
	ALGORAND: number
}

export interface Bnb5 {
	BSC: number
}

export interface Avax6 {
	AVALANCHE: number
}

export interface Matic7 {
	POLYGON: number
}

export interface Aave5 {
	ETHEREUM: number
	BSC: number
}

export interface Ftm3 {
	FANTOM: number
	BSC: number
}

export interface Paxg4 {
	ETHEREUM: number
}

export interface Xlm5 {
	STELLAR: number
}

export interface Ltc7 {
	LITECOIN: number
}

export interface Fiwind {
	BTC: Btc12
	USDT: Usdt11
	ETH: Eth12
	DAI: Dai10
	ADA: Ada8
	SOL: Sol6
	DOT: Dot6
	USDC: Usdc11
	MATIC: Matic8
	BNB: Bnb6
}

export interface Btc12 {
	BITCOIN: number
	BSC: number
	LN: number
}

export interface Usdt11 {
	ETHEREUM: number
	BSC: number
	TRON: number
	POLYGON: number
	OPTIMISM: number
	ARBITRUM: number
}

export interface Eth12 {
	ETHEREUM: number
	BSC: number
	OPTIMISM: number
	ARBITRUM: number
}

export interface Dai10 {
	ETHEREUM: number
	BSC: number
}

export interface Ada8 {
	CARDANO: number
	BSC: number
}

export interface Sol6 {
	SOLANA: number
	BSC: number
}

export interface Dot6 {
	POLKADOT: number
	BSC: number
}

export interface Usdc11 {
	ETHEREUM: number
	BSC: number
	TRON: number
	POLYGON: number
	OPTIMISM: number
	ARBITRUM: number
}

export interface Matic8 {
	POLYGON: number
	BSC: number
	ETHEREUM: number
}

export interface Bnb6 {
	BSC: number
}

export interface UniversalCoins {
	BTC: Btc13
	ETH: Eth13
	USDT: Usdt12
}

export interface Btc13 {
	BITCOIN: number
}

export interface Eth13 {
	ETHEREUM: number
}

export interface Usdt12 {
	ETHEREUM: number
}

export interface Bitmonedero {
	BTC: Btc14
	USDT: Usdt13
}

export interface Btc14 {
	BITCOIN: number
}

export interface Usdt13 {
	ETHEREUM: number
}

export interface Domitai {
	BTC: Btc15
	ETH: Eth14
	USDT: Usdt14
	LTC: Ltc8
}

export interface Btc15 {
	BITCOIN: number
}

export interface Eth14 {
	ETHEREUM: number
}

export interface Usdt14 {
	ETHEREUM: number
}

export interface Ltc8 {
	LITECOIN: number
}

export interface Vitawallet {
	BTC: Btc16
}

export interface Btc16 {
	BITCOIN: number
}

export interface Orionx {
	BTC: Btc17
	ETH: Eth15
	DAI: Dai11
	BNB: Bnb7
	LTC: Ltc9
	BCH: Bch6
	USDT: Usdt15
}

export interface Btc17 {
	BITCOIN: number
}

export interface Eth15 {
	ETHEREUM: number
}

export interface Dai11 {
	ETHEREUM: number
}

export interface Bnb7 {
	BSC: number
}

export interface Ltc9 {
	LITECOIN: number
}

export interface Bch6 {
	BITCOINCASH: number
}

export interface Usdt15 {
	ETHEREUM: number
}

export interface OkxP2P {
	USDT: Usdt16
	BTC: Btc18
	ETH: Eth16
	USDC: Usdc12
	DAI: Dai12
}

export interface Usdt16 {
	ETHEREUM: number
	TRON: number
	POLYGON: number
	ARBITRUM: number
	OPTIMISM: number
	AVALANCHE: number
	ZKSYNC: number
}

export interface Btc18 {
	BITCOIN: number
	LN: number
}

export interface Eth16 {
	ETHEREUM: number
	ARBITRUM: number
	OPTIMISM: number
	ZKSYNC: number
}

export interface Usdc12 {
	ETHEREUM: number
	POLYGON: number
	TRON: number
	AVALANCHE: number
	ARBITRUM: number
	ZKSYNC: number
}

export interface Dai12 {
	ETHEREUM: number
	POLYGON: number
}

export interface Belo {
	BTC: Btc19
	ETH: Eth17
	DAI: Dai13
	USDT: Usdt17
	USDC: Usdc13
}

export interface Btc19 {
	BITCOIN: number
	LN: number
}

export interface Eth17 {
	ETHEREUM: number
	OPTIMISM: number
	ARBITRUM: number
	BSC: number
}

export interface Dai13 {
	ETHEREUM: number
	POLYGON: number
	BSC: number
}

export interface Usdt17 {
	ETHEREUM: number
	TRON: number
	OPTIMISM: number
	POLYGON: number
	ARBITRUM: number
	BSC: number
}

export interface Usdc13 {
	ETHEREUM: number
	TRON: number
	OPTIMISM: number
	POLYGON: number
	ARBITRUM: number
	BSC: number
}

export interface HuobiP2P {
	BTC: Btc20
	ETH: Eth18
	DAI: Dai14
	USDT: Usdt18
	USDC: Usdc14
}

export interface Btc20 {
	BITCOIN: number
	ETHEREUM: number
}

export interface Eth18 {
	ETHEREUM: number
	OPTIMISM: number
	ARBITRUM: number
}

export interface Dai14 {
	ETHEREUM: number
}

export interface Usdt18 {
	ETHEREUM: number
	TRON: number
	BSC: number
	SOLANA: number
	AVALANCHE: number
}

export interface Usdc14 {
	ETHEREUM: number
}

export interface TiendaCrypto {
	ETH: Eth19
	DAI: Dai15
	BNB: Bnb8
	BTC: Btc21
	SOL: Sol7
	USDT: Usdt19
	MATIC: Matic9
	USDC: Usdc15
}

export interface Eth19 {
	ETHEREUM: number
	BSC: number
}

export interface Dai15 {
	ETHEREUM: number
	BSC: number
}

export interface Bnb8 {
	BSC: number
}

export interface Btc21 {
	BSC: number
}

export interface Sol7 {
	BSC: number
}

export interface Usdt19 {
	BSC: number
	POLYGON: number
}

export interface Matic9 {
	BSC: number
	POLYGON: number
}

export interface Usdc15 {
	BSC: number
}

export interface Decrypto {
	BTC: Btc22
	DAI: Dai16
	USDT: Usdt20
	ETH: Eth20
}

export interface Btc22 {
	BITCOIN: number
}

export interface Dai16 {
	ETHEREUM: number
}

export interface Usdt20 {
	ETHEREUM: number
	TRON: number
	BSC: number
}

export interface Eth20 {
	ETHEREUM: number
}

export interface Vibrant {
	USDC: Usdc16
	XLM: Xlm6
}

export interface Usdc16 {
	STELLAR: number
}

export interface Xlm6 {
	STELLAR: number
}

export interface Airtm {
	BTC: Btc23
	ETH: Eth21
	DAI: Dai17
	USDC: Usdc17
	XLM: Xlm7
}

export interface Btc23 {
	BITCOIN: number
}

export interface Eth21 {
	ETHEREUM: number
}

export interface Dai17 {
	ETHEREUM: number
}

export interface Usdc17 {
	STELLAR: number
}

export interface Xlm7 {
	STELLAR: number
}

export interface Kraken {
	BTC: Btc24
	ETH: Eth22
	DAI: Dai18
	USDT: Usdt21
	USDC: Usdc18
	MATIC: Matic10
}

export interface Btc24 {
	BITCOIN: number
	LN: number
}

export interface Eth22 {
	ETHEREUM: number
	ARBITRUM: number
}

export interface Dai18 {
	ETHEREUM: number
	POLYGON: number
}

export interface Usdt21 {
	ETHEREUM: number
	TRON: number
	POLYGON: number
}

export interface Usdc18 {
	ETHEREUM: number
	SOLANA: number
	TRON: number
	POLYGON: number
}

export interface Matic10 {
	POLYGON: number
}

export interface BybitP2P {
	BTC: Btc25
	ETH: Eth23
	USDT: Usdt22
	USDC: Usdc19
	XRP: Xrp6
	EOS: Eos2
	ADA: Ada9
	DOGE: Doge6
	DOT: Dot7
	DAI: Dai19
	TRX: Trx5
	AVAX: Avax7
	MATIC: Matic11
	LINK: Link6
}

export interface Btc25 {
	BITCOIN: number
}

export interface Eth23 {
	ETHEREUM: number
	ARBITRUM: number
	BSC: number
	ZKSYNC: number
	OPTIMISM: number
}

export interface Usdt22 {
	ETHEREUM: number
	TRON: number
	ARBITRUM: number
	SOLANA: number
	BSC: number
	POLYGON: number
	OPTIMISM: number
}

export interface Usdc19 {
	ARBITRUM: number
	BSC: number
	AVALANCHE: number
	ETHEREUM: number
	POLYGON: number
	SOLANA: number
	TRON: number
	ZKSYNC: number
}

export interface Xrp6 {
	RIPPLE: number
}

export interface Eos2 {
	EOS: number
}

export interface Ada9 {
	CARDANO: number
}

export interface Doge6 {
	DOGECOIN: number
}

export interface Dot7 {
	POLKADOT: number
}

export interface Dai19 {
	BSC: number
	ETHEREUM: number
	ZKSYNC: number
}

export interface Trx5 {
	TRON: number
}

export interface Avax7 {
	AVALANCHE: number
}

export interface Matic11 {
	POLYGON: number
}

export interface Link6 {
	ETHEREUM: number
}

export interface KuCoinP2P {
	USDT: Usdt23
	BTC: Btc26
	ETH: Eth24
	USDC: Usdc20
}

export interface Usdt23 {
	ETHEREUM: number
	TRON: number
}

export interface Btc26 {
	BITCOIN: number
}

export interface Eth24 {
	ETHEREUM: number
}

export interface Usdc20 {
	ETHEREUM: number
	TRON: number
}

export interface Latamex {
	BTC: Btc27
	ETH: Eth25
	DAI: Dai20
	USDT: Usdt24
	USDC: Usdc21
	LTC: Ltc10
	TRX: Trx6
	MATIC: Matic12
}

export interface Btc27 {
	BITCOIN: number
}

export interface Eth25 {
	ETHEREUM: number
}

export interface Dai20 {
	ETHEREUM: number
}

export interface Usdt24 {
	ETHEREUM: number
	TRON: number
	POLYGON: number
}

export interface Usdc21 {
	ETHEREUM: number
	POLYGON: number
	BSC: number
}

export interface Ltc10 {
	LITECOIN: number
}

export interface Trx6 {
	TRON: number
}

export interface Matic12 {
	ETHEREUM: number
	BSC: number
	POLYGON: number
}

export interface RipioTrade {
	BTC: Btc28
	ETH: Eth26
	DAI: Dai21
	USDT: Usdt25
	USDC: Usdc22
}

export interface Btc28 {
	BITCOIN: number
}

export interface Eth26 {
	ETHEREUM: number
}

export interface Dai21 {
	ETHEREUM: number
}

export interface Usdt25 {
	ETHEREUM: number
	BSC: number
	POLYGON: number
	AVALANCHE: number
}

export interface Usdc22 {
	ETHEREUM: number
	BSC: number
}

export interface KriptonMarket {
	BTC: Btc29
	ETH: Eth27
	USDT: Usdt26
	DAI: Dai22
	USDC: Usdc23
	MATIC: Matic13
}

export interface Btc29 {
	BITCOIN: number
}

export interface Eth27 {
	ETHEREUM: number
}

export interface Usdt26 {
	ETHEREUM: number
	TRON: number
}

export interface Dai22 {
	ETHEREUM: number
	POLYGON: number
}

export interface Usdc23 {
	ETHEREUM: number
	POLYGON: number
}

export interface Matic13 {
	POLYGON: number
}

export interface BitgetP2P {
	BTC: Btc30
	ETH: Eth28
	USDT: Usdt27
	DAI: Dai23
	USDC: Usdc24
	WLD: Wld2
}

export interface Btc30 {
	BITCOIN: number
	BSC: number
}

export interface Eth28 {
	ETHEREUM: number
	BSC: number
	ARBITRUM: number
	OPTIMISM: number
}

export interface Usdt27 {
	TRON: number
	ETHEREUM: number
	BSC: number
	ARBITRUM: number
	SOLANA: number
	OPTIMISM: number
	POLYGON: number
	AVALANCHE: number
}

export interface Dai23 {
	ETHEREUM: number
	BSC: number
	POLYGON: number
}

export interface Usdc24 {
	ETHEREUM: number
	BSC: number
	ARBITRUM: number
	TRON: number
	SOLANA: number
	OPTIMISM: number
	POLYGON: number
}

export interface Wld2 {
	ETHEREUM: number
	OPTIMISM: number
}

export interface Saldo {
	BTC: Btc31
	DAI: Dai24
	USDT: Usdt28
}

export interface Btc31 {
	BITCOIN: number
}

export interface Dai24 {
	ETHEREUM: number
}

export interface Usdt28 {
	TRON: number
}

export interface FlowBtc {
	BTC: Btc32
	ETH: Eth29
	XRP: Xrp7
	EOS: Eos3
	LTC: Ltc11
}

export interface Btc32 {
	BITCOIN: number
}

export interface Eth29 {
	ETHEREUM: number
}

export interface Xrp7 {
	RIPPLE: number
}

export interface Eos3 {
	EOS: number
}

export interface Ltc11 {
	LITECOIN: number
}

export interface Bitcointoyou {
	BTC: Btc33
	ETH: Eth30
	USDC: Usdc25
	XRP: Xrp8
	USDT: Usdt29
	LTC: Ltc12
	PAXG: Paxg5
	LINK: Link7
	XLM: Xlm8
	DOGE: Doge7
	TRX: Trx7
	DAI: Dai25
	BAT: Bat3
	ADA: Ada10
	EOS: Eos4
	BNB: Bnb9
	AAVE: Aave6
	UNI: Uni7
	DOT: Dot8
	SHIB: Shib3
	SOL: Sol8
	AXS: Axs5
	SLP: Slp3
	CAKE: Cake2
	MANA: Mana5
	SAND: Sand3
}

export interface Btc33 {
	BITCOIN: number
	BSC: number
}

export interface Eth30 {
	ETHEREUM: number
	BSC: number
}

export interface Usdc25 {
	ETHEREUM: number
	BSC: number
}

export interface Xrp8 {
	RIPPLE: number
	BSC: number
}

export interface Usdt29 {
	ETHEREUM: number
	BSC: number
}

export interface Ltc12 {
	LITECOIN: number
	BSC: number
}

export interface Paxg5 {
	ETHEREUM: number
}

export interface Link7 {
	ETHEREUM: number
	BSC: number
}

export interface Xlm8 {
	STELLAR: number
	BSC: number
}

export interface Doge7 {
	DOGECOIN: number
	BSC: number
}

export interface Trx7 {
	TRON: number
	BSC: number
}

export interface Dai25 {
	ETHEREUM: number
	BSC: number
}

export interface Bat3 {
	ETHEREUM: number
	BSC: number
}

export interface Ada10 {
	CARDANO: number
	BSC: number
}

export interface Eos4 {
	EOS: number
	BSC: number
}

export interface Bnb9 {
	BSC: number
}

export interface Aave6 {
	ETHEREUM: number
	BSC: number
}

export interface Uni7 {
	ETHEREUM: number
	BSC: number
}

export interface Dot8 {
	POLKADOT: number
	BSC: number
}

export interface Shib3 {
	ETHEREUM: number
	BSC: number
}

export interface Sol8 {
	SOLANA: number
	BSC: number
}

export interface Axs5 {
	ETHEREUM: number
	BSC: number
}

export interface Slp3 {
	ETHEREUM: number
	BSC: number
}

export interface Cake2 {
	BSC: number
}

export interface Mana5 {
	ETHEREUM: number
	BSC: number
}

export interface Sand3 {
	ETHEREUM: number
	BSC: number
}

export interface SykloP2P {
	USDC: Usdc26
}

export interface Usdc26 {
	STELLAR: number
}

export interface Foxbit {
	BTC: Btc34
	XRP: Xrp9
	ADA: Ada11
	DOGE: Doge8
	DOT: Dot9
	AVAX: Avax8
	LTC: Ltc13
	XLM: Xlm9
	ETH: Eth31
	USDT: Usdt30
	USDC: Usdc27
	DAI: Dai26
}

export interface Btc34 {
	BITCOIN: number
}

export interface Xrp9 {
	RIPPLE: number
}

export interface Ada11 {
	CARDANO: number
}

export interface Doge8 {
	DOGECOIN: number
}

export interface Dot9 {
	POLKADOT: number
}

export interface Avax8 {
	AVALANCHE: number
}

export interface Ltc13 {
	LITECOIN: number
}

export interface Xlm9 {
	STELLAR: number
}

export interface Eth31 {
	ETHEREUM: number
}

export interface Usdt30 {
	ETHEREUM: number
}

export interface Usdc27 {
	ETHEREUM: number
}

export interface Dai26 {
	ETHEREUM: number
}

export interface PagCripto {
	BNB: Bnb10
	ETH: Eth32
	PAXG: Paxg6
	USDP: Usdp3
	MATIC: Matic14
	USDT: Usdt31
	TRX: Trx8
	USDC: Usdc28
	BTC: Btc35
}

export interface Bnb10 {
	BSC: number
}

export interface Eth32 {
	ETHEREUM: number
}

export interface Paxg6 {
	ETHEREUM: number
}

export interface Usdp3 {
	ETHEREUM: number
}

export interface Matic14 {
	POLYGON: number
}

export interface Usdt31 {
	ETHEREUM: number
	TRON: number
}

export interface Trx8 {
	TRON: number
}

export interface Usdc28 {
	ETHEREUM: number
	TRON: number
}

export interface Btc35 {
	ETHEREUM: number
}

export interface Eluter {
	BTC: Btc36
	ETH: Eth33
	USDT: Usdt32
	XRP: Xrp10
	DOT: Dot10
	DOGE: Doge9
	PAXG: Paxg7
	LTC: Ltc14
	CHZ: Chz3
}

export interface Btc36 {
	BITCOIN: number
	BSC: number
	ETHEREUM: number
	LN: number
}

export interface Eth33 {
	ETHEREUM: number
	ARBITRUM: number
	OPTIMISM: number
	BSC: number
	ZKSYNC: number
}

export interface Usdt32 {
	ETHEREUM: number
	BSC: number
	AVALANCHE: number
	SOLANA: number
	TRON: number
	ARBITRUM: number
	OPTIMISM: number
}

export interface Xrp10 {
	RIPPLE: number
	BSC: number
}

export interface Dot10 {
	POLKADOT: number
	BSC: number
}

export interface Doge9 {
	DOGECOIN: number
	BSC: number
}

export interface Paxg7 {
	ETHEREUM: number
}

export interface Ltc14 {
	LITECOIN: number
	BSC: number
}

export interface Chz3 {
	ETHEREUM: number
}

export interface PaxfulP2P {
	BTC: Btc37
	USDT: Usdt33
	USDC: Usdc29
}

export interface Btc37 {
	BITCOIN: number
}

export interface Usdt33 {
	ETHEREUM: number
	TRON: number
}

export interface Usdc29 {
	ETHEREUM: number
}

export interface AstroPay {
	BTC: Btc38
	ETH: Eth34
	USDC: Usdc30
	USDT: Usdt34
}

export interface Btc38 {
	BITCOIN: number
}

export interface Eth34 {
	ETHEREUM: number
}

export interface Usdc30 {
	ETHEREUM: number
}

export interface Usdt34 {
	ETHEREUM: number
}

export interface Banexcoin {
	BTC: Btc39
	USDC: Usdc31
}

export interface Btc39 {
	BITCOIN: number
}

export interface Usdc31 {
	ETHEREUM: number
}

export interface ElDoradoP2P {
	BTC: Btc40
	USDT: Usdt35
	USDC: Usdc32
}

export interface Btc40 {
	BITCOIN: number
}

export interface Usdt35 {
	TRON: number
}

export interface Usdc32 {
	POLYGON: number
}

export interface TruBit {
	BTC: Btc41
	ETH: Eth35
	USDT: Usdt36
	USDC: Usdc33
	XRP: Xrp11
	SOL: Sol9
	LTC: Ltc15
	MATIC: Matic15
	ADA: Ada12
	DOGE: Doge10
	DOT: Dot11
	AVAX: Avax9
}

export interface Btc41 {
	BITCOIN: number
}

export interface Eth35 {
	ETHEREUM: number
	BSC: number
	OPTIMISM: number
	ARBITRUM: number
}

export interface Usdt36 {
	ETHEREUM: number
	TRON: number
	BSC: number
	POLYGON: number
}

export interface Usdc33 {
	ETHEREUM: number
	BSC: number
	TRON: number
	STELLAR: number
}

export interface Xrp11 {
	RIPPLE: number
}

export interface Sol9 {
	SOLANA: number
}

export interface Ltc15 {
	LITECOIN: number
}

export interface Matic15 {
	POLYGON: number
}

export interface Ada12 {
	CARDANO: number
}

export interface Doge10 {
	DOGECOIN: number
}

export interface Dot11 {
	POLKADOT: number
}

export interface Avax9 {
	AVALANCHE: number
}

export interface BingXP2P {
	USDT: Usdt37
}

export interface Usdt37 {
	ETHEREUM: number
	TRON: number
	BSC: number
	SOLANA: number
	POLYGON: number
	ARBITRUM: number
	OPTIMISM: number
}

export interface Xapo {
	BTC: Btc42
	USDC: Usdc34
	USDT: Usdt38
}

export interface Btc42 {
	BITCOIN: number
	LN: number
}

export interface Usdc34 {
	ETHEREUM: number
}

export interface Usdt38 {
	ETHEREUM: number
}

export interface PlusCrypto {
	BTC: Btc43
	ETH: Eth36
	USDT: Usdt39
	USDC: Usdc35
	DAI: Dai27
	MATIC: Matic16
	SOL: Sol10
	BNB: Bnb11
}

export interface Btc43 {
	BSC: number
}

export interface Eth36 {
	BSC: number
}

export interface Usdt39 {
	BSC: number
}

export interface Usdc35 {
	BSC: number
}

export interface Dai27 {
	BSC: number
}

export interface Matic16 {
	BSC: number
}

export interface Sol10 {
	BSC: number
}

export interface Bnb11 {
	BSC: number
}

export interface Lnp2pBotP2P {
	BTC: Btc44
}

export interface Btc44 {
	LN: number
}

export interface PaydeceP2P {
	USDT: Usdt40
}

export interface Usdt40 {
	BSC: number
}

export interface Fluyez {
	BTC: Btc45
}

export interface Btc45 {
	BITCOIN: number
}

export interface BrasilBitcoin {
	BTC: Btc46
	ETH: Eth37
	USDT: Usdt41
}

export interface Btc46 {
	BITCOIN: number
}

export interface Eth37 {
	ETHEREUM: number
}

export interface Usdt41 {
	ETHEREUM: number
}

export interface MercadoBitcoin {
	BTC: Btc47
	ETH: Eth38
	USDT: Usdt42
	USDC: Usdc36
	DAI: Dai28
}

export interface Btc47 {
	BITCOIN: number
}

export interface Eth38 {
	ETHEREUM: number
}

export interface Usdt42 {
	ETHEREUM: number
}

export interface Usdc36 {
	ETHEREUM: number
}

export interface Dai28 {
	ETHEREUM: number
}

export interface Trubit {
	NUARS: Nuars3
}

export interface Nuars3 {
	POLYGON: number
}

export interface CocosCrypto {
	USDT: Usdt43
	USDC: Usdc37
	MATIC: Matic17
	BTC: Btc48
}

export interface Usdt43 {
	POLYGON: number
}

export interface Usdc37 {
	POLYGON: number
}

export interface Matic17 {
	POLYGON: number
}

export interface Btc48 {
	BITCOIN: number
}
