importScripts('./workbox-v4.3.1/workbox-sw.js');

let version = "0.011";

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

self.workbox.precaching.precacheAndRoute([
  {
    "url": "assets/iconfont/iconfont.js",
    "revision": "d0f6a7573811af58682caf4b5ff90ecf"
  },
  {
    "url": "build/index.esm.js",
    "revision": "a3e87a1017d933bc7913fbba2afa75ae"
  },
  {
    "url": "build/p-02349297.entry.js"
  },
  {
    "url": "build/p-06aefde1.entry.js"
  },
  {
    "url": "build/p-0816246f.js"
  },
  {
    "url": "build/p-0ad0b6e8.js"
  },
  {
    "url": "build/p-0cc9fafb.entry.js"
  },
  {
    "url": "build/p-100eacea.js"
  },
  {
    "url": "build/p-1038a40f.entry.js"
  },
  {
    "url": "build/p-104ed1c2.entry.js"
  },
  {
    "url": "build/p-1249610a.entry.js"
  },
  {
    "url": "build/p-12c414c9.js"
  },
  {
    "url": "build/p-1442743c.entry.js"
  },
  {
    "url": "build/p-146d4556.entry.js"
  },
  {
    "url": "build/p-18f25228.js"
  },
  {
    "url": "build/p-19ac2c51.entry.js"
  },
  {
    "url": "build/p-19eb98c7.entry.js"
  },
  {
    "url": "build/p-1e578972.js"
  },
  {
    "url": "build/p-1ffa68c0.entry.js"
  },
  {
    "url": "build/p-21896bb7.entry.js"
  },
  {
    "url": "build/p-23c5ca0b.entry.js"
  },
  {
    "url": "build/p-25467084.js"
  },
  {
    "url": "build/p-270b3fbd.entry.js"
  },
  {
    "url": "build/p-27451764.entry.js"
  },
  {
    "url": "build/p-2894dfc5.entry.js"
  },
  {
    "url": "build/p-2c6619df.entry.js"
  },
  {
    "url": "build/p-2ecef3be.entry.js"
  },
  {
    "url": "build/p-2fef98a9.js"
  },
  {
    "url": "build/p-300dac17.entry.js"
  },
  {
    "url": "build/p-32d9e078.js"
  },
  {
    "url": "build/p-34735bce.entry.js"
  },
  {
    "url": "build/p-34adc58b.entry.js"
  },
  {
    "url": "build/p-361ba545.entry.js"
  },
  {
    "url": "build/p-38a2a440.entry.js"
  },
  {
    "url": "build/p-39baac82.entry.js"
  },
  {
    "url": "build/p-3aa23a23.entry.js"
  },
  {
    "url": "build/p-3d1015c2.js"
  },
  {
    "url": "build/p-414dea8b.entry.js"
  },
  {
    "url": "build/p-45061e16.js"
  },
  {
    "url": "build/p-465ea82f.js"
  },
  {
    "url": "build/p-47421401.entry.js"
  },
  {
    "url": "build/p-476a3423.entry.js"
  },
  {
    "url": "build/p-488fd894.js"
  },
  {
    "url": "build/p-48a70a01.entry.js"
  },
  {
    "url": "build/p-4d1aa357.js"
  },
  {
    "url": "build/p-52ff05dd.entry.js"
  },
  {
    "url": "build/p-5348300d.js"
  },
  {
    "url": "build/p-54815a50.entry.js"
  },
  {
    "url": "build/p-56a5bb59.js"
  },
  {
    "url": "build/p-58358181.entry.js"
  },
  {
    "url": "build/p-5888ba10.js"
  },
  {
    "url": "build/p-589ce798.entry.js"
  },
  {
    "url": "build/p-5cc3e2da.js"
  },
  {
    "url": "build/p-5e6b5261.entry.js"
  },
  {
    "url": "build/p-60cdd448.entry.js"
  },
  {
    "url": "build/p-6195e4ad.entry.js"
  },
  {
    "url": "build/p-62c264ab.entry.js"
  },
  {
    "url": "build/p-63768fae.entry.js"
  },
  {
    "url": "build/p-63e229e9.entry.js"
  },
  {
    "url": "build/p-6ba4e7f4.js"
  },
  {
    "url": "build/p-6bae5055.js"
  },
  {
    "url": "build/p-6bc4a9f7.js"
  },
  {
    "url": "build/p-6ef94f59.entry.js"
  },
  {
    "url": "build/p-73788018.entry.js"
  },
  {
    "url": "build/p-76821561.entry.js"
  },
  {
    "url": "build/p-78ad62ec.entry.js"
  },
  {
    "url": "build/p-79e142f7.entry.js"
  },
  {
    "url": "build/p-7aade13b.entry.js"
  },
  {
    "url": "build/p-7bdf508b.js"
  },
  {
    "url": "build/p-7c7b647a.entry.js"
  },
  {
    "url": "build/p-81cbd61b.entry.js"
  },
  {
    "url": "build/p-843ac6b9.js"
  },
  {
    "url": "build/p-84cba16b.js"
  },
  {
    "url": "build/p-8af5cc14.entry.js"
  },
  {
    "url": "build/p-8ba88897.entry.js"
  },
  {
    "url": "build/p-8c14e909.css"
  },
  {
    "url": "build/p-8c42acb3.entry.js"
  },
  {
    "url": "build/p-8d15e3b9.js"
  },
  {
    "url": "build/p-91bb7912.js"
  },
  {
    "url": "build/p-91e83e09.entry.js"
  },
  {
    "url": "build/p-970efdc8.entry.js"
  },
  {
    "url": "build/p-99026668.js"
  },
  {
    "url": "build/p-9a0f8c0e.js"
  },
  {
    "url": "build/p-9b7a921d.entry.js"
  },
  {
    "url": "build/p-9c97d9e5.entry.js"
  },
  {
    "url": "build/p-9cb3c059.entry.js"
  },
  {
    "url": "build/p-9d6f6c5c.entry.js"
  },
  {
    "url": "build/p-a1767f03.entry.js"
  },
  {
    "url": "build/p-a5b5a02e.entry.js"
  },
  {
    "url": "build/p-a5ff5abb.js"
  },
  {
    "url": "build/p-a6ffc1b2.js"
  },
  {
    "url": "build/p-aa3133c2.entry.js"
  },
  {
    "url": "build/p-ab61624b.entry.js"
  },
  {
    "url": "build/p-ac3709f8.entry.js"
  },
  {
    "url": "build/p-b18ab5ec.js"
  },
  {
    "url": "build/p-b1babe57.entry.js"
  },
  {
    "url": "build/p-b2b506da.entry.js"
  },
  {
    "url": "build/p-b2d8fd30.js"
  },
  {
    "url": "build/p-b46c22b3.js"
  },
  {
    "url": "build/p-b4d19b80.entry.js"
  },
  {
    "url": "build/p-bb39a0f9.js"
  },
  {
    "url": "build/p-bc2858e3.entry.js"
  },
  {
    "url": "build/p-bcac3011.entry.js"
  },
  {
    "url": "build/p-c0b1b8b7.entry.js"
  },
  {
    "url": "build/p-c266315a.entry.js"
  },
  {
    "url": "build/p-c35e90d3.entry.js"
  },
  {
    "url": "build/p-c796510b.entry.js"
  },
  {
    "url": "build/p-c7c73e56.entry.js"
  },
  {
    "url": "build/p-c95d39d6.entry.js"
  },
  {
    "url": "build/p-ca31d7fd.entry.js"
  },
  {
    "url": "build/p-cc8bb041.entry.js"
  },
  {
    "url": "build/p-ccf22258.entry.js"
  },
  {
    "url": "build/p-cd48045d.entry.js"
  },
  {
    "url": "build/p-cec3abde.entry.js"
  },
  {
    "url": "build/p-d0ac0186.entry.js"
  },
  {
    "url": "build/p-d14d45df.entry.js"
  },
  {
    "url": "build/p-d29dedc2.entry.js"
  },
  {
    "url": "build/p-d4a79841.entry.js"
  },
  {
    "url": "build/p-d6088539.entry.js"
  },
  {
    "url": "build/p-d6244fca.entry.js"
  },
  {
    "url": "build/p-d7f4c7f7.entry.js"
  },
  {
    "url": "build/p-d87ff63d.entry.js"
  },
  {
    "url": "build/p-dca08c46.js"
  },
  {
    "url": "build/p-dd968b66.entry.js"
  },
  {
    "url": "build/p-dde3564e.js"
  },
  {
    "url": "build/p-e3ed74b4.js"
  },
  {
    "url": "build/p-e40875ed.entry.js"
  },
  {
    "url": "build/p-e9725329.entry.js"
  },
  {
    "url": "build/p-eb99415a.js"
  },
  {
    "url": "build/p-ee06bb83.js"
  },
  {
    "url": "build/p-ee5ae78f.js"
  },
  {
    "url": "build/p-efec1664.js"
  },
  {
    "url": "build/p-f45f33b9.entry.js"
  },
  {
    "url": "build/p-f568f949.entry.js"
  },
  {
    "url": "build/p-f7c6298e.js"
  },
  {
    "url": "build/p-fc8e55ef.entry.js"
  },
  {
    "url": "build/p-fd0588fe.entry.js"
  },
  {
    "url": "build/p-feffb176.entry.js"
  },
  {
    "url": "build/swiper/swiper.bundle.js",
    "revision": "5baf6960084de0a0f9298cb8e9e2a79a"
  },
  {
    "url": "build/swiper/swiper.js",
    "revision": "c367d2eccf6c79b874c8df5b7fd0721d"
  },
  {
    "url": "index.html",
    "revision": "df34d62d69d646d1f91086694115fe77"
  }
]);