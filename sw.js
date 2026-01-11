self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// ✅ Fetch handler requerido por Chrome para installability
// ❌ No hacemos caches, no respondWith, NO interceptamos nada.
self.addEventListener("fetch", (event) => {});
