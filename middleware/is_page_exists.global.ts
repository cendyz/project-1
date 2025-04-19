import { useBankStore } from '~/store/bank'

export default defineNuxtRouteMiddleware(to => {
	const store = useBankStore()
	if (!store.pages.includes(to.path)) {
		return navigateTo('/404')
	}
})
