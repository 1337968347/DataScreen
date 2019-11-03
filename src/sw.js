importScripts('./workbox-v4.3.1/workbox-sw.js');

let version = "0.06";

self.workbox.setConfig({
    modulePathPrefix: "./workbox-v4.3.1"
})

self.addEventListener("message", ({ data }) => {
    if (data === "skipWaiting") {
        self.skipWaiting();
    }
});

// svg photo
workbox.routing.registerRoute(
    new RegExp('.*\.svg'),
    workbox.strategies.cacheFirst({
        cacheName: 'svg',
    })
);

self.workbox.precaching.precacheAndRoute([]);