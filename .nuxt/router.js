import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _67fd4c50 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _e413a8b4 = () => interopDefault(import('..\\pages\\about\\contacts.vue' /* webpackChunkName: "pages/about/contacts" */))
const _3e0ee001 = () => interopDefault(import('..\\pages\\about\\info.vue' /* webpackChunkName: "pages/about/info" */))
const _4848df94 = () => interopDefault(import('..\\pages\\about\\photos.vue' /* webpackChunkName: "pages/about/photos" */))
const _c31a18d0 = () => interopDefault(import('..\\pages\\about\\reviews.vue' /* webpackChunkName: "pages/about/reviews" */))
const _7d6378a2 = () => interopDefault(import('..\\pages\\courses\\english.vue' /* webpackChunkName: "pages/courses/english" */))
const _c3d4b378 = () => interopDefault(import('..\\pages\\courses\\german.vue' /* webpackChunkName: "pages/courses/german" */))
const _1a9cbb9c = () => interopDefault(import('..\\pages\\courses\\italian.vue' /* webpackChunkName: "pages/courses/italian" */))
const _575d0a82 = () => interopDefault(import('..\\pages\\exams\\oif.vue' /* webpackChunkName: "pages/exams/oif" */))
const _685151b6 = () => interopDefault(import('..\\pages\\exams\\osd.vue' /* webpackChunkName: "pages/exams/osd" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/en",
    component: _67fd4c50,
    name: "index___en"
  }, {
    path: "/ru",
    component: _67fd4c50,
    name: "index___ru"
  }, {
    path: "/about/contacts",
    component: _e413a8b4,
    name: "about-contacts___de"
  }, {
    path: "/about/info",
    component: _3e0ee001,
    name: "about-info___de"
  }, {
    path: "/about/photos",
    component: _4848df94,
    name: "about-photos___de"
  }, {
    path: "/about/reviews",
    component: _c31a18d0,
    name: "about-reviews___de"
  }, {
    path: "/courses/english",
    component: _7d6378a2,
    name: "courses-english___de"
  }, {
    path: "/courses/german",
    component: _c3d4b378,
    name: "courses-german___de"
  }, {
    path: "/courses/italian",
    component: _1a9cbb9c,
    name: "courses-italian___de"
  }, {
    path: "/exams/oif",
    component: _575d0a82,
    name: "exams-oif___de"
  }, {
    path: "/exams/osd",
    component: _685151b6,
    name: "exams-osd___de"
  }, {
    path: "/en/about/contacts",
    component: _e413a8b4,
    name: "about-contacts___en"
  }, {
    path: "/en/about/info",
    component: _3e0ee001,
    name: "about-info___en"
  }, {
    path: "/en/about/photos",
    component: _4848df94,
    name: "about-photos___en"
  }, {
    path: "/en/about/reviews",
    component: _c31a18d0,
    name: "about-reviews___en"
  }, {
    path: "/en/courses/english",
    component: _7d6378a2,
    name: "courses-english___en"
  }, {
    path: "/en/courses/german",
    component: _c3d4b378,
    name: "courses-german___en"
  }, {
    path: "/en/courses/italian",
    component: _1a9cbb9c,
    name: "courses-italian___en"
  }, {
    path: "/en/exams/oif",
    component: _575d0a82,
    name: "exams-oif___en"
  }, {
    path: "/en/exams/osd",
    component: _685151b6,
    name: "exams-osd___en"
  }, {
    path: "/ru/about/contacts",
    component: _e413a8b4,
    name: "about-contacts___ru"
  }, {
    path: "/ru/about/info",
    component: _3e0ee001,
    name: "about-info___ru"
  }, {
    path: "/ru/about/photos",
    component: _4848df94,
    name: "about-photos___ru"
  }, {
    path: "/ru/about/reviews",
    component: _c31a18d0,
    name: "about-reviews___ru"
  }, {
    path: "/ru/courses/english",
    component: _7d6378a2,
    name: "courses-english___ru"
  }, {
    path: "/ru/courses/german",
    component: _c3d4b378,
    name: "courses-german___ru"
  }, {
    path: "/ru/courses/italian",
    component: _1a9cbb9c,
    name: "courses-italian___ru"
  }, {
    path: "/ru/exams/oif",
    component: _575d0a82,
    name: "exams-oif___ru"
  }, {
    path: "/ru/exams/osd",
    component: _685151b6,
    name: "exams-osd___ru"
  }, {
    path: "/",
    component: _67fd4c50,
    name: "index___de"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
