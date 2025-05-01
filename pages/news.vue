<template>
	<header class="pb-[5rem] pt-[11rem]">
		<h1 class="uppercase text-primary-1 text-[5rem] px-[2rem] text-center font-w700">latest news</h1>
		<div class="py-[1rem] border-t-[2px] border-b-[2px] border-primary-2 bg-neutral-4 overflow-hidden mt-[2rem]">
			<NuxtMarquee class="px-[3rem] flex items-center justify-between min-w-full select-none">
				<p v-for="(item, index) in scroll_data" :key="index" class="flex-shrink-0 ml-[2rem]">{{ item }}</p>
			</NuxtMarquee>
		</div>
	</header>
	<main class="bg-neutral-2 pt-[3rem] pb-[7rem] px-[3rem] grid gap-y-[3rem]">
		<div v-for="(item, index) in articlesData" :key="index" class="rounded-lg overflow-hidden bg-neutral-4">
			<img :src="item.img" :alt="item.alt" />
			<div class="p-[2rem]">
				<h2 class="font-w700 text-[2rem]">{{ item.title }}</h2>
				<p class="text-[1.4rem] mt-[1rem]">{{ item.desc }}</p>
			</div>
		</div>
	</main>
</template>

<script setup>
import img1 from '/img/image-currency.jpg'
import img2 from '/img/image-restaurant.jpg'
import img3 from '/img/image-plane.jpg'
import img4 from '/img/image-confetti.jpg'

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

const scroll_data = ref([
	'✅ New Feature',
	'🔐 Security Update',
	'📱 Sync Across Device',
	'🌍 Now Supporting 10+ Currencies!',
	'📊 New Dashboard Layout',
	'💬 Need help? Chat with support directly in the app!',
])
</script>

<style lang="scss"></style>
