if(!self.define){let e,i={};const c=(c,s)=>(c=new URL(c+".js",s).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let r={};const o=e=>c(e,n),f={module:{uri:n},exports:r,require:o};i[n]=Promise.all(s.map((e=>f[e]||o(e)))).then((e=>(a(...e),r)))}}define(["./workbox-ec81a2a1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"audio/lightsaber.mp3",revision:"e3cdfc2a561e1f7c177ea2143246fcf6"},{url:"css/main.css",revision:"ca9254e312956cc3832adb329db0b037"},{url:"css/main.scss",revision:"0f78f731123d5bbdbe9f09775cd8a4a2"},{url:"css/reset.css",revision:"ba1d59b0e53d380b12b3e97a428b3314"},{url:"fonts/Starjedi.ttf",revision:"cc3019aa6439ef893839b8a0d6d0391d"},{url:"images/0.png",revision:"426fbac3a5847805828c7c8ab2960394"},{url:"images/1.png",revision:"f3a43caf637732e7ba659821ac02fef0"},{url:"images/2.png",revision:"37f6c5057deb10bc5a501d22115c6a30"},{url:"images/3.png",revision:"40883fc48cf7128a0816960f2be84aad"},{url:"images/4.png",revision:"c547cd4222f85fbcd44223e3bc743d7c"},{url:"images/5.png",revision:"1db7e96d6e5006492ebf72b725e702be"},{url:"images/512x512-icon.png",revision:"5fcbb198aabd4e28e58238c9161853ab"},{url:"images/background.png",revision:"e68ae4f942a9359e3a012514ab081f76"},{url:"images/bg2.jpg",revision:"62d099eba91caf0e6e1ae7b2584417c9"},{url:"images/icons/android-chrome-192x192.png",revision:"80bcbddf8a06734e74d2861bd9cb703d"},{url:"images/icons/android-chrome-384x384.png",revision:"b2cdb08926589a617fcad7beb90a1b37"},{url:"images/icons/apple-touch-icon.png",revision:"b3ba27db593ce3f0f1633063bec321d8"},{url:"images/icons/browserconfig.xml",revision:"18a918a0ceeba0370adb887989eb833e"},{url:"images/icons/favicon-16x16.png",revision:"4f6701925fd4e88ba2da50dce74d1cc5"},{url:"images/icons/favicon-32x32.png",revision:"22b42d50807cb3eb482c72b9e88e9400"},{url:"images/icons/favicon.ico",revision:"fa299d6618ca8f20d79f9416564c56e4"},{url:"images/icons/icon-128x128.png",revision:"308c68e9d5a894f20893eb07184f7bf1"},{url:"images/icons/icon-144x144.png",revision:"7d49c5b049885d788b66400864b6c848"},{url:"images/icons/icon-152x152.png",revision:"4af9f36b248cf9d8a348abcf3e8a9480"},{url:"images/icons/icon-192x192.png",revision:"d7e3018a86a7a2d1c8feefed017e48e9"},{url:"images/icons/icon-384x384.png",revision:"83b1cbe83c8c9707891a2cd86264988c"},{url:"images/icons/icon-512x512.png",revision:"115d82282a52d37af795a6b7c3f4cf5f"},{url:"images/icons/icon-72x72.png",revision:"df0bba5998312196a7411e37bbe5b509"},{url:"images/icons/icon-96x96.png",revision:"938f0b0fbf806735b04b7837f0c1cf32"},{url:"images/icons/mstile-150x150.png",revision:"0e4bae07edf1fe5c4ff76cfd12fb5c5c"},{url:"images/icons/safari-pinned-tab.svg",revision:"0bdeff0354be9f2a57cd2da22becd4e8"},{url:"images/icons/site.webmanifest",revision:"817e3ae080d358e86390f2d71c17d625"},{url:"images/logo.png",revision:"fedc0baa9fb550b1fdecaaa3a142ec3c"},{url:"images/magnifying-glass-gray.svg",revision:"de9efc6cf65fb54e172938773634ce37"},{url:"images/mobile_bg.png",revision:"eef083407809a49995b0a9bc3671b947"},{url:"images/star-wars-2.svg",revision:"7ecf14ae3af8b679f77a91d15046488d"},{url:"index.html",revision:"78e205529f22c9a800dfda34af9d7890"},{url:"js/main.js",revision:"660f50eb5b01208ac393bc24bf066576"},{url:"manifest.json",revision:"e52fc2fbf2e135fb62fcc6d734d60c96"},{url:"package-lock.json",revision:"893fbe3cd3b69ac82d3c984c689626a0"},{url:"package.json",revision:"02e4dcffbe46b3f75b74dc3fad122f38"},{url:"README.md",revision:"0c36f8e8ddbd425be2fb3dece25a12f3"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map