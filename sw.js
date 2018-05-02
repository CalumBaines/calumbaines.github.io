importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "vue-boilerplate",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.0b778f10fbc30b071ff3.js",
    "revision": "4776ab427db7465dd18ed2db93e09a64"
  },
  {
    "url": "/_nuxt/app.ec5891be07fbccc224c38c71c3fe6fc8.css",
    "revision": "ec5891be07fbccc224c38c71c3fe6fc8"
  },
  {
    "url": "/_nuxt/layouts/default.1da07b9697f373a0a6ad.js",
    "revision": "d514d16ff80cca9b77cb1d3dbe2b574d"
  },
  {
    "url": "/_nuxt/manifest.e710596fb02f25659407.js",
    "revision": "b118866a9f03b438a344cc22cb40d0c9"
  },
  {
    "url": "/_nuxt/pages/care/case-studies/index.8dcd71766b742673e688.js",
    "revision": "4edd4a898d949bf3cadb1ee2312a8213"
  },
  {
    "url": "/_nuxt/pages/care/index.bc33f54797ad660f9305.js",
    "revision": "f71bef5946d4b604ad84affad714af3d"
  },
  {
    "url": "/_nuxt/pages/digital-hub/index.21ebb836b1b04092be00.js",
    "revision": "d33dad87105e43a554449e995ae81260"
  },
  {
    "url": "/_nuxt/pages/ecic/case-studies/index.5c0d1273d0a84b81550d.js",
    "revision": "e308adf71cf734d3fc3808df730a567e"
  },
  {
    "url": "/_nuxt/pages/ecic/index.50393b13ece0c890e810.js",
    "revision": "e985ba926573ee59986db6324021ff09"
  },
  {
    "url": "/_nuxt/pages/index.e4cf379ed146a45972e4.js",
    "revision": "b4352cbfe77b7f8236b01022418b4895"
  },
  {
    "url": "/_nuxt/pages/it/case-studies/index.55b73431f05ba3391d6f.js",
    "revision": "3133db68f1401dc15f4784230196126b"
  },
  {
    "url": "/_nuxt/pages/it/index.8b66f2472fbf78f3f5b2.js",
    "revision": "abf650e8a55fc64b7aad9e5bad9d736c"
  },
  {
    "url": "/_nuxt/pages/legal-expenses/case-studies/index.8b955612ea62283373af.js",
    "revision": "2b30bba56306ececb5f26fbc21a8ef45"
  },
  {
    "url": "/_nuxt/pages/legal-expenses/index.8e0662adba409ec665c2.js",
    "revision": "8462ed2ef85682533afce6302e39fa18"
  },
  {
    "url": "/_nuxt/pages/our-offices/index.8d58838a697ca713a89a.js",
    "revision": "c91a7b8ef5cc91a3f3598cd5c6f77c7c"
  },
  {
    "url": "/_nuxt/pages/uk/case-studies/index.5a75a9c385c00cebceff.js",
    "revision": "d010d2d23f6334afed2078af5065764e"
  },
  {
    "url": "/_nuxt/pages/uk/index.ddafb560d269142b42a5.js",
    "revision": "f560cd6e57089b9584c58ef7b502b8b3"
  },
  {
    "url": "/_nuxt/vendor.2f2fe54e4ad80529aed7.js",
    "revision": "01890edd1c7fee1e9c7cb9c48c87c21f"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('http://10.0.0.73:5000/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

