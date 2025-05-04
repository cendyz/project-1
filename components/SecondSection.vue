<template>
	<section class="grid p-[3rem] pb-[10rem]">
		<div>
			<div class="lg:w-[50rem] lg:mx-auto lg:text-center">
				<h2 class="capitalize text-[2.8rem] md:text-[3.5rem] mb-[2rem]">
					Over 20 Tools to Manage Your Finances. Unlimited Control.
				</h2>
				<p class="leading-[1.7]">
					Track your expenses in real time. Set smart budgets with just a few taps. Plan your savings goals and manage
					your money anywhere, anytime. With mWallet, your financial future is in your hands.
				</p>
			</div>
			<div
				class="grid gap-[3rem] mt-[5rem] sm:block sm:columns-2 lg:grid lg:grid-cols-2 grid_cols lg:w-[100rem] lg:mx-auto">
				<div
					class="border-[2px] border-primary-1 rounded-3xl lg:flex lg:items-center overflow-hidden mx-auto lg:max-w-[100%] lg:mx-0 max-w-[40rem] sm:mb-[3.5rem] lg:mb-0"
					data-aos="zoom-in-up"
					:data-aos-once="true"
					:delay="index * 200"
					:class="[item.my_class, item.img ? 'lg:flex-row ' : 'lg:flex-col']"
					v-for="(item, index) in grid_data"
					:key="index">
					<div class="p-[2rem] lg:m-auto lg:text-left">
						<h3 class="font-w700 mb-[2rem] text-[2rem]">{{ item.title }}</h3>
						<p class="">{{ item.desc }}</p>
					</div>
					<img v-if="item.img" :src="item.img" alt="phone" class="block lg:h-[30rem]" />
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
import second_img from 'assets/images/2.png'
import third_img from 'assets/images/3.png'
import six_img from 'assets/images/4.png'

interface GridData {
	title: string
	desc: string
	my_class: string
	img?: string
}

const grid_data = ref<GridData[]>([
	{
		title: 'Track Your Spending',
		desc: 'Monitor daily expenses and gain full control over your financial habits — in real time.',
		my_class: 'one text-white bg-primary-1',
	},
	{
		title: 'Set Smart Budgets',
		desc: 'Create personalized budgets and receive insights that help you stay on track with your financial goals.',
		img: second_img,
		my_class: 'two',
	},
	{
		title: 'Analyze Your Finances',
		desc: 'Visualize your income, expenses, and trends with intuitive graphs and detailed reports.',
		img: third_img,
		my_class: 'three',
	},
	{
		title: 'Connect Your Accounts',
		desc: 'Link your bank accounts securely and manage all your finances from one simple dashboard.',
		my_class: 'four text-white bg-primary-1',
	},
	{
		title: 'Plan Your Savings',
		desc: 'Set savings goals and watch your progress grow with automatic tracking and smart recommendations.',
		my_class: 'five text-white bg-primary-1',
	},
	{
		title: 'Stay Secure',
		desc: 'Your data is protected with bank-level encryption and strict privacy controls — your security is our priority.',
		img: six_img,
		my_class: 'six',
	},
])
</script>

<style lang="scss" scoped>
@media (min-width: 1024px) {
	.grid_cols {
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-areas:
			'one two two'
			'three three four'
			'five six six';
		gap: 3em;
	}

	.one {
		grid-area: one;
	}
	.two {
		grid-area: two;
	}
	.three {
		grid-area: three;
	}
	.four {
		grid-area: four;
	}
	.five {
		grid-area: five;
	}
	.six {
		grid-area: six;
	}
}
</style>
