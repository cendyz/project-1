<template>
	<Transition>
		<div v-if="store.isLoaded" class="absolute top-0 left-0 w-full h-[1000vh] bg-neutral-4 z-[10000]"></div>
	</Transition>
	<nav
		class="py-[2rem] dark:border-b-[2px] w-full z-[1000] fixed lg:w-full bg-neutral-4 dark:bg-neutral-40"
		ref="navMenu">
		<div
			class="px-[3rem] md:px-[5rem] flex justify-between lg:container relative lg:items-center lg:justify-between lg:px-[3.5rem] xl:px-[7rem]">
			<NuxtLink
				to="/"
				class="flex items-center gap-x-[1rem] select-none z-[50] hover:cursor-pointer"
				@click="store.isOpenMenu = false">
				<img :src="logo" class="w-[5rem] h-[5rem]" alt="logo easybank" />
				<p
					class="font-w700 text-[2rem] hidden sm:block"
					:class="store.isOpenMenu ? 'text-neutral-4' : 'text-primary-1 dark:text-neutral-4'">
					mWallet
				</p>
			</NuxtLink>
			<div class="flex items-center gap-x-[2rem] lg:hidden">
				<button aria-label="change theme" @click="change_theme">
					<img
						:src="isClient && my_theme ? moon : sun"
						:alt="isClient && my_theme ? 'moon' : 'sun'"
						:class="isClient && !my_theme && 'white_moon'"
						class="w-[2.5rem] h-[2.5rem]" />
				</button>
				<button type="button" @click="store.isOpenMenu = !store.isOpenMenu" aria-label="open close nav menu">
					<img
						:src="store.isOpenMenu ? closeMenu : hamburger"
						:alt="store.isOpenMenu ? 'close menu' : 'open menu'"
						class="h-[3rem] z-[100]"
						:class="isClient && !my_theme && 'light_burger'" />
				</button>
			</div>
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
					:active-class="store.pages[index] ? 'styleLink text-primary-1 dark:text-neutral-4' : ''"
					:to="store.pages[index]"
					v-for="(item, index) in linksData"
					:key="index"
					class="first-letter:uppercase text-[1.5rem] text-neutral-1 lg:hover:text-primary-1 dark:lg:hover:text-neutral-4 lg:transition-colors lg:relative lineHover lg:cursor-pointer"
					>{{ item }}</NuxtLink
				>
			</div>
			<div class="items-center gap-x-[2rem] hidden lg:flex">
				<button aria-label="change theme" @click="change_theme">
					<img
						:src="isClient && my_theme ? moon : sun"
						:alt="isClient && my_theme ? 'moon' : 'sun'"
						:class="isClient && !my_theme && 'white_moon'"
						class="w-[2.5rem] h-[2.5rem]" />
				</button>
				<button
					type="button"
					class="capitalize bg-gradient-to-r from-primary-2 to-primary-3 text-neutral-4 px-[2.8rem] py-[1.1rem] rounded-full font-w700 text-[1.4rem] lg:hover:opacity-60 lg:dark:hover:opacity-100 lg:dark:hover:text-primary-1 lg:dark:transition-colors lg:transition-opacity">
					request invite
				</button>
			</div>
		</div>
	</nav>
	<div
			v-if="cookies && rejected_cookie" :class="cookies && rejected_cookie ? 'z-[100]' : 'z-[-100]'"
			class="fixed p-[2rem] bottom-[5%] left-[5%] bg-white w-[90%]  max-w-[40rem] rounded-lg">
			<h5 class="text-[2rem]">🍪 Cookie Notice</h5>
			<p class="my-[2rem]">
				We use our own cookies so that we can show you this website and understand how you use them to improve the
				services we offer.
			</p>
			<div class="flex justify-center gap-x-[3rem]">
				<button :class="btnStyles" class="border-[#dc2626] lg:hover:bg-primary-red" @click="rejected_cookie = false">
					Reject
				</button>
				<button :class="btnStyles" class="border-[#126ca7] lg:hover:bg-primary-2" @click="cookies = false">
					Accept
				</button>
			</div>
		</div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useBankStore } from '~/store/bank'
import { useStorage } from '@vueuse/core'
import logo from '~/assets/images/logo.png'
import hamburger from '~/assets/images/icon-hamburger.svg'
import closeMenu from '~/assets/images/close_x.svg'
const { width } = useWindowSize()
import fb from 'assets/images/icon-facebook.svg'
import yt from 'assets/images/icon-youtube.svg'
import x from 'assets/images/icon-twitter.svg'
import pt from 'assets/images/icon-pinterest.svg'
import insta from 'assets/images/icon-instagram.svg'
import sun from 'assets/images/sun.svg'
import moon from 'assets/images/moon.svg'

const store = useBankStore()
const navMenu = ref()

const my_theme = useStorage('my-theme', false)
const isClient = ref(false)

const cookies = useStorage('cookie', true)
const rejected_cookie = ref<boolean>(true)
const btnStyles = 'px-[3rem] py-[.5rem] border-[2px] transition-colors lg:hover:text-neutral-4 duration-300'

const change_theme = (): void => {
	my_theme.value = !my_theme.value
	store.isLight = !my_theme.value

	if (!my_theme.value) {
		document.documentElement.classList.remove('light')
		document.documentElement.classList.add('dark')
	} else {
		document.documentElement.classList.remove('dark')
		document.documentElement.classList.add('light')
	}
}

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

onMounted(() => {
	isClient.value = true
	store.isLight = !my_theme.value

	if (!my_theme.value) {
		document.documentElement.classList.remove('light')
		document.documentElement.classList.add('dark')
	} else {
		document.documentElement.classList.remove('dark')
		document.documentElement.classList.add('light')
	}

	setTimeout(() => {
		store.isLoaded = false
		document.body.style.overflow = 'visible'
	}, 50)
})
</script>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
	transition: opacity 0.2s ease;
}

.light_burger {
	filter: invert(100%) sepia(0%) saturate(2987%) hue-rotate(35deg) brightness(113%) contrast(90%);
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}

.white_moon {
	filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(344deg) brightness(106%) contrast(101%);
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
		&::before {
			width: 100%;
		}
	}
}
</style>
