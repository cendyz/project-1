<template>
	<nav
		class="px-[3rem] lg:px-0 py-[2rem] bg-white w-full relative z-[1000] lg:fixed lg:top-0 lg:left-0 lg:w-full"
		ref="navMenu">
		<div class="flex justify-between relative container lg:items-center lg:justify-between lg:px-[3.5rem] xl:px-[7rem]">
			<NuxtLink to="/" class="flex items-center gap-x-[1rem] select-none hover:cursor-pointer">
				<img :src="logo" class="w-[5rem] h-[5rem] z-[50]" alt="logo easybank" />
				<p class="font-w700 text-[2rem] hidden sm:block text-[#2d314d]">mWallet</p>
			</NuxtLink>
			<button
				type="button"
				@click="store.isOpenMenu = !store.isOpenMenu"
				aria-label="open close nav menu"
				class="lg:hidden">
				<img
					:src="store.isOpenMenu ? closeMenu : hamburger"
					:alt="store.isOpenMenu ? 'close menu' : 'open menu'"
					class="h-[1.8rem] z-[100]"
					:class="store.isOpenMenu ? 'w-[2rem] h-[2.1rem]' : 'w-[2.8rem]'" />
			</button>
			<Transition>
				<div
					v-if="store.isOpenMenu"
					class="absolute top-[9.5rem] w-[calc(100%-4.4rem)] left-1/2 translate-x-[-50%] justify-items-center bg-neutral-4 grid gap-y-[1.5rem] py-[3rem] rounded-md lg:none">
					<NuxtLink
						:to="store.pages[index]"
						v-for="(item, index) in linksData"
						@click="store.isOpenMenu = false"
						:key="index"
						class="first-letter:uppercase text-[1.8rem] w-fit"
						>{{ item }}</NuxtLink
						
					>
				</div>
			</Transition>
			<div class="hidden lg:flex gap-x-[3.5rem]">
				<NuxtLink
					@click="console.log(store.pages[index])"
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
import closeMenu from '~/assets/images/icon-close.svg'



const store = useBankStore()
const navMenu = ref()

const linksData = ref<string[]>(['home', 'about', 'contact', 'careers', 'articles'])

const handleCloseOutside = (e: Event): void => {
	if (navMenu.value && !navMenu.value.contains(e.target)) {
		store.isOpenMenu = false
	}
}

watch(
	() => store.isOpenMenu,
	newValue => {
		if (newValue) {
			document.addEventListener('click', handleCloseOutside)
		} else {
			document.removeEventListener('click', handleCloseOutside)
		}
	}
)
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
		&::before {
			width: 100%;
		}
	}
}
</style>
