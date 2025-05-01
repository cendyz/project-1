<template>
	<section class="relative">
		<ClientOnly>
			<swiper-container
				ref="containerRef"
				:loop="true"
				autoplay-delay="5000"
				class="p-[2rem] pt-[4rem] pb-[7rem] mb-[9rem] bg-primary-1 sm:w-[60rem] sm:mx-auto sm:rounded-3xl">
				<swiper-slide
					v-for="(slide, idx) in slides"
					:key="idx"
					class="py-[4rem] px-[2rem] text-center flex flex-col text-neutral-4">
					<h4 class="mb-[2rem] font-w700 text-[2.2rem]">{{ slide.title }}</h4>
					<p>{{ slide.desc }}</p>
				</swiper-slide>
			</swiper-container>
		</ClientOnly>
		<div class="absolute bottom-[2rem] left-1/2 translate-x-[-50%] flex gap-x-[2rem] z-[100]">
			<button @click="swiper.prev()" aria-label="prev"><img :src="right" alt="" class="bright" /></button>
			<button @click="swiper.next()" aria-label="next"><img :src="left" alt="" class="bright" /></button>
		</div>
	</section>
</template>

<script setup>
import right from 'assets/images/left_circle.svg'
import left from 'assets/images/right_circle.svg'

const containerRef = ref(null)
const slides = ref([
	{
		title: 'Your Money. Your Rules.',
		desc: 'Take control of your finances with real-time tracking and smart planning tools.',
	},
	{
		title: 'All Your Accounts in One Place',
		desc: 'Securely connect your bank accounts and manage everything from a single dashboard.',
	},
	{
		title: 'Budget Better. Stress Less.',
		desc: 'Set monthly budgets and stay on track with spending insights and notifications.',
	},
	{
		title: 'Safe. Simple. Powerful.',
		desc: 'Your data is encrypted. Your experience is seamless. Your wallet, upgraded.',
	},
])
const swiper = useSwiper(containerRef)
</script>

<style lang="scss">
.bright {
	filter: invert(94%) sepia(100%) saturate(25%) hue-rotate(63deg) brightness(107%) contrast(100%);
}
</style>
