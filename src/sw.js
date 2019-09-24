importScripts('./workbox-v4.3.1/workbox-sw.js');

let version = "0.02";

self.workbox.setConfig({
    modulePathPrefix: "./workbox-v4.3.1"
})

self.addEventListener("message", ({ data }) => {
    if (data === "skipWaiting") {
        console.log("skipWaiting")
        self.skipWaiting();
    }
});


self.workbox.precaching.precacheAndRoute([]);