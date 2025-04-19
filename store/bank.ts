import { defineStore } from 'pinia'

export const useBankStore = defineStore('bank', {
	state: () => ({
		isOpenMenu: false,
		pages: ['/', '/about', '/contact', '/blog', '/careers', '/404']
	}),
	actions: {
		func() {
			console.log('console log eheheh')
		},
	},
})
