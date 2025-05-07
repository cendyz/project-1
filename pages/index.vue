<template>
	<Header />
	<Main />
</template>

<script setup lang="ts">
import { useBankStore } from '~/store/bank'
const store = useBankStore()

function applyTheme(isLight: boolean) {
	document.body.style.backgroundColor = isLight ? '#2d314d' : '#f2f4f8'
}

onMounted(() => {
	applyTheme(store.isLight)

	watch(
		() => store.isLight,
		newValue => {
			applyTheme(newValue)
		}
	)
})
</script>

<style lang="scss">
* {
	transition: all 0.15s;
}
</style>
