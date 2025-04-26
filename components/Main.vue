<template>
	<main class="w-full">
		<FirstSection />
		<SecondSection />
		<Footer />
	</main>
</template>

<script setup lang="ts">
import { useBankStore } from '~/store/bank'

const store = useBankStore()
</script>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
	transition: opacity 0.4s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
