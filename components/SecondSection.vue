<template>
	<section class="bg-neutral-3 py-[7rem]">
		<div class="text-center container px-[2.2rem] lg:px-[3.5rem] xl:px-[7rem]">
			<h2 class="capitalize text-[3rem] md:text-[3.5rem]">latest articles</h2>
			<div class="mt-[3rem] grid gap-y-[3rem] md:grid-cols-2 md:gap-[2rem] xl:grid-cols-4 lg:gap-[5rem] xl:gap-[2rem]">
				<Carousel v-bind="carouselConfig">
					<Slide v-for="slide in 3" :key="slide"> </Slide>

					<template #addons>
						<Navigation />
						<Pagination />
					</template>
				</Carousel>
				<div
					class="rounded-lg overflow-hidden sm:w-[45rem] sm:mx-auto md:w-auto lg:h-[40.4rem] xl:h-auto"
					v-for="(item, index) in articlesData"
					:key="index">
					<NuxtImg :src="item.img" :alt="item.alt" class="block h-[27rem] w-full z-[10]" />
					<div
						class="p-[3rem] pb-[3.9rem mt-[-2.5rem] bg-neutral-4 z-[20] relative text-neutral-1 text-left grid gap-y-[1rem]">
						<p class="text-[1.1rem] xl:text-[1.2rem]">{{ item.quote }}</p>
						<h3
							class="text-primary-1 xl:text-[1.8rem] lg:hover:text-primary-2 lg:transition-colors lg:cursor-pointer lg:w-fit">
							{{ item.title }}
						</h3>
						<p class="text-[1.3rem] xl:text-[1.35rem]">{{ item.desc }}</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { ref } from 'vue'
import img1 from '/img/image-currency.jpg'
import img2 from '/img/image-restaurant.jpg'
import img3 from '/img/image-plane.jpg'
import img4 from '/img/image-confetti.jpg'

const carouselConfig = {
	itemsToShow: 3,
	wrapAround: true,
}

const articlesData = ref([
	{
		img: img1,
		quote: 'By Claire Robinson',
		title: 'Receive money in any currency with zero fees',
		desc: 'The world is more connected than ever, and mobility is the new normal. With BlueWallet, you can receive funds from anywhere...',
		alt: 'Money',
	},
	{
		img: img2,
		quote: 'By Wilson Hutton',
		title: 'Treat yourself without worrying about money',
		desc: 'Thanks to mWallet intuitive budgeting tools, you can enjoy life without financial stress. Easily split your spending...',
		alt: 'Restaurant',
	},
	{
		img: img3,
		quote: 'By Wilson Hutton',
		title: 'Take your mWallet card wherever you go',
		desc: 'Travel with confidence — mWallet won’t hit you with foreign transaction fees. Use your card worldwide and see real-time...',
		alt: 'Plane',
	},
	{
		img: img4,
		quote: 'By Claire Robinson',
		title: 'Our invite-only Beta accounts are now live!',
		desc: 'After months of development, we’re thrilled to open access to our exclusive Beta program. Be among the first to experience the future of ...',
		alt: 'Confetti',
	},
])
</script>

<style scoped></style>
