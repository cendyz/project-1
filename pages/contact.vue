<template>
	<main class="h-[90rem] flex justify-center items-center">
		<form
			@submit.prevent="handle_form"
			class="bg-white p-[3rem] rounded-md border-dotted border-[3px] w-[calc(100%-4rem)] mx-auto my-auto">
			<h1 class="text-[2.5rem] font-w700 mb-[2rem]">Contact us</h1>
			<p class="text-[1.4rem] mb-[2rem]">
				Got any questions or suggestions? <br />
				Fill out this form to reach out.
			</p>

			<div>
				<div>
					<label for="name" :class="labelStyles">Name</label>
					<input type="text" id="name" :class="inputStyles" placeholder="Enter your name" />
				</div>
				<div class="mt-[2rem]">
					<label for="email" :class="labelStyles">Email</label>
					<input type="email" id="email" :class="inputStyles" placeholder="Enter your email" />
				</div>
			</div>
			<div class="mt-[2rem]">
				<label for="message" :class="labelStyles">Message</label>
				<textarea
					id="message"
					placeholder="Enter your message"
					:class="inputStyles"
					class="min-h-[13rem] min-w-full"></textarea>
			</div>
			<div class="mt-[5rem]">
				<button type="submit" class="uppercase border-[3px] border-black w-full py-[.5rem] font-w700">send</button>
				<p class="text-[1.3rem] text-gray-500 mt-[3rem]">You can email us directly at <span class="underline">contact@mWallet.com</span></p>
			</div>
		</form>
	</main>
</template>

<script setup lang="ts">
const labelStyles = 'block font-w700 mb-[.3rem]'
const inputStyles = 'border rounded-md p-[.5rem] w-full text-[1.3rem]'
</script>
