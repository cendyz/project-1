<template>
	<div v-if="isReady">
		<NuxtLayout />
		<NuxtPage />
	</div>
</template>

<script setup lang="ts">
const isReady = ref<boolean>(false)

onMounted(() => {
	// pozwól DOM się zaktualizować po pluginie
	requestAnimationFrame(() => {
		isReady.value = true
	})
})
</script>

<style lang="scss">
@use '@/assets/sass/reset.scss';
</style>
