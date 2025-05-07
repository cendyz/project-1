<template>
	<header class="pt-[13rem] pb-[5rem] px-[3rem] bg-neutral-3 dark:bg-neutral-21">
		<NuxtLink to="/news"
			><img :src="back" alt="back to news" class="mb-[2rem] inline" :class="store.isLight && 'light_arrow'"
		/></NuxtLink>
		<h1 class="text-[3.3rem] font-w700 sm:text-center dark:text-primary-10">
			{{ store.articles_data[store.news.indexOf(route.params.slug)].title }}
		</h1>
	</header>
	<main class="dark:bg-neutral-21 bg-neutral-3">
		<img
			:src="store.articles_data[store.news.indexOf(route.params.slug)].img"
			:alt="store.articles_data[store.news.indexOf(route.params.slug)].alt"
			class="md:max-w-[70rem] md:mx-auto md:rounded-xl" />
		<div class="px-[3rem] py-[6rem] grid gap-y-[4rem] md:max-w-[75rem] md:mx-auto dark:text-primary-10">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus libero a arcu tincidunt, nec fermentum
				velit vehicula. Aenean sit amet semper nulla. Etiam in diam sed lacus fermentum malesuada. Nulla eget urna ut
				ligula sagittis fermentum. Vestibulum eget orci sed lectus convallis malesuada. Aliquam erat volutpat. Quisque
				rhoncus feugiat turpis, nec euismod orci tristique ut. Aenean vehicula, sapien non accumsan vehicula, lacus
				risus scelerisque orci, nec pulvinar nulla felis at elit.
			</p>

			<p>
				Mauris dapibus ex non lacus ultricies, vel malesuada tortor dictum. Nullam non ante nec erat ultrices suscipit.
				Integer sodales porttitor vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
				cubilia curae; Curabitur scelerisque justo vel diam ultrices, at aliquam ligula efficitur. Fusce rhoncus ac est
				vel malesuada. Duis nec sapien purus. Cras non diam ac elit aliquam fringilla. Pellentesque habitant morbi
				tristique senectus et netus et malesuada fames ac turpis egestas.
			</p>

			<p>
				Donec vestibulum libero ut nisi tincidunt convallis. Sed rhoncus diam vitae nunc euismod, vel dignissim tortor
				feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc sit amet
				risus vitae velit pretium tristique. Vivamus sed eros blandit, sollicitudin eros vitae, luctus risus. Nunc in
				semper ante. Nulla sollicitudin magna libero, sed faucibus risus fermentum vel. Phasellus id justo convallis,
				malesuada leo sit amet, fermentum enim. Aliquam erat volutpat. Sed volutpat nisi in neque hendrerit, sed euismod
				nulla malesuada.
			</p>

			<p>
				Curabitur lacinia purus eu dolor viverra, non fermentum nunc congue. Pellentesque fermentum velit ut neque
				gravida feugiat. Fusce vel odio id ante malesuada consequat. Integer facilisis, nunc et porttitor volutpat,
				libero magna congue sapien, nec mattis orci odio vitae libero. Maecenas pharetra laoreet felis, sed fermentum
				diam placerat et. Vestibulum vehicula purus in leo elementum laoreet. Mauris porttitor condimentum elit, vitae
				scelerisque eros vulputate non. Proin convallis felis id mauris malesuada, ut feugiat ex imperdiet.
			</p>

			<p>
				Etiam eu velit nec erat bibendum posuere. Integer rhoncus nunc nec malesuada commodo. Cras eget lectus purus.
				Integer laoreet neque id lorem mattis, ut tincidunt diam sodales. Cras sed nulla in lacus fermentum luctus. Sed
				ornare sem non metus suscipit lacinia. Nulla a velit vel odio commodo varius non at est. Mauris vulputate nunc
				ac risus aliquam rutrum. Etiam congue massa justo, nec dictum velit tincidunt vel. Fusce viverra purus sed ante
				dictum, nec vestibulum nisi feugiat. Nunc imperdiet facilisis tortor sed dictum.
			</p>

			<p>
				Vestibulum vehicula luctus metus, a egestas nisi gravida in. Suspendisse potenti. Nullam at magna odio.
				Pellentesque nec orci purus. Pellentesque in risus tincidunt, vehicula nunc et, posuere diam. Donec fermentum
				metus nec lacus sagittis, ac fermentum mi fermentum. Sed posuere erat non arcu scelerisque, sed fringilla eros
				tempor. Pellentesque in lorem enim. Morbi hendrerit magna et augue varius, sed hendrerit ex congue.
			</p>

			<p>
				Proin placerat lectus at nisi finibus finibus. Pellentesque nec tempor risus, ac commodo nulla. Suspendisse ac
				malesuada tortor. Maecenas dignissim justo sed bibendum commodo. Quisque accumsan sem sed ex tincidunt, at
				sollicitudin neque efficitur. Integer nec ante erat. Pellentesque habitant morbi tristique senectus et netus et
				malesuada fames ac turpis egestas.
			</p>

			<p>
				Nunc fermentum, neque ac fermentum elementum, turpis elit malesuada mauris, sed euismod nisi orci non metus.
				Aliquam erat volutpat. Vivamus placerat libero eget dolor hendrerit, nec bibendum sapien consequat. Integer
				tempor tempor ligula, vel fringilla lacus lobortis vel. Quisque sed eros massa. Pellentesque habitant morbi
				tristique senectus et netus et malesuada fames ac turpis egestas. Cras id feugiat sapien, at gravida erat. Sed
				posuere faucibus dapibus. Duis a neque eget neque dictum malesuada.
			</p>
		</div>
	</main>
	<Footer />
</template>

<script setup>
import back from 'assets/images/back.svg'
import { useBankStore } from '~/store/bank'
const route = useRoute()
const store = useBankStore()
</script>

<style scoped>
.light_arrow {
	filter: invert(93%) sepia(10%) saturate(137%) hue-rotate(196deg) brightness(94%) contrast(85%);
}
</style>
