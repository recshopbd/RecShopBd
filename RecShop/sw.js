self.addEventListener('install', (e) => {
  console.log('RECSHOP Service Worker Installed');
});

self.addEventListener('fetch', (e) => {
  // This keeps the app working by fetching files from the network
  e.respondWith(fetch(e.request));
});
