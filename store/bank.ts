import { defineStore } from 'pinia'
import img1 from '/img/image-currency.jpg'
import img2 from '/img/image-restaurant.jpg'
import img3 from '/img/image-plane.jpg'
import img4 from '/img/image-confetti.jpg'
import img5 from 'assets/images/img5.jpg'
import img6 from 'assets/images/img6.jpg'

export const useBankStore = defineStore('bank', {
	state: () => ({
		isLight: false,
		isOpenMenu: false,
		news: ['3531', '3241', '13167', '1367', '90131', '241', '125'],
		articles_data: [
			{
				img: img1,
				title: 'Receive money in any currency with zero fees',
				quote: 'By Claire Robinson',
				desc: 'The world is more connected than ever, and mobility is the new normal. With BlueWallet, you can receive funds from anywhere — instantly, securely, and without hidden charges.',
				alt: 'Money',
			},
			{
				img: img2,
				quote: 'By Wilson Hutton',
				title: 'Treat yourself without worrying about money',
				desc: 'Thanks to mWallet intuitive budgeting tools, you can enjoy life without financial stress. Easily split your spending, set limits, and stay in control of your finances.',
				alt: 'Restaurant',
			},
			{
				img: img3,
				title: 'Take your mWallet card wherever you go',
				quote: 'By Claire Robinson',
				desc: 'Travel with confidence — mWallet won’t hit you with foreign transaction fees. Use your card worldwide and see real-time exchange rates right from the app.',
				alt: 'Plane',
			},
			{
				img: img4,
				title: 'Our invite-only Beta accounts are now live!',
				quote: 'By Wilson Hutton',
				desc: 'After months of development, we’re excited to open access to our exclusive Beta program. Be among the first to experience the future of smart banking — redesigned from the ground up.',
				alt: 'Confetti',
			},
			{
				img: img5,
				title: 'Instant Transfers now available for all users!',
				desc: 'Say goodbye to delays – our new real-time transfer system lets you move funds instantly between accounts, anytime, anywhere.',
				alt: 'Fast money transfer illustration',
			},
			{
				img: img6,
				title: 'Smarter Spending with AI-powered Budgeting Tools',
				desc: 'Track your habits and get personalized insights to help you save more and spend wisely – all powered by intelligent analytics.',
				alt: 'Budget dashboard with analytics',
			},
		],
	}),
	getters: {
		pages: state => ['/', '/news', '/about', '/faq', '/contact', '/404', ...state.news.map(id => `/news/${id}`)],
	},
	actions: {},
})
