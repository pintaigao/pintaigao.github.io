"use strict";var precacheConfig=[["/index.html","ac086b4e36616ed874b9b09d5dcdce26"],["/static/css/main.5bc99ab6.css","61973f5ab1dc41892474953936c5cc9a"],["/static/js/main.b7c3eb0f.js","ef9b31e0e6546f6287bf99ea7e95b6ed"],["/static/media/Cust_logo.aaa19bdc.jpg","aaa19bdcede9bcc0ea0624df3571b0a3"],["/static/media/NHK_New_Logo.728b567f.png","728b567f5f55406dca59985bc166957f"],["/static/media/Todo_Logo.3f2f56f3.png","3f2f56f30c58efa3b3c2817fbdbb7f8c"],["/static/media/expensify-web.bbbdab64.png","bbbdab646c4d49653290c216e3ee0e8d"],["/static/media/github.957c4dd9.png","957c4dd9aa815cc1de2040cc1259589f"],["/static/media/logo-android-studio.e8c68356.png","e8c68356a013d4d2bf1053aeb3bf4202"],["/static/media/logo-angular.ed67901a.png","ed67901af4608722155959621b790cb1"],["/static/media/logo-dotnet.aae0ceb7.png","aae0ceb74b25ff6816f4f12c6ee83722"],["/static/media/logo-electron.5c4c9617.png","5c4c9617237127090466ef6911e9ce47"],["/static/media/logo-firebase.39c0b776.png","39c0b776274baf43d859a1721d13109f"],["/static/media/logo-flutter.e5700374.png","e5700374475108dfef89773068954d33"],["/static/media/logo-idea.2c3d6fa6.png","2c3d6fa6767964a39bffd525a30b8884"],["/static/media/logo-java.4eb1819d.png","4eb1819dc863ef386e09d86e9f482a9f"],["/static/media/logo-js.7f130501.png","7f130501681cb3d0129f266820c78b24"],["/static/media/logo-mysql.40267dc8.png","40267dc8b29cad2a30a3d511621490d0"],["/static/media/logo-postgres.50156c71.png","50156c71fb2cf47d5cfe134231975922"],["/static/media/logo-python.ca2ceddc.png","ca2ceddcd9c28a22c449286f3fe66751"],["/static/media/logo-rails.79112b07.png","79112b07e350620c05e7679450afe491"],["/static/media/logo-redux.b51d1861.png","b51d1861e7fe5782d20d5455c7c9f1f4"],["/static/media/logo-spring.813a8748.png","813a874883b6fc4bb7867eee69f0c4a1"],["/static/media/logo-teamsql.081b729b.png","081b729b0b09873137ed28103aea73b6"],["/static/media/logo-vscode.0968fbd8.png","0968fbd8dc63a0997443ed820b0fc8f8"],["/static/media/logo-vue.96fa769f.png","96fa769f4b899eb6c9bd37bef05c5736"],["/static/media/logo-webstorm.0fa98f28.png","0fa98f2895d3dc1be4bcb40a72235844"],["/static/media/logo-xcode.c9886bfa.png","c9886bfaa4d3cc4c8aff280e878083ab"],["/static/media/logo-zeplin.d2d08668.png","d2d0866860d06a1a98cc35bfd6aad6e1"],["/static/media/picc_logo.3bbbe14d.png","3bbbe14d0bb83169dc94de71b740975a"],["/static/media/screen-shot-gif.bd25fb3d.gif","bd25fb3d01754f873e0e011a750c14e4"],["/static/media/timer-electron.d27512f6.png","d27512f62ad4d561bae9a335454bc3fc"],["/static/media/viafly-dashboard.822fd07a.png","822fd07abf211978d8859a025cb84aae"],["/static/media/viafly-marketplace.e6a56a6d.png","e6a56a6d2b57d2d0a06bd189b5df5556"],["/static/media/viafly_logo.59c4aec9.png","59c4aec94286d77c67d2271b873366aa"],["/static/media/wallpaper.d737c672.jpg","d737c672cf7193dbf709b825ea681376"],["/static/media/wallpaper2.50ab8e7c.jpg","50ab8e7c6285c1faf7b9622e76651892"],["/static/media/wallpaper3.accb270e.jpg","accb270e2c93ddb80ca67db6011ea780"],["/static/media/wallpaper4.576eaabc.jpg","576eaabc2d1c0df2d4cdc7127a9e7626"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});