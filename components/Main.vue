<template>
	<main class="w-full">
		<FirstSection />
		<SecondSection />
		<ThirdSection />
		<FourthSection />
		<Footer />
	</main>
</template>

<script setup lang="ts">
import { useStorage } from '@vueuse/core'

const cookies = useStorage('cookie', true)
const rejected_cookie = ref<boolean>(true)
const btnStyles = 'px-[3rem] py-[.5rem] border-[2px] transition-colors lg:hover:text-neutral-4 duration-300'
</script>
