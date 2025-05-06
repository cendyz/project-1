<template>
	<main class="flex justify-center items-center h-[70rem]">
		<div class="grid gap-y-[5rem] text-center">
			<h1 class="text-red font-w700 text-primary-red text-[9rem]">Error 404</h1>
			<p class="text-[3rem] dark:text-primary-10">Page not found</p>
		</div>
	</main>
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
			if (newValue) {
				document.body.style.backgroundColor = '#2d314d'
			} else {
				document.body.style.backgroundColor = '#f2f4f8'
			}
		},
		{ immediate: true }
	)
})
</script>
