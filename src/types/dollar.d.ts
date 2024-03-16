export interface QueryDollarResponse {
	mayorista: Mayorista
	oficial: Oficial
	ahorro: Ahorro
	tarjeta: Tarjeta
	blue: Blue
	cripto: Cripto
	mep: Mep
	ccl: Ccl
}

export interface Mayorista {
	price: number
	variation: number
	timestamp: number
}

export interface Oficial {
	price: number
	variation: number
	timestamp: number
}

export interface Ahorro {
	ask: number
	bid: number
	variation: number
	timestamp: number
}

export interface Tarjeta {
	price: number
	variation: number
	timestamp: number
}

export interface Blue {
	ask: number
	bid: number
	variation: number
	timestamp: number
}

export interface Cripto {
	ccb: Ccb
	usdt: Usdt
	usdc: Usdc
}

export interface Ccb {
	ask: number
	bid: number
	variation: number
	timestamp: number
}

export interface Usdt {
	ask: number
	bid: number
	variation: number
	timestamp: number
}

export interface Usdc {
	ask: number
	bid: number
	variation: number
	timestamp: number
}

export interface Mep {
	al30: Al30
	gd30: Gd30
	lede: Lede
	bpo27: Bpo27
}

export interface Al30 {
	'48hs': N48hs
	'ci': Ci
}

export interface N48hs {
	price: number
	variation: number
	timestamp: number
}

export interface Ci {
	price: number
	variation: number
	timestamp: number
}

export interface Gd30 {
	'48hs': N48hs2
	'ci': Ci2
}

export interface N48hs2 {
	price: number
	variation: number
	timestamp: number
}

export interface Ci2 {
	price: number
	variation: number
	timestamp: number
}

export interface Lede {
	'name': string
	'48hs': N48hs3
	'ci': Ci3
}

export interface N48hs3 {
	price: number
	variation: number
	timestamp: number
}

export interface Ci3 {
	price: number
	variation: number
	timestamp: number
}

export interface Bpo27 {
	'48hs': N48hs4
	'ci': Ci4
}

export interface N48hs4 {
	price: number
	variation: number
	timestamp: number
}

export interface Ci4 {
	price: number
	variation: number
	timestamp: number
}

export interface Ccl {
	al30: Al302
	gd30: Gd302
	lede: Lede2
	bpo27: Bpo272
}

export interface Al302 {
	'48hs': N48hs5
	'ci': Ci5
}

export interface N48hs5 {
	price: number
	variation: number
	timestamp: number
}

export interface Ci5 {
	price: number
	variation: number
	timestamp: number
}

export interface Gd302 {
	'48hs': N48hs6
	'ci': Ci6
}

export interface N48hs6 {
	price: number
	variation: number
	timestamp: number
}

export interface Ci6 {
	price: number
	variation: number
	timestamp: number
}

export interface Lede2 {
	'name': string
	'48hs': N48hs7
	'ci': Ci7
}

export interface N48hs7 {
	price: number
	variation: number
	timestamp: number
}

export interface Ci7 {
	price: number
	variation: number
	timestamp: number
}

export interface Bpo272 {
	'48hs': N48hs8
	'ci': Ci8
}

export interface N48hs8 {
	price: number
	variation: number
	timestamp: number
}

export interface Ci8 {
	price: number
	variation: number
	timestamp: number
}
