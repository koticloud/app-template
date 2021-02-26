const cacheName = 'koti-cloud-app';

const filesToCache = [
    // NOTE: Edit as needed
    './',
    './manifest.json',
    './bin/app.js',
    './bin/app.css',
    // App icons
    './assets/icons/favicon.ico',
    './assets/icons/icon-128.png',
    './assets/icons/icon-144.png',
    './assets/icons/icon-152.png',
    './assets/icons/icon-192.png',
    './assets/icons/icon-256.png',
    './assets/icons/icon-512.png',
];

// When an app is installed - start the service worker and cache all of the
// app's content
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

// Serving content
self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            // "Cache, falling back to network" strategy - return cached files
            // if available, otherwise fetch from network
            return response || fetch(e.request);
        })
            .catch(() => {
                // Ignore exceptions
            })
    );
});
