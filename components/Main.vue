<template>
	<main class="w-full">
		<FirstSection />
		<BeforeSecond />
		<SecondSection />
		<Footer />
	</main>
</template>

<script setup lang="ts"></script>

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
