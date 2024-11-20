'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "d91074985265f7be46b2a1a21487e1ea",
"index.html": "12593209278187d9181ade67ad339a54",
"/": "12593209278187d9181ade67ad339a54",
"flutter_bootstrap.js": "a82bed9c489b0ab18b3f61e3bef12c16",
"manifest.json": "868dbf0e93226b27e55f0eb58812466c",
"assets/AssetManifest.bin.json": "8fac5a638b72f83a1a325f7b7666fc2d",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/assets/rive/gradient.riv": "119be42a86e008d6f227081f5357bd53",
"assets/assets/images/bkash2.png": "bc3fa73d4d633677b5ca03aee9fede4f",
"assets/assets/images/app-icon-128.png": "012ecad38203036594f411bcbc325007",
"assets/assets/images/doctor-demo.jpg": "8c1a0030a21d5ed2584fc42e613bdf2c",
"assets/assets/images/splash-bg.png": "30ef07425ca83074cdc4e151600bfb19",
"assets/assets/images/logo2.png": "54240373455d4b1bd92078c1d870a943",
"assets/assets/images/vector%2520illustration%2520(2).png": "bdfcd5e4b3c488b15d1ac62567c7f6f3",
"assets/assets/images/bkash.png": "2baa8bfbca1effbf93719ada50ca0eb4",
"assets/assets/images/vector%2520illustration.png": "e9c21e5e534fafab3428a6369fae3b26",
"assets/assets/images/app-icon.png": "009a1c9fbfe3250501cc642643986a51",
"assets/assets/images/logo.png": "66bcde1453e074535565c3f6932bebcc",
"assets/assets/images/vector%2520illustration%2520(1).png": "996e563932879882deb461996cc042b1",
"assets/assets/svg/2d7c0ad1.svg": "f460c41967707d78527fa7213daf46ab",
"assets/assets/svg/emergency.svg": "fc94f8ccf33576e3c162cbd28260e0d7",
"assets/assets/svg/not-found.svg": "dd782086282d3e867ae46b282e7b7ad1",
"assets/assets/svg/community.svg": "cf54e478d88880661b512df96565fb41",
"assets/assets/svg/00d34e8d.svg": "5116d76e238d3bc84ebcf5afde6b3635",
"assets/assets/svg/ab5e821d.svg": "100712583d6a9f2b388c1e84b54f3df1",
"assets/assets/svg/nurse.svg": "a706f54ee824eac116867692f8759aea",
"assets/assets/svg/medical-news.svg": "cbe54a3a0ef09a90133ecb4e8167a3bd",
"assets/assets/svg/notification.svg": "94e94d4d38fd43e5866a436447909c4f",
"assets/assets/svg/checkup.svg": "6645f70c182f16a5ecde13c365b44149",
"assets/assets/svg/male-doctor.svg": "53c43be50641fd9cfc74478737bc303d",
"assets/assets/svg/menu.svg": "75e11dce1f2edfe6458acc9e9d5294cf",
"assets/assets/svg/empty-cart.svg": "c1e9969a9865f708d4a7455645a833ba",
"assets/assets/svg/search.svg": "4361bd705a7b139dcc5d4c140342e48b",
"assets/assets/icons/icons8-support-32.png": "c68dc8ccc94b5f40a4568b946a6ce4c9",
"assets/assets/icons/bag.png": "543d7bedcaec94e707ff35c7987315a3",
"assets/assets/icons/icons8-doctors-50.png": "7ccb43970592041ce9b8e809d68fc96e",
"assets/assets/icons/notification.png": "191adec2a582be71e5db131b748437a8",
"assets/assets/icons/register.png": "0458d9b4e7a833338af139952c92e964",
"assets/assets/icons/mail.png": "faa3aef1c0aac348321390f9f97c331c",
"assets/assets/icons/nurse.png": "c5707145ac4d841dd33d7b96f03d1d14",
"assets/assets/icons/icons8-package-50.png": "9cf20fa87a9f2e8515be4ed72cc8c1a0",
"assets/assets/icons/back.png": "c26ff861277d2b52e7036624eb4ac48a",
"assets/assets/icons/icons8-support-48.png": "8f1c7f3db9e9e3573e13db1a4cec5300",
"assets/assets/icons/icons8-notification-32.png": "a306e4461a22ad4394e72e4f8c666295",
"assets/assets/icons/facebook.png": "88185cfe8061f1be73da1d5ea3d2271d",
"assets/assets/icons/pharmacy2.png": "dee129609ab6cec025e24c4c24731765",
"assets/assets/icons/medical-checkup.png": "73db3d1fc67547f5554d7b85b96c1fb8",
"assets/assets/icons/order-history.png": "e9859fbff9e9f2b681f50cdc1b7ec7fe",
"assets/assets/icons/nurse2.png": "3b57606e86790a25636ad43d252cb49e",
"assets/assets/icons/icons8-x-100.png": "c40b490725ec39172ce298c8256f97a9",
"assets/assets/icons/icons8-logout-32.png": "37fc5c2a66b80711f65716ea20462ead",
"assets/assets/icons/doctor-32.png": "4290f802f690cb8c81692bc6ce213dde",
"assets/assets/icons/icons8-money-50.png": "21bb26decb14fdc0971b3128e8c2199c",
"assets/assets/icons/google-32.png": "8a8eed4045063f6f1d71228e59b2a4c2",
"assets/assets/icons/settings.png": "48e633855173c84ba2fb822866def585",
"assets/assets/icons/ambulance-flaticon.png": "c91efbf9d634f2e7804b3cf1835e9ba4",
"assets/assets/icons/icons8-twitter-100.png": "e95d439ed1ccff1653a37154a7827814",
"assets/assets/icons/location.png": "418f82fc3baa72f6de2fce203411304e",
"assets/assets/icons/doctor.png": "a54c1eafca03fbbd4ff071b86c2abbc9",
"assets/assets/icons/icons8-doctors-bag-32.png": "82773e36dde80a56fd503f060d1ae212",
"assets/assets/icons/partners.png": "7706fdfacaf256d829ee667a7e36e041",
"assets/assets/icons/search.png": "fd4b1b104017fa07dcdad0b9c1618292",
"assets/assets/icons/news-report.png": "6e4bfa4ac1fcd5b16799ba765fde72e0",
"assets/assets/icons/search2.png": "e7ea29c682b72d22ed48699eee62e8c4",
"assets/assets/icons/doctor-flaticon.png": "3595b2a779b1713fedd2197ea7b2302f",
"assets/assets/icons/user.png": "c8f8caaf91138b2bfb096f1efb94e093",
"assets/assets/icons/google.png": "566509b67b5ae59a6346bcfffdfa08a1",
"assets/assets/icons/order.png": "7487014cf7bad1a21930f8c973906ef7",
"assets/assets/icons/home.png": "f7c7ddf97bc64ff1a310e72988676492",
"assets/assets/icons/icons8-users-50.png": "6291668700a166ce8297ead973226bbb",
"assets/assets/icons/icons8-cart-32.png": "4658d4dadb385551e8428016c3db3d23",
"assets/assets/icons/password.png": "8151c7baea7b6ed2f785a886a088f185",
"assets/assets/icons/pharmacy.png": "842c64fd317cf4567cc05a7adc00f109",
"assets/assets/icons/emergency.png": "02ac4de15aa47a94db1077ca7ea8848c",
"assets/assets/icons/icons8-schedule-32.png": "00a21dee76c16bbd69a3b958fbc39eec",
"assets/assets/icons/ambulance.png": "3062e4844db5c213da1ff8ddf56b5175",
"assets/assets/icons/agent.png": "eaca274c909d24a5688a03e573922aee",
"assets/assets/icons/icons8-home-32.png": "8a049ac805d9e9e7feaf9d811f35504e",
"assets/assets/icons/package-48.png": "e3570e1aac267ff733fa115f510da801",
"assets/assets/lottie/calender2.json": "25cb3bf72fb6c3d351cf17458563146d",
"assets/assets/lottie/3c0bce86.json": "4db62b09e13ec5b3795c9e45fd290aa2",
"assets/assets/lottie/loading.json": "5e2a248a32ce2b3d1c1f61a17eee1cad",
"assets/assets/lottie/c651d888.json": "04b7aa2b597d788911435fcb29efce70",
"assets/assets/lottie/loading2.json": "df83b65e6cddbac8b1fdc3254c372965",
"assets/assets/lottie/settings.json": "2ce28a5647e0b286da185a002e2b5c1e",
"assets/assets/lottie/2c8ca09b.json": "1f75353087473a53ed78060c5e251e4d",
"assets/assets/lottie/payment-success.json": "b0af42656ea0337936befa943da0024f",
"assets/assets/lottie/profile.json": "25528495eb364d5d77289de41be21ae0",
"assets/assets/lottie/f6cc5648.json": "c7336127a7bfb1ad2f6749d4bbc1f2a8",
"assets/assets/lottie/home.json": "052c0ef9b4039311882f9e891e7196df",
"assets/assets/lottie/warning.json": "99505bde58aa743327ae76942936b2ce",
"assets/assets/lottie/cart.json": "dfe8558f0f76a2fb2156774198c44707",
"assets/assets/lottie/fav.json": "2b2cdf654611d74da0e9f2c509281893",
"assets/assets/lottie/calender.json": "856a7945a0ad3ce7d463479cefde388a",
"assets/assets/lottie/empty-cart.json": "537db782ecdee4c496d80522ba00da8d",
"assets/assets/lottie/fb3a6a17.json": "9529994f4694b18d79c905d8ad389c72",
"assets/fonts/MaterialIcons-Regular.otf": "483621baedae67c6f29b9be39695931a",
"assets/NOTICES": "610bd2c5821614083d54fbe0f230fccb",
"assets/AssetManifest.json": "323e5f3eed2e62a8698d0c4997049271",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin": "3da96fd055dcb96f136b32533e55911d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js.symbols": "58dcc01e30099382fa92dce2380cd7cf",
"canvaskit/canvaskit.wasm": "78b9309f3bf6ccd94c7569945c9c344d",
"canvaskit/skwasm_st.wasm": "14be5e6268cd4e3e80caa07e8ceed900",
"canvaskit/skwasm.wasm": "fd2098ced28c6cdf814a261b666680c5",
"canvaskit/canvaskit.js": "de27f912e40a372c22a069c1c7244d9b",
"canvaskit/skwasm_st.js.symbols": "da210335b5bbbc02ead100da96ab34be",
"canvaskit/chromium/canvaskit.wasm": "d6463da2fd70207a2bfece2f04715f19",
"canvaskit/chromium/canvaskit.js": "73343b0c5d471d1114d7f02e06c1fdb2",
"canvaskit/chromium/canvaskit.js.symbols": "8a65c5ebe7c9c953d1feb5a1388fa860",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/canvaskit.js.symbols": "737048e1d3ad50f18036f932917e50e0",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js": "ee005f7798ebec5c379984c282f9dae7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
