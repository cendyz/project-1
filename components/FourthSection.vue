<template>
	<section class="bg-neutral-3 py-[7rem] dark:bg-neutral-30">
		<div class="text-center container px-[2.2rem] lg:px-[3.5rem] xl:px-[7rem]">
			<h2 class="capitalize text-[3rem] md:text-[3.5rem] text-primary-1 dark:text-neutral-10">latest news</h2>
			<div class="mt-[3rem] grid gap-y-[3rem] md:grid-cols-2 md:gap-[2rem] xl:grid-cols-4 lg:gap-[5rem] xl:gap-[2rem]">
				<div
					class="rounded-lg overflow-hidden max-w-[45rem] mx-auto sm:mx-auto md:w-auto lg:h-[40.4rem] xl:h-auto hover:cursor-pointer lg:hover:scale-110 transition-transform duration-300 dark:border-[2px] "
					v-for="(item, index) in store.articles_data.slice(0, 4)"
					@click="goToArticle(index)"
					:key="index">
					<NuxtImg :src="item.img" :alt="item.alt" class="block h-[27rem] w-full z-[10]" />
					<div
						class="p-[3rem] pb-[3.9rem mt-[-2.5rem] bg-neutral-4 dark:bg-primary-1 z-[20] relative text-neutral-1 text-left grid gap-y-[1rem]">
						<p class="text-[1.1rem] xl:text-[1.2rem] dark:text-neutral-10">{{ item.quote }}</p>
						<h3
							class="text-primary-1 xl:text-[1.8rem] dark:text-neutral-4 lg:hover:text-primary-2 lg:transition-colors lg:cursor-pointer lg:w-fit">
							{{ item.title }}
						</h3>
						<p class="text-[1.3rem] xl:text-[1.35rem] md:h-[11rem] dark:text-neutral-10">{{ item.desc }}</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { useBankStore } from '~/store/bank'

const router = useRouter()
const store = useBankStore()

const goToArticle = (index: number): void => {
	router.push(`/news/${store.news[index]}`)
}
</script>