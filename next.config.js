/** @type {import('next').NextConfig} */
require('dotenv').config()
const nextConfig = {
	reactStrictMode: true,
	env: {
		SERVER_URL: process.env.SERVER_URL,
		APP_URL: process.env.APP_URL,
		SERVER_UPLOADS: process.env.SERVER_UPLOADS
	},
	images: {
		domains: [
			'loremflickr.com',
			'picsum.photos',
			'krots.top',
			'images.wallpapersden.com',
			'www.funnyart.club',
			'cloudflare-ipfs.com',
			'sun6-20.userapi.com',
			'rostov.kenguru.ru',
			'w.forfun.com',
			'avatars.githubusercontent.com',
			'b24-a6l4gh.bitrix24.ru',
			'localhost'
		]
	}
	// async rewrites(){
	// 	return[
	// 		{
	// 			source: '/uploads/:path*',
	// 			destination: "http://localhost:4000/uploads/:path*"
	// 		}
	// 	]
	// }
}

module.exports = nextConfig
