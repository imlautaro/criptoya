import { ofetch, type $Fetch, type FetchOptions } from 'ofetch'
import {
	Bank,
	QueryBanksResponse,
	QueryCERAndUVAResponse,
	QueryDollarResponse,
	QueryFeesResponse,
	QueryCoinParams,
	QueryCoinResponse,
	QueryExchangeParams,
	QueryExchangeResponse,
} from './types'

export class CriptoYa {
	protected api: string
	protected fetch: $Fetch

	constructor() {
		this.api = 'https://criptoya.com/api'

		this.fetch = ofetch.create({
			baseURL: this.api,
			onResponse({ response }) {
				if (response._data === 'Invalid pair') {
					throw new Error('Invalid pair')
				}
			},
		})
	}

	coin(params: QueryCoinParams, options?: FetchOptions<'json'>) {
		const { coin: co, fiat: fi, volume: vo } = params
		const path = `/${co}/${fi}/${vo || ''}`
		return this.fetch<QueryCoinResponse>(path, options)
	}

	exchange(params: QueryExchangeParams, options?: FetchOptions<'json'>) {
		const { coin: co, fiat: fi, volume: vo, exchange: ex } = params
		const path = `/${ex}/${co}/${fi}/${vo || ''}`
		return this.fetch<QueryExchangeResponse>(path, options)
	}

	dollar(options?: FetchOptions<'json'>) {
		return this.fetch<QueryDollarResponse>('/dolar', options)
	}

	fees(options?: FetchOptions<'json'>) {
		return this.fetch<QueryFeesResponse>('/fees', options)
	}

	banks(options?: FetchOptions<'json'>) {
		return this.fetch<QueryBanksResponse>('/bancostodos', options)
	}

	bank(bank: Bank, options?: FetchOptions<'json'>) {
		return this.fetch<{
			ask: number
			totalAsk: number
			bid: number
			totalBid: number
			time: number
		}>(`/${bank}`, options)
	}

	cer(options?: FetchOptions<'json'>) {
		return this.fetch<QueryCERAndUVAResponse>('/cer', options)
	}

	uva(options?: FetchOptions<'json'>) {
		return this.fetch<QueryCERAndUVAResponse>('/uva', options)
	}
}

export const createClient = () => new CriptoYa()
