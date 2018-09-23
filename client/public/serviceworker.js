self.addEventListener('install', () => {
    console.log('sw installed version: 1');
});

self.addEventListener('activate', () => {
    console.log('sw activate');
});

self.addEventListener('fetch', (event) => {
    console.log(event.request.url);
    event.respondWith(fetch(event.request));
});