"use strict";var precacheConfig=[["/gods-light/index.html","6436b0983151532530200767d0ef3d89"],["/gods-light/static/css/main.966c6011.css","f02b25938bd9a784b8c230af49fc7c5a"],["/gods-light/static/js/main.b9ea0779.js","0ad91cb538bbab1aab67b25c8e23ca81"],["/gods-light/static/media/announce.25a02a14.jpg","25a02a149d683bb2ccdca776524fb1ad"],["/gods-light/static/media/church.7b971b2a.svg","7b971b2a9089b2951917f5c997d18ccf"],["/gods-light/static/media/family.a2794c46.svg","a2794c463a99809998e9bffcc992aff0"],["/gods-light/static/media/family_black.572bbb46.svg","572bbb46fd9561d27510a2595c145810"],["/gods-light/static/media/family_white.8ac805c9.svg","8ac805c97935c0357936785cead22132"],["/gods-light/static/media/jesus.3729b2fc.svg","3729b2fca973f468197cc6bc48f0b0f2"],["/gods-light/static/media/landscape2.17e58692.jpg","17e58692ce92ecfb7fea605edcf77ae5"],["/gods-light/static/media/landscape2_small.53b0ab81.jpg","53b0ab816a05e6c8eba64b933a91e375"],["/gods-light/static/media/lightray.3876f0f5.jpg","3876f0f5a4eccc8232fa185ede984f32"],["/gods-light/static/media/pray.2ae3784a.svg","2ae3784a30b8710b5db320c261e9caf3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/gods-light/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});