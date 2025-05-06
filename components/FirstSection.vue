<template>
	<section
		class="bg-neutral-2 dark:bg-neutral-20 py-[11rem] px-[2.2rem] text-center text-neutral-1 dark:text-neutral-10 text-[1.5rem] md:text-[1.6rem] lg:z-[9] relative">
		<div class="container lg:px-[3.5rem] xl:px-0">
			<h2
				class="text-[3rem] font-w700 leading-[1.2] mb-[2.2rem] px-[1rem] text-primary-1 dark:text-neutral-10 md:text-[3.5rem] lg:px-0">
				Why choose mWallet?
			</h2>
			<p
				class="sm:w-[38rem] text-primary-1 dark:text-primary-10 px-[2rem] mt-[2rem] leading-[2] sm:mx-auto lg:w-[55rem] lg:mx-auto">
				With seamless digital integration, BlueWallet transforms your phone into a smart financial command center.
				Manage money intuitively and securely.
			</p>
			<div
				class="mt-[7rem] grid gap-y-[3rem] lg:grid lg:grid-cols-2 lg:gap-y-[6rem] xl:flex xl:justify-items-center xl:flex-wrap lg:w-[90rem] lg:mx-auto">
				<div
					data-aos="zoom-in-up"
					:data-aos-once="true"
					:data-aos-duration="400"
					:delay="index * 200"
					v-for="(item, index) in profitsData"
					class="bg-neutral-3 dark:bg-neutral-30 bg-opacity-50 p-[2rem] border lg:border-[2px] rounded-xl lg:border-primary-2 dark:border-primary-1 max-w-[45rem] mx-auto lg:w-auto z-[10]"
					:key="index">
					<div class="p-[2rem]">
						<img :src="item.img" :alt="item.title" class="block mx-auto w-[7rem] h-[7rem] md:w-[8rem] md:h-[8rem]" />
						<h3 class="text-primary-1 dark:text-primary-10 text-[2.5rem] font-w700 my-[2rem] md:text-[2.2rem]">
							{{ item.title }}
						</h3>
						<ul
							class="text-left text-primary-1 dark:text-primary-10 sm:w-[35rem] sm:mx-auto lg:w-[30rem] lg:mx-0 list-disc grid gap-y-[2rem]">
							<li>Lorem ipsum dolor sit amet con se cte tur adi pisic ing elit. Eligendi, quae. Lorem, ipsum.</li>
							<li>Lorem ipsum dolor sit amet con se cte tur adi pcs icing elit. Eligendi, quae. Lorem, ipsum.</li>
						</ul>
						<div class="flex justify-between items-center mt-[3rem] relative">
							<button
								type="button"
								class="bg-gradient-to-r from-primary-2 to-primary-3 text-neutral-4 px-[2.8rem] py-[1.1rem] rounded-full font-w700 text-[1.4rem] md:text-[1.6rem] lg:hover:opacity-60 lg:transition-opacity lg:dark:hover:opacity-100 lg:dark:hover:text-primary-1 lg:dark:transition-colors">
								Check
							</button>
							<button
								type="button"
								class="underline italic rounded-full font-w700 md:text-[1.6rem] text-[1.1rem]"
								@click="is_law = index">
								law note
							</button>
							<Transition>
								<div
									:ref="el => law_refs[index] = el as HTMLDivElement"
									v-if="is_law == index"
									class="absolute w-[20rem] rounded-xl text-left h-[20rem] text-primary-1 bg-neutral-4 dark:bg-neutral40 p-[2rem] overflow-scroll lg:overflow-hidden right-[.6rem] bottom-[5rem] z-[10] md:w-[25rem] md:right-[1.7rem] md:bottom-[6rem] boxShadowLaw">
									<p class="text-[1.2rem] font-w700">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam eligendi quibusdam sapiente pariatur,
										exercitationem doloremque nihil autem omnis laboriosam esse hic temporibus vel at veniam ut maxime
										totam necessitatibus minima.
									</p>
								</div>
							</Transition>
							<Transition>
								<div
									class="absolute bottom-[3rem] right-[.5rem] md:right-7 md:bottom-[4rem] z-[11]"
									v-if="is_law == index">
									<img :src="triangle" alt="" aria-hidden="true" class="w-[3rem] invert-[100%]" />
								</div>
							</Transition>
						</div>
					</div>
				</div>
			</div>
		</div>
		<img
			:src="icon1"
			alt=""
			aria-hidden="true"
			:class="[iconStyles, store.isLight && 'darkIconsBg']"
			class="top-[35rem] left-[-2rem] md:top-[30rem] md:left-[5rem] lg:top-[20rem] 2xl:left-[35rem] rotate-12 animeSpin" />
		<img
			:src="icon2"
			alt=""
			aria-hidden="true"
			:class="[iconStyles, store.isLight && 'darkIconsBg']"
			class="right-[5rem] top-[130rem] md:top-[120rem] lg:top-[75rem] rotate-45 animeSpin 2xl:right-[30rem]" />
		<img
			:src="icon3"
			alt=""
			aria-hidden="true"
			:class="[iconStyles, store.isLight && 'darkIconsBg']"
			class="left-[2rem] bottom-[1rem] md:left-[4rem] rotate-6 animeSpinRight 2xl:left-[19rem] 2xl:bottom-[10rem]" />
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
import triangle from 'assets/images/triangle.svg'
import { useBankStore } from '~/store/bank'
const store = useBankStore()

const is_width = ref<boolean>(false)
const is_law = ref<null | number>(null)
const law_refs = ref<HTMLDivElement[]>([])

const hide_law = (e: Event): void => {
	if (is_law.value !== null) {
		const current_law = law_refs.value[is_law.value]
		if (current_law && !current_law.contains(e.target as Node)) {
			is_law.value = null
		}
	}
}

watch(
	() => is_law.value,
	newValue => {
		document.removeEventListener('click', hide_law)
		if (newValue || newValue == 0) {
			setTimeout(() => {
				document.addEventListener('click', hide_law)
			}, 0)
		}
	}
)

const profitsData = ref([
	{
		img: img1,
		title: 'All-in-one Banking',
	},
	{
		img: img2,
		title: 'Smart Budgeting',
	},
	{
		img: img3,
		title: 'Instant Setup',
	},
	{
		img: img4,
		title: 'Connected Tools',
	},
])

watch(
	() => store.isLight,
	newValue => {
		if (newValue) {
		}
	}
)

onMounted(() => {
	is_width.value = true
})

const iconStyles = 'absolute opacity-[5%] w-[15rem] md:w-[20rem] z-[1] 2xl:w-[30rem]'
</script>

<style scoped lang="scss">
.boxShadowLaw {
	box-shadow: 0 -10px 20px -5px rgba(115, 115, 115, 0.75);
}

.v-enter-active,
.v-leave-active {
	transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}

.boxShadow {
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

.lawHover {
	position: relative;
	&::before {
		position: absolute;
		content: 'Lorem ipsum dolor sit amet con se cte tur lorem lorem';
		padding: 1.1rem;
		border-radius: 7px;
		top: -400%;
		left: 50%;
		transform: translateX(-50%);
		width: 300%;
		height: auto;
		background-color: white;
		z-index: 1;
		opacity: 1;
		font-size: 1.4rem;
		transition: opacity 0.2s;
		color: black;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
	}

	&::after {
		position: absolute;
		content: '';
		width: 4rem;
		height: 4rem;
		background-color: white;
		rotate: 45deg;
		top: -3rem;
		left: 45%;
		z-index: 0;
		transform: translateX(-50%);
		box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
	}

	&:focus {
		&::before {
			opacity: 1;
			z-index: 1;
		}
	}
}

.darkIconsBg {
	filter: invert(79%) sepia(11%) saturate(146%) hue-rotate(186deg) brightness(97%) contrast(86%);
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
