module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{xd,mp3,css,scss,ttf,png,jpg,xml,ico,svg,webmanifest,html,js,json,md}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};