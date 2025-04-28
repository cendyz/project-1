<template>
	<nav class="py-[2rem] bg-white w-full z-[1000] fixed lg:relative lg:top-0 lg:left-0 lg:w-full" ref="navMenu">
		<div
			class="px-[3rem] md:px-[5rem] flex justify-between lg:container relative lg:items-center lg:justify-between lg:px-[3.5rem] xl:px-[7rem]">
			<NuxtLink
				to="/"
				class="flex items-center gap-x-[1rem] select-none z-[50] hover:cursor-pointer"
				@click="store.isOpenMenu = false">
				<img :src="logo" class="w-[5rem] h-[5rem]" alt="logo easybank" />
				<p class="font-w700 text-[2rem] hidden sm:block" :class="store.isOpenMenu ? 'text-white' : 'text-[#2d314d]'">
					mWallet
				</p>
			</NuxtLink>
			<button
				type="button"
				@click="store.isOpenMenu = !store.isOpenMenu"
				aria-label="open close nav menu"
				class="lg:hidden">
				<img
					:src="store.isOpenMenu ? closeMenu : hamburger"
					:alt="store.isOpenMenu ? 'close menu' : 'open menu'"
					class="h-[3rem] z-[100]" />
			</button>
			<Transition>
				<div
					v-if="store.isOpenMenu"
					class="absolute top-[-3rem] md:px-[5rem] h-[103vh] w-full left-0 bg-primary-1 bg-opacity-90 p-[3rem] rounded-md lg:none text-white">
					<div class="flex items-center justify-between w-full">
						<button class="p-[1rem] pr-0 ml-auto">
							<img :src="closeMenu" alt="close menu" class="invert" @click="store.isOpenMenu = false" />
						</button>
					</div>
					<div class="mt-[5rem] grid gap-y-[1.5rem] justify-items-center max-w-[50rem] mx-auto">
						<NuxtLink
							:to="store.pages[index]"
							v-for="(item, index) in linksData"
							@click="store.isOpenMenu = false"
							:key="index"
							class="first-letter:uppercase uppercase font-w400 text-[2.3rem] border-t pt-[2rem] text-center w-full last:border-[3px] last:pb-[1rem] last:pt-[1.2rem] last:rounded-xl"
							>{{ item }}</NuxtLink
						>
					</div>
					<div class="flex justify-center gap-x-[2rem] my-[3.5rem] mt-[7rem]">
						<a href="#" v-for="(item, index) in socialsData" :key="index">
							<img :src="item.img" :alt="`${item.alt} icon`" class="w-[3rem] lg:brightness-15" />
						</a>
					</div>
				</div>
			</Transition>
			<div class="hidden lg:flex gap-x-[3.5rem]">
				<NuxtLink
					:active-class="store.pages[index] ? 'styleLink' : ''"
					:to="store.pages[index]"
					v-for="(item, index) in linksData"
					:key="index"
					class="first-letter:uppercase text-[1.5rem] text-neutral-1 lg:hover:text-black lg:transition-colors lg:relative lineHover lg:hover:cursor-pointer"
					>{{ item }}</NuxtLink
				>
			</div>
			<button
				type="button"
				class="hidden lg:block capitalize bg-gradient-to-r from-primary-2 to-primary-3 text-neutral-4 px-[2.8rem] py-[1.1rem] rounded-full font-w700 text-[1.4rem] lg:hover:opacity-60 lg:transition-opacity">
				request invite
			</button>
		</div>
	</nav>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useBankStore } from '~/store/bank'
import logo from '~/assets/images/logo.png'
import hamburger from '~/assets/images/icon-hamburger.svg'
import closeMenu from '~/assets/images/close_x.svg'
const { width } = useWindowSize()
import fb from 'assets/images/icon-facebook.svg'
import yt from 'assets/images/icon-youtube.svg'
import x from 'assets/images/icon-twitter.svg'
import pt from 'assets/images/icon-pinterest.svg'
import insta from 'assets/images/icon-instagram.svg'

const store = useBankStore()
const navMenu = ref()

const linksData = ref<string[]>(['home', 'news', 'about', 'faq', 'contact'])

const socialsData = ref([
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

watch(
	() => store.isOpenMenu,
	newValue => {
		if (newValue) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'visible'
		}
	}
)

watch(width, newValue => {
	if (newValue >= 1024) {
		store.isOpenMenu = false
	}
})
</script>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
	transition: opacity 0.1s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
@media (min-width: 1024px) {
	.lineHover {
		&::before {
			content: '';
			position: absolute;
			bottom: -3.2rem;
			left: 50%;
			transform: translateX(-50%);
			width: 0%;
			height: 3px;
			background-color: #3790d0;
			transition: width 0.2s;
			transform-origin: center;
		}

		&:hover {
			&::before {
				width: 100%;
			}
		}
	}

	.styleLink {
		color: #2d314d;
		&::before {
			width: 100%;
		}
	}
}
</style>
