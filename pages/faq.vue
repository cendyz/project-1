<template>
	<header class="relative">
		<div
			class="container pt-[15rem] py-[7rem] lg:pt-[11rem] lg:h-[50rem] p-[3rem] lg:px-[3.5rem] xl:px-[7rem] lg:text-center lg:flex lg:justify-center lg:items-center">
			<p class="px-[1.2rem] lg:mt-[5rem] py-[.5rem] border-primary-3 border rounded-3xl w-fit lg:hidden">FAQs</p>
			<div class="mt-[2rem]">
				<label for="question" class="text-[4rem] text-primary-1 dark:text-primary-10 lg:text-[5rem] z-[100] relative"
					>What can we help you find?</label
				>
				<input
					type="text"
					id="question"
					class="block mt-[3rem] w-full p-[1rem] rounded-md border border-primary-3 bg-neutral-4 z-[100] relative lg:w-[40rem] lg:mx-auto"
					v-model.trim="input_data.user_print" />
			</div>
		</div>
		<div class="bg" :class="store.isLight ? 'dark_bg' : 'light_bg'"></div>
	</header>
	<main class="px-[3rem] py-[10rem] lg:px-[3.5rem] xl:px-[7rem] bg-neutral-3 dark:bg-neutral-21">
		<div
			class="pt-[2rem] mt-[2.8rem] border-t container border-primary-2 text-primary-1 lg:first:mt-0 lg:w-[40%] lg:mx-auto dark:text-primary-11 sm:w-[70rem] mx-auto"
			v-for="(item, index) in new_faq_data"
			:ref="el => show_animation(el)"
			:key="index">
			<div class="flex justify-between items-center">
				<p>{{ item.question }}</p>
				<button aria-label="show question" @click="handle_answer(index)">
					<img
						:src="is_hidden == index ? minus : plus"
						:alt="is_hidden == index ? 'hide answer' : 'show answer'"
						:class="store.isLight && 'dark_img'" />
				</button>
			</div>
			<p class="text-primary-2 dark:text-primary-3 mt-[2rem]" v-if="is_hidden == index">
				{{ item.answer }}
			</p>
		</div>
	</main>
	<Footer />
</template>

<script setup lang="ts">
import autoAnimate from '@formkit/auto-animate'
import minus from 'assets/images/minus.svg'
import plus from 'assets/images/plus.svg'
import { useBankStore } from '~/store/bank'
const store = useBankStore()

const is_hidden = ref<null | number>(null)
const input_data = ref<{ user_print: string }>({
	user_print: '',
})

const show_animation = (el: Element | ComponentPublicInstance | null): void => {
	if (el instanceof HTMLElement) {
		autoAnimate(el)
	}
}

const handle_answer = (i: number): void => {
	is_hidden.value = is_hidden.value === i ? null : i
}

const new_faq_data = computed(() => {
	return faq_data.value.filter(item => item.question.toLowerCase().includes(input_data.value.user_print.toLowerCase()))
})

onMounted(() => {
	setTimeout(() => {
		store.isLoaded = false
		document.body.style.overflow = 'visible'
	}, 50)
})

const faq_data = ref([
	{
		question: '1. Is mWallet free to use?',
		answer:
			'Yes! We offer a free version of mWallet with all essential features. For users who need more advanced tools, we also provide a Premium version.',
	},
	{
		question: '2. Is my financial data secure with mWallet?',
		answer: 'Absolutely. We use bank-level encryption and perform regular security audits to keep your data safe.',
	},
	{
		question: '3. Can I connect mWallet to my bank account?',
		answer:
			'Yes, mWallet allows you to securely link your bank accounts to automatically import transactions and update your balance.',
	},
	{
		question: '4. Can I use mWallet on multiple devices?',
		answer:
			'Yes, you can access mWallet through our mobile app (available for iOS and Android) and via the web on your desktop.',
	},
	{
		question: '5. Can I set custom budgets and goals?',
		answer:
			'Of course! mWallet lets you create personalized budgets and set financial goals, helping you track your progress over time.',
	},
	{
		question: '6. What happens if I forget my password?',
		answer:
			"No worries — simply click “Forgot Password” on the login screen, and we'll send instructions to your email to reset it.",
	},
	{
		question: '7. Does mWallet support multiple currencies?',
		answer:
			'Yes, mWallet supports multiple currencies and automatically converts values based on real-time exchange rates.',
	},
	{
		question: '8. Can I categorize my expenses?',
		answer:
			'Yes, you can easily assign transactions to different categories, making it simple to understand where your money goes.',
	},
	{
		question: '9. Is there a limit to the number of accounts I can add?',
		answer: 'No, with mWallet you can add as many bank accounts, credit cards, and wallets as you need.',
	},
	{
		question: '10. Does mWallet offer reminders for upcoming bills?',
		answer: 'Yes! You can set up bill reminders so you never miss a due date again.',
	},
	{
		question: '11. How do I upgrade to mWallet Premium?',
		answer:
			'You can upgrade anytime through the app settings or on our website. Premium unlocks additional features like advanced analytics and priority support.',
	},
	{
		question: '12. How can I contact mWallet support?',
		answer:
			'You can reach our support team via the contact form on our website or by emailing us directly at support@mwallet.com.',
	},
])
</script>

<style lang="scss" scoped>
.bg {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.light_bg {
	background-image: url('../assets/images/brushed_alu.webp');
}

.dark_bg {
	background-image: url('../assets/images/vintage-wallpaper.png');
}

.dark_img {
	filter: invert(89%) sepia(6%) saturate(242%) hue-rotate(196deg) brightness(103%) contrast(79%);
}
</style>
