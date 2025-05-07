<template>
	<NuxtLayout />
	<NuxtPage />
</template>

<script setup lang="ts">
onMounted(() => {
	document.body.style.overflow = 'hidden'
})
</script>

<style lang="scss">
@use '@/assets/sass/reset.scss';
</style>
