self.addEventListener("install", e=>{
    console.log("service worker installed");
    e.waitUntil(
        caches.open("static").then(cache=>{
            return cache.addAll(["/images/logo.jpg","/stylesheets/style.css","/javascripts/script.js"]);
        })
    )
})
self.addEventListener("fetch",e=>{
    e.respondWith(
        caches.match(e.request).then(res=>{
            return res || fetch(e.request);
        })
    )
})