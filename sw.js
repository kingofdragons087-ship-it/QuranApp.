self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('quran-v1').then((cache) => {
      return cache.addAll([
        'index.html',
        'splash.png',
        'ic_launcher.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
