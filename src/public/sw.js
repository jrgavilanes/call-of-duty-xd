// Service Worker básico para habilitar PWA
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // No hace nada, pero debe estar presente
  event.respondWith(fetch(event.request));
});
