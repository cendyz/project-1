<template>
	<footer class="py-[4rem] bg-primary-1 xl:py-[6rem] lg:px-[3.5rem]">
		<div class="text-center lg:grid lg:grid-cols-3 lg:items-center container xl:px-[7rem]">
			<div class="flex flex-col items-center lg:items-start">
				<div class="flex items-center gap-x-[2rem]">
					<img :src="logo" alt="wallet" class="wallet w-[5rem] h-[5rem]" />
					<p class="font-w700 text-[2rem] sm:block text-neutral-2">mWallet</p>
				</div>
				<div class="xl:flex xl:flex-col xl:gap-y-[2rem] xl:items-start lg:mr-auto">
					<div class="flex justify-center gap-x-[1.5rem] my-[3.5rem] lg:mb-0">
						<a href="#" v-for="(item, index) in socialsData" :key="index" class="hoverIcon">
							<img :src="item.img" :alt="`${item.alt} icon`" class="w-[2.3rem] lg:brightness-15" />
						</a>
					</div>
				</div>
			</div>

			<div
				class="grid gap-y-[1rem] capitalize text-neutral-3 lg:grid-cols-2 lg:text-left lg:gap-y-[2rem] xl:translate-x-[-8rem]">
				<NuxtLink
					:to="`/${item}`"
					v-for="(item, index) in linksData"
					:key="index"
					class="lg:hover:text-primary-3 lg:transition-colors lg:w-fit"
					>{{ item }}</NuxtLink
				>
			</div>
			<div class="xl:flex xl:flex-col xl:justify-between">
				<p class="text-neutral-1 text-[1.4rem] mt-[3rem] text-right">
					© mWallet. All Rights Reserved {{ new Date().getFullYear() }}
				</p>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import logo from 'assets/images/logo.png'
import fb from 'assets/images/icon-facebook.svg'
import yt from 'assets/images/icon-youtube.svg'
import x from 'assets/images/icon-twitter.svg'
import pt from 'assets/images/icon-pinterest.svg'
import insta from 'assets/images/icon-instagram.svg'
import { NuxtLink } from '#components'

const linksData = ref<string[]>(['news', 'about', 'faq', 'contact'])

interface SocialData {
	img: string
	alt: string
}

const socialsData = ref<SocialData[]>([
	{
		img: fb,
		alt: 'facebook',
	},
	{
		img: yt,
		alt: 'youtube',
	},
	{
		img: x,
		alt: 'twitter',
	},
	{
		img: pt,
		alt: 'pinterest',
	},
	{
		img: insta,
		alt: 'instagram',
	},
])
</script>

<style scoped lang="scss">
@media (min-width: 1024px) {
	.hoverIcon {
		img {
			transition: filter 0.2s;
		}
		&:hover {
			img {
				filter: invert(54%) sepia(78%) saturate(1273%) hue-rotate(179deg) brightness(85%) contrast(90%);
			}
		}
	}

	.hoverButton {
		position: relative;
		overflow: hidden;
		z-index: 10;

		&::before {
			position: absolute;
			content: '';
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: white;
			z-index: -2;
			opacity: 0;
			transition: opacity 0.2s;
		}

		&:hover {
			&::before {
				opacity: 40%;
			}
		}
	}
}
</style>
