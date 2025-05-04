<template>
	<header
		class="p-[3rem] py-[5rem] pt-[10rem] lg:h-[65rem] lg:pt-[11rem] bg-primary-1 text-neutral-4 pattern_bg xl:px-[7rem]">
		<div
			class="container lg:bg-primary-1 lg:bg-opacity-90 rounded-3xl lg:mt-[4rem] lg:w-[954px] xl:w-[1140px] lg:mx-auto 2xl:w-[1396px]">
			<div class="md:w-[50rem] md:mx-auto lg:flex lg:items-center lg:justify-center lg:w-auto">
				<img :src="dollar" alt="dollar" class="bounce w-[35rem] mx-auto lg:mx-0 lg:w-[43rem] xl:mr-[8rem]" />
				<div class="lg:w-[50rem]">
					<h1 class="font-w700 text-[3rem] text-center text-shadow-lg leading-[1.3] md:text-[3.3rem] lg:w-auto">
						Transforming <span class="niceColor">everyday</span> finances through personalized digital experiences.
					</h1>
					<div class="lg:w-[48rem] xl:w-auto">
						<p :class="textStyles">
							mWallet empowers everyone — from students and freelancers to small businesses and organizations — to
							manage money in a simple, fast, and secure way. Our platform lets users pay, save, plan, and grow from
							anywhere.
						</p>
						<p :class="textStyles">
							People choose mWallet to take full control of their finances and create modern, seamless experiences every
							day.
						</p>
					</div>
				</div>
			</div>
		</div>
	</header>
	<main>
		<section class="pt-[5rem]">
			<div class="px-[3rem] md:w-[50rem] md:mx-auto lg:w-[70rem]">
				<h2 class="text-[2.8rem] font-w700 md:text-[3rem] text-center">Redefining finance for the digital age.</h2>
				<p class="text-[1.7rem] mt-[2rem] text-justify">
					Explore the milestones that shaped mWallet — from launching our first seamless payment solution to introducing
					smart budgeting tools, advanced security features, and the innovations that continue to transform how people
					manage money every day.
				</p>
			</div>
			<div class="mt-[4rem] border-primary-gray border-b-[2px] sm:px-[10rem] sm:mx-auto lg:mt-[8rem]">
				<div
					class="flex flex-wrap gap-[3rem] lg:w-[80rem] lg:mx-auto items-center justify-center pb-[2rem]"
					:class="is_width && width >= 1024 ? 'line' : ''">
					<button
						@click=";(actualInfo = index), changeLinePosition(index)"
						v-for="(item, index) in dataYears"
						:key="index"
						class="px-[2rem] rounded-xl border-primary-2 py-[.5rem] sm:px-[2rem] border lg:hover:text-neutral-4 lg:hover:bg-primary-2 transition-colors duration-300"
						:class="actualInfo == index ? 'bg-primary-2 text-neutral-4' : 'text-primary-1'">
						{{ item }}
					</button>
				</div>
			</div>
			<div v-if="actualInfo != null" class="px-[4rem] pb-[4rem]">
				<ul class="text-left list-disc mt-[5rem] grid gap-y-[1rem] md:w-[50rem] md:mx-auto px-[3rem]">
					<li v-for="(item, index) in dataInfo[actualInfo]" :key="index">{{ item }}</li>
				</ul>
			</div>
		</section>
	</main>
	<Footer />
</template>

<script setup lang="ts">
import dollar from 'assets/images/dollar.png'

const is_width = ref(false)
const { width } = useWindowSize()

const actualInfo = ref<number | null>(0)
const actualLine = ref<string[]>(['5.7%', '25%', '44.3%', '63.2%', '82.3%'])

const changeLinePosition = (i: number): void => {
	document.documentElement.style.setProperty('--slide', actualLine.value[i])
}

const textStyles = 'text-justify text-[1.7rem] mt-[2rem]'
const dataYears = ['1982 - 1990', '1991 - 2000', '2001 - 2010', '2011 - 2020', '2011 - 2024']
const dataInfo = [
	[
		'The groundwork for digital finance is laid.',
		'Early experiments in electronic payments and secure data exchange take place.',
		'Foundations of what will become mobile banking begin to form.',
	],
	[
		'The internet reshapes access to financial services.',
		'Online banking becomes widely available.',
		'First mobile devices with basic financial apps appear on the market.',
		'Concepts like e-wallets and digital currencies gain early traction.',
	],
	[
		'Smartphones accelerate the shift toward mobile financial tools.',
		'Contactless payments and digital transfers become more mainstream.',
		'Security and encryption protocols improve dramatically.',
		'User expectations shift toward speed, accessibility, and control.',
	],
	[
		'The fintech revolution transforms how people interact with money.',
		'In 2018, mWallet is founded to simplify and humanize digital finance.',
		'In 2019, the first version of mWallet launches with seamless payments and real-time insights.',
	],
	[
		'mWallet introduces AI-powered budgeting and personalized financial insights.',
		'Biometric login and blockchain-based verification enhance user security.',
		'In 2023, mWallet reaches over a million active users.',
		'In 2024, features like smart subscriptions management and community-driven savings goals are launched.',
	],
]

onMounted(() => {
	is_width.value = true
})
</script>

<style lang="scss" scoped>
:root {
	--slide: 5.7%;
}

.niceColor {
	position: relative;
	overflow: hidden;
	background: -webkit-linear-gradient(90deg, rgba(18, 108, 167, 1) 0%, rgb(101, 160, 202) 59%);
	background-clip: initial;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.bounce {
	animation: bounce 6s infinite alternate linear;
}

.line {
	position: relative;
	&::before {
		position: absolute;
		content: '';
		bottom: 0;
		left: var(--slide);
		width: 6em;
		height: 4px;
		border-radius: 8px;
		background-color: royalblue;
		transition: left 0.2s;
	}
}

@keyframes bounce {
	from {
		transform: translateY(-4%);
	}

	to {
		transform: translateY(2%);
	}
}

@media (min-width: 1024px) {
	.pattern_bg {
		background-image: url('../assets/images/patternpad.png');
		background-size: cover;
	}
}
</style>
