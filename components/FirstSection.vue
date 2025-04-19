<template>
	<section
		class="bg-neutral-2 py-[11rem] px-[2.2rem] text-center text-neutral-1 text-[1.5rem] md:text-[1.6rem] lg:z-[9] md:relative">
		<div class="container lg:px-[3.5rem] xl:px-0">
			<h2 class="text-[3rem] font-w700 leading-[1.2] mb-[2.2rem] px-[1rem] text-primary-1 md:text-[3.5rem] lg:px-0">
				Why choose mWallet?
			</h2>
			<p class="sm:w-[38rem] text-primary-1 px-[2rem] mt-[2rem] leading-[2] sm:mx-auto lg:w-[57rem] lg:mx-auto">
				With seamless digital integration, BlueWallet transforms your phone into a smart financial command center.
				Manage money intuitively and securely.
			</p>
			<div
				class="mt-[7rem] grid gap-y-[3rem] lg:grid lg:grid-cols-2 lg:gap-y-[6rem] xl:flex xl:justify-items-center xl:flex-wrap lg:w-[90rem] lg:mx-auto">
				<div
					data-aos="zoom-in"
					data-aos-once="true"
					data-aos-duration="700"
					v-for="(item, index) in profitsData"
					class="bg-neutral-3 p-[2rem] border-[2px] rounded-xl border-primary-2 max-w-[45rem] mx-auto lg:w-auto z-[10]"
					:key="index">
					<div class="p-[2rem]">
						<img :src="item.img" :alt="item.title" class="block mx-auto w-[7rem] h-[7rem] md:w-[8rem] md:h-[8rem]" />
						<h3 class="text-primary-1 text-[2.5rem] font-w700 my-[2rem] md:text-[2.2rem]">{{ item.title }}</h3>
						<ul
							class="text-left text-primary-1 sm:w-[35rem] sm:mx-auto lg:w-[30rem] lg:mx-0 list-disc grid gap-y-[2rem]">
							<li>Lorem ipsum dolor sit amet con se cte tur adi pisic ing elit. Eligendi, quae. Lorem, ipsum.</li>
							<li>Lorem ipsum dolor sit amet con se cte tur adi pcs icing elit. Eligendi, quae. Lorem, ipsum.</li>
						</ul>
						<div class="flex justify-between items-center mt-[3rem]">
							<button
								type="button"
								class="bg-gradient-to-r from-primary-2 to-primary-3 text-neutral-4 px-[2.8rem] py-[1.1rem] rounded-full font-w700 text-[1.4rem] md:text-[1.6rem] lg:hover:opacity-60 lg:transition-opacity">
								Check
							</button>
							<button
								type="button"
								class="underline italic rounded-full font-w700 md:text-[1.6rem] text-[1.1rem] lawHover">
								law note
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<img :src="icon1" alt="" aria-hidden="true" :class="iconStyles" class="top-[10%] left-[10%] rotate-12 animeSpin" />
		<img
			:src="icon2"
			alt=""
			aria-hidden="true"
			:class="iconStyles"
			class="right-0 top-1/2 rotate-45 animeSpin 2xl:right-[12%]" />
		<img
			:src="icon3"
			alt=""
			aria-hidden="true"
			:class="iconStyles"
			class="bottom-[2%] left-[-2%] rotate-6 animeSpinRight xl:left-2 2xl:left-[7%] 2xl:bottom-[13%]" />
	</section>
</template>

<script setup lang="ts">
import img1 from 'assets/images/icon-online.svg'
import img2 from 'assets/images/icon-budgeting.svg'
import img3 from 'assets/images/icon-onboarding.svg'
import img4 from 'assets/images/icon-api.svg'
import icon1 from 'assets/images/icon1.svg'
import icon2 from 'assets/images/icon2.svg'
import icon3 from 'assets/images/icon3.svg'
import { ref } from 'vue'

const profitsData = ref([
	{
		img: img1,
		title: 'All-in-one Banking',
		// desc: 'Access your funds anytime, anywhere. Our responsive platform works smoothly across both web and mobile.',
	},
	{
		img: img2,
		title: 'Smart Budgeting',
		// desc: 'Stay on top of your spending with real-time insights and instant alerts when you approach your budget goals.',
	},
	{
		img: img3,
		title: 'Instant Setup',
		// desc: 'Get started in just a few clicks. No paperwork, no queues—your wallet is ready when you are.',
	},
	{
		img: img4,
		title: 'Connected Tools',
		// desc: 'Sync savings, payments, crypto, and more—all in one place. Managing your finances has never been this connected.',
	},
])

const iconStyles = 'hidden absolute lg:block opacity-[10%] w-[20rem] z-[1] 2xl:w-[30rem]'
</script>

<style scoped lang="scss">
.lawHover {
	position: relative;
	&::before {
		position: absolute;
		content: 'Lorem ipsum dolor sit amet con se cte tur lorem lorem';
		padding: 1.1rem;
		border-radius: 7px;
		border: 2px solid #3790d0;
		top: -400%;
		left: 50%;
		transform: translateX(-50%);
		width: 300%;
		height: auto;
		background-color: white;
		z-index: -1;
		opacity: 0;
		font-size: 1.4rem;
		transition: opacity 0.2s;
		color: black;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
	}
	&:focus {
		&::before {
			opacity: 1;
			z-index: 1;
		}
	}
}

.animeSpin {
	animation: spin 90s infinite;
}

.animeSpinRight {
	animation: spinRight 90s infinite;
}

@keyframes spin {
	to {
		rotate: 360deg;
	}
}

@keyframes spinRight {
	to {
		rotate: -360deg;
	}
}
</style>
