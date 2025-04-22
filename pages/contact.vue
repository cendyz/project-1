<template>
	<main class="h-[90rem] lg:h-auto lg:py-[5rem] flex justify-center items-center">
		<form
			@submit.prevent="handle_form"
			class="bg-white p-[3rem] border-dashed border-[3px] border-[#3790d0] w-[calc(100%-6rem)] mx-auto my-auto max-w-[540px] lg:p-[5rem] lg:max-w-[580px] z-[100]">
			<h1 class="text-[2.5rem] font-w700 mb-[1rem] lg:text-[3rem]">Contact us</h1>
			<p class="text-[1.4rem] mb-[2rem] lg:text-[1.5rem]">
				Got any questions or suggestions? <br class="sm:hidden" />
				Fill out this form to reach out.
			</p>
			<div>
				<div>
					<label for="name" :class="labelStyles">Name</label>
					<input type="text" id="name" :class="inputStyles" placeholder="Enter your name" v-model="input_data.name" />
					<p v-if="">Error</p>
				</div>
				<div class="mt-[2rem]">
					<label for="email" :class="labelStyles">Email</label>
					<input
						type="email"
						id="email"
						:class="inputStyles"
						placeholder="Enter your email"
						v-model="input_data.email" />
					<p>Error</p>
				</div>
			</div>
			<div class="mt-[2rem]">
				<label for="message" :class="labelStyles">Message</label>
				<textarea
					id="message"
					v-model="input_data.message"
					placeholder="Enter your message"
					:class="inputStyles"
					class="min-h-[13rem] min-w-full"></textarea>
			</div>
			<div class="mt-[5rem]">
				<button
					type="submit"
					class="uppercase border-[3px] border-black w-full py-[.5rem] font-w700 lg:hover:bg-black lg:hover:text-white transition-colors duration-300">
					send
				</button>
				<p class="text-[1.3rem] text-gray-500 mt-[3rem]">
					You can email us directly at <span class="underline">contact@mWallet.com</span>
				</p>
			</div>
		</form>
		<div class="absolute top-0 left-0 w-full h-full bg_pattern"></div>
	</main>
</template>

<script setup lang="ts">
const input_data = reactive({
	name: '',
	email: '',
	message: '',
})

const is_error = ref(false)

const labelStyles = 'block font-w700 mb-[.3rem]'
const inputStyles = 'border rounded-md p-[.5rem] w-full text-[1.3rem] lg:text-[1.4rem]'
</script>

<style>
.bg_pattern {
	background-image: url('../assets/images/email-pattern.png');
}
</style>
