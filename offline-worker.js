const cacheName = 'm-dev-v3';
const precacheResources = [
  '/',
  'index.html',
  "/assets/favicon.png",
  "/assets/images/cancel.svg",
  "/assets/images/contact.svg",
  "/assets/images/logo.png",
  "/assets/images/preloader.gif",
  "/assets/images/prof_pic.jpg",
  "/assets/images/social/fb.svg",
  "/assets/images/social/fb_hover.svg",
  "/assets/images/social/github.svg",
  "/assets/images/social/github_hover.svg",
  "/assets/images/social/medium.svg",
  "/assets/images/social/medium_hover.svg",
  "/assets/images/social/more.svg",
  "/assets/images/social/more_hover.svg",
  "/assets/images/social/twitter.svg",
  "/assets/images/social/twitter_hover.svg",
  "/assets/images/social/web.svg",
  "/assets/images/social/web_hover.svg",
  "/assets/manifest.json",
  "/assets/scripts/data.json",
  "/assets/scripts/jquery.min.js",
  "/assets/scripts/bootstrap.min.js",
  "/assets/scripts/main.js",
  "/assets/scripts/render-data.js",
  "/assets/stylesheets/bootstrap.min.css",
  "/assets/stylesheets/base.css",
  "/assets/stylesheets/responsive.css",
  "/assets/stylesheets/skillbars.css",
  "/assets/stylesheets/themes/base.css"
];

self.addEventListener('install', event => {
  console.info('Service worker install event!');
  self.skipWaiting();
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(precacheResources);
      })
  );
});

self.addEventListener('activate', event => {
  console.info('Service worker activate event!');
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (oldCacheName) {
          if (cacheName !== oldCacheName) {
            return caches.delete(oldCacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request)
    .then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});