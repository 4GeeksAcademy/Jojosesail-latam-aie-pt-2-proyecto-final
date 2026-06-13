const CACHE_NAME = "trackflow-static-v1";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./application.html",
  "./validation.js",
  "./assets/images/hero-lcp-480.webp",
  "./assets/images/hero-lcp-900.webp",
  "./assets/images/hero-lcp-1400.webp"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const requestUrl = new URL(event.request.url);
  const isSameOrigin = requestUrl.origin === self.location.origin;
  const isImage = event.request.destination === "image";

  // Cache-first for images and same-origin static assets to speed up repeat visits.
  if (isImage || isSameOrigin) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;

        return fetch(event.request)
          .then((response) => {
            if (!response || response.status !== 200) return response;
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
            return response;
          })
          .catch(() => cached);
      })
    );
  }
});
