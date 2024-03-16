import { describe, it, expect } from 'vitest'
import { createClient } from '../src'

const criptoya = createClient()

describe('Query by cryptocurrency', () => {
	it('should resolve', async () => {
		await expect(
			criptoya.coin({
				coin: 'USDT',
				fiat: 'ARS',
			})
		).resolves.toBeTruthy()
	})

	it('should reject', async () => {
		await expect(
			criptoya.coin({
				coin: 'USDT',
				// @ts-expect-error
				fiat: 'XXX',
			})
		).rejects.toBeTruthy()
	})
})

describe('Query by exchange', () => {
	it('should resolve', async () => {
		await expect(
			criptoya.exchange({
				exchange: 'belo',
				coin: 'USDC',
				fiat: 'ARS',
			})
		).resolves.toBeTruthy()
	})
	it('should reject', async () => {
		await expect(
			criptoya.exchange({
				// @ts-expect-error
				exchange: 'XXX',
				coin: 'USDC',
				fiat: 'ARS',
			})
		).rejects.toBeTruthy()
	})
})

describe('Query dollar', () => {
	it('should resolve', async () => {
		await expect(criptoya.dollar()).resolves.toBeTruthy()
	})
})

describe('Query fees', () => {
	it('should resolve', async () => {
		await expect(criptoya.fees()).resolves.toBeTruthy()
	})
})

describe('Query cer', () => {
	it('should resolve', async () => {
		await expect(criptoya.cer()).resolves.toBeTruthy()
	})
})

describe('Query uva', () => {
	it('should resolve', async () => {
		await expect(criptoya.uva()).resolves.toBeTruthy()
	})
})

describe('Query banks', () => {
	it('should resolve', async () => {
		await expect(criptoya.banks()).resolves.toBeTruthy()
	})
})

describe('Query by bank', () => {
	it('should resolve', async () => {
		await expect(criptoya.bank('bbva')).resolves.toBeTruthy()
	})
	it('should reject', async () => {
		// @ts-expect-error
		await expect(criptoya.bank('XXX')).rejects.toBeTruthy()
	})
})
