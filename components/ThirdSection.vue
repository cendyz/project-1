<template>
	<ClientOnly>
		<swiper-container ref="containerRef">
			<swiper-slide v-for="(slide, idx) in slides" :key="idx" style="background-color: rgb(32, 233, 70); color: white">
				<img :src="img" alt="" />
				<p>sdsadsdsa</p>
			</swiper-slide>
		</swiper-container>
	</ClientOnly>

	<!-- Go back one slide -->
	<button @click="swiper.prev()">Prev</button>
	<!-- Go forward one slide -->
	<button @click="swiper.next()">Next</button>
</template>

<script setup>
import img from 'assets/images/2.png'

const containerRef = ref(null)
const slides = ref(Array.from({ length: 10 }))

const swiper = useSwiper(containerRef)
</script>

<style lang="scss">
swiper-slide {
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	height: 20vh;
	font-size: 4rem;
	font-weight: bold;
	font-family: 'Roboto', sans-serif;
}
</style>
