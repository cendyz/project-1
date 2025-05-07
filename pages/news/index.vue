<template>
	<header class="pb-[5rem] pt-[11rem] bg-neutral-3 dark:bg-neutral-21">
		<h1 class="uppercase text-primary-1 dark:text-primary-10 text-[5rem] px-[2rem] text-center font-w700">latest news</h1>
		<div class="py-[1rem] border-t-[2px] border-b-[2px] border-primary-2 dark:bg-neutral-40 dark:text-primary-10 bg-neutral-4 overflow-hidden mt-[2rem]">
			<NuxtMarquee class="px-[3rem] flex items-center justify-between min-w-full select-none">
				<p v-for="(item, index) in scroll_data" :key="index" class="flex-shrink-0 ml-[2rem]">
					<span class="font-w700">{{ item.title }}</span> {{ item.desc }}
				</p>
			</NuxtMarquee>
		</div>
	</header>
	<main class="bg-neutral-4 pt-[3rem] pb-[7rem] px-[3rem] grid gap-y-[3rem] lg:gap-y-[7rem] place-items-center dark:bg-neutral-21">
		<div
			v-for="(item, index) in store.articles_data"
			@click="goToArticle(index)"
			prefetch
			:key="index"
			class="rounded-lg overflow-hidden bg-neutral-2 dark:bg-neutral-40 dark:text-primary-10 max-w-[40rem] lg:flex lg:max-w-[110rem] lg:cursor-pointer border-[3px] border-transparent dark:border-neutral-4">
			<img :src="item.img" :alt="item.alt" class="lg:w-[40rem] lg:h-[30rem]" />
			<div class="p-[2rem]">
				<h2 class="font-w700 text-[2rem] lg:text-[3rem] lg:w-[40rem]">{{ item.title }}</h2>
				<p class="text-[1.4rem] mt-[1rem] lg:text-[1.6rem]">{{ item.desc }}</p>
			</div>
		</div>
	</main>
	<Footer />
</template>

<script setup lang="ts">
import { useBankStore } from '~/store/bank'

const router = useRouter()
const store = useBankStore()

const goToArticle = (index: number) => {
	router.push(`/news/${store.news[index]}`)
}

const scroll_data = ref<{ title: string; desc: string }[]>([
	{
		title: '✅ New Feature:',
		desc: 'Link multiple bank accounts with one click!',
	},
	{
		title: '🔐 Security Update:',
		desc: 'Your data is now protected with enhanced encryption.',
	},
	{
		title: '📱 Sync Across Devices:',
		desc: 'Access mWallet from phone, tablet or desktop.',
	},
	{
		title: '🌍 Multi-Currency Support:',
		desc: 'Now supporting 10+ currencies!',
	},
	{
		title: '📊 Dashboard Update:',
		desc: 'Cleaner, faster, more intuitive layout.',
	},
	{
		title: '💬 Need Help?',
		desc: 'Chat with support directly in the app!',
	},
])
</script>

<style lang="scss"></style>
