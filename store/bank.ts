import { defineStore } from 'pinia'

export const useBankStore = defineStore('bank', {
	state: () => ({
		isOpenMenu: false,
		pages: ['/', '/news', '/about', '/faq', '/contact', '/404'],
	}),
	actions: {
		
	},
})
