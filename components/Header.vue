<template>
	<header class="bg-neutral-3 lg:overflow-x-clip lg:pb-0 dark:bg-neutral-30">
		<div
			class="container relative text-center pt-[9rem] sm:pt-[9rem] lg:pt-[11rem] lg:h-[65rem] lg:flex lg:px-[3.5rem] xl:px-[7rem]">
			<picture>
				<source :srcset="desktopIntro" media="(min-width: 640px)" />
				<NuxtImg
					:src="mobileIntro"
					alt=""
					aria-hidden="true"
					class="block w-full absolute sm:top-[8rem] lg:left-[50rem] xl:left-[55rem] lg:top-[-20rem] xl:top-[-26rem] lg:z-[0]" />
			</picture>
			<NuxtImg
				:src="wallet"
				alt="phone and wallet"
				class="block w-[calc(100%-3rem)] mx-auto lg:absolute top-0 z-[30] relative md:w-[70%] md:top-[5rem] lg:w-[47rem] xl:w-[55rem] lg:left-[80.5rem] xl:left-[99.5rem] lg:top-[55%] lg:translate-x-[-50%] lg:translate-y-[-50%] lg:z-[20] 2xl:left-[126rem]" />
			<div
				class="lg:py-[12rem] lg:text-left px-[2rem] lg:px-0 sm:w-[50rem] sm:mx-auto lg:mx-0 flex flex-col justify-center items-center h-[40rem] md:h-[70rem] lg:h-auto lg:items-start xl:px-0">
				<h1
					class="text-[4rem] leading-[1.1] mt-[-3rem] sm:mt-0 mb-[3rem] text-primary-1 md:text-[5rem] md:mx-auto lg:mt-0 lg:mx-0 lg:text-[6.5rem] lg:w-[50rem] sm:px-[2rem] md:w-auto md:px-0 dark:text-neutral-10">
					Next generation digital wallet
				</h1>
				<p
					class="text-[1.5rem] px-[1rem] text-neutral-1 md:text-[1.7rem] md:w-[47rem] md:mx-auto lg:mx-0 lg:px-0 lg:text-[1.82rem] md:px-0 lg:w-[43rem] dark:text-neutral-10">
					Take your finances to the next level. Your mWallet account is your all-in-one solution for managing payments,
					saving, tracking expenses, investing, and more.
				</p>
				<button
					type="button"
					class="mt-[4rem] bg-gradient-to-r from-primary-2 to-primary-3 text-neutral-4 px-[2.8rem] py-[1.1rem] rounded-full font-w700 text-[1.4rem] md:text-[1.6rem] lg:hover:opacity-60 lg:transition-opacity lg:dark:hover:opacity-100 lg:dark:hover:text-primary-1 lg:dark:transition-colors">
					Request Invite
				</button>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
import mobileIntro from '/img/bg-intro-mobile.png'
import desktopIntro from '/img/bg-intro-desktop.png'
import wallet from '/img/mockup.png'
</script>
