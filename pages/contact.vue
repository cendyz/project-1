<template>
	<main class="h-[95rem] lg:py-[5rem] flex justify-center items-center" ref="el">
		<form
			@submit.prevent="handle_submit"
			class="bg-neutral-4 p-[3rem] border-dashed border-[3px] dark:bg-neutral-40 dark:text-primary-11 border-primary-3 w-[calc(100%-6rem)] mx-auto my-auto max-w-[540px] lg:p-[5rem] lg:max-w-[580px] z-[100]">
			<h1 class="text-[2.5rem] font-w700 mb-[1rem] lg:text-[3rem]">Contact us</h1>
			<p class="text-[1.4rem] mb-[2rem] lg:text-[1.5rem]">
				Got any questions or suggestions? <br class="sm:hidden" />
				Fill out this form to reach out.
			</p>
			<div>
				<div>
					<label for="name" :class="labelStyles">Name</label>
					<input
						type="text"
						id="name"
						:class="[inputStyles, name_error && 'border-primary-red']"
						placeholder="Enter your name"
						v-model="input_data.name" />
					<p v-if="name_error" :class="errorStyles">{{ name_error }}</p>
				</div>
				<div class="mt-[2rem]">
					<label for="email" :class="labelStyles">Email</label>
					<input
						type="email"
						id="email"
						:class="[inputStyles, email_error && 'border-primary-red']"
						placeholder="Enter your email"
						v-model="input_data.email" />
					<p v-if="email_error" :class="errorStyles">{{ email_error }}</p>
				</div>
			</div>
			<div class="mt-[2rem]">
				<label for="message" :class="labelStyles">Message</label>
				<textarea
					id="message"
					v-model="input_data.message"
					placeholder="Enter your message"
					:class="[inputStyles, message_error && 'border-primary-red']"
					class="min-h-[13rem] min-w-full"></textarea>
				<p :class="errorStyles">{{ message_error }}</p>
			</div>
			<div class="mt-[5rem]">
				<button
					type="submit"
					class="uppercase border-[3px] rounded-lg border-primary-1 dark:border-primary-10 w-full py-[.5rem] font-w700 lg:hover:bg-primary-1 lg:hover:text-neutral-4 transition-colors duration-300">
					send
				</button>
				<p class="text-[1.3rem] text-primary-gray2 mt-[3rem]">
					You can email us directly at <span class="underline">contact@mWallet.com</span>
				</p>
			</div>
		</form>
		<div class="absolute top-0 left-0 w-full h-[115%]" :class="store.isLight ? 'dark_pattern' : 'bg_pattern'"></div>
		<Transition>
			<div
				v-if="is_sended"
				class="absolute z-[1000] w-[30rem] bg-primary-1 top-[5%] h-[15rem] rounded-xl my_shadow flex flex-col justify-between overflow-hidden lg:right-[7rem] xl:right-[9rem]">
				<button aria-label="close pop up" class="ml-auto block p-[1rem]" @click="is_sended = false">
					<img :src="x" alt="x" class="invert-[100]" />
				</button>
				<h2 class="text-[2rem] text-center font-w700 mb-[5rem] text-neutral-4">Message successfully sent!</h2>
				<div class="my_line bg-primary-3"></div>
			</div>
		</Transition>
	</main>
	<Footer class="z-[99] relative" />
</template>

<script setup lang="ts">
import x from 'assets/images/close_x.svg'
import { useBankStore } from '~/store/bank'
const store = useBankStore()

interface Input {
	name: string
	email: string
	message: string
}

const input_data = reactive<Input>({
	name: '',
	email: '',
	message: '',
})

const email_regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/

const name_error = ref<string>('')
const email_error = ref<string>('')
const message_error = ref<string>('')
const is_sended = ref<boolean>(false)
const line_width = ref<number>(100)

const validate_inputs = (): number => {
	let errors = 0
	if (input_data.name === '') {
		name_error.value = "Can't be empty"
		errors++
	} else if (input_data.name.length < 3) {
		name_error.value = 'Name is too short'
		errors++
	} else {
		name_error.value = ''
		errors = 0
	}

	if (input_data.email === '') {
		email_error.value = "Can't be empty"
		errors++
	} else if (!email_regex.test(input_data.email)) {
		email_error.value = 'E-mail is wrong'
		errors++
	} else {
		email_error.value = ''
		errors = 0
	}

	if (input_data.message === '') {
		message_error.value = "Can't be empty"
		errors++
	} else if (input_data.message.length < 80) {
		message_error.value = 'Must be minimum 80 letters '
		errors++
	} else {
		message_error.value = ''
		errors = 0
	}

	return errors
}

const handle_submit = (): void => {
	if (!validate_inputs()) {
		input_data.name = ''
		input_data.email = ''
		input_data.message = ''
		is_sended.value = true

		const my_interval = setInterval(() => {
			document.documentElement.style.setProperty('--line-width', `${line_width.value--}%`)
		}, 27)

		scroll(0, 0)

		setTimeout(() => {
			is_sended.value = false
			clearInterval(my_interval)
			line_width.value = 100
		}, 3000)
	}
}

const labelStyles = 'block font-w700 mb-[.3rem]'
const inputStyles = 'border rounded-md p-[.5rem] w-full text-[1.3rem] lg:text-[1.4rem]'
const errorStyles = 'mt-[.3rem] text-[1.2rem] text-[#EF4444]'
</script>

<style>
:root {
	--line-width: 100%;
}
.bg_pattern {
	background-image: url('../assets/images/email-pattern.png');
}

.dark_pattern {
	background-image: url('../assets/images/vintage-wallpaper.png');
}

.my_shadow {
	box-shadow: 0 -10px 20px -5px rgba(115, 115, 115, 0.75);
}

.my_line {
	width: var(--line-width);
	height: 4px;
}

.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
