import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6dff6a6a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _bbc26e4e = () => interopDefault(import('..\\pages\\about\\contacts.vue' /* webpackChunkName: "pages/about/contacts" */))
const _b58b0bc2 = () => interopDefault(import('..\\pages\\about\\events.vue' /* webpackChunkName: "pages/about/events" */))
const _12a40eb4 = () => interopDefault(import('..\\pages\\about\\info.vue' /* webpackChunkName: "pages/about/info" */))
const _2362fc62 = () => interopDefault(import('..\\pages\\courses\\english.vue' /* webpackChunkName: "pages/courses/english" */))
const _9b837912 = () => interopDefault(import('..\\pages\\courses\\german.vue' /* webpackChunkName: "pages/courses/german" */))
const _639cab5f = () => interopDefault(import('..\\pages\\courses\\italian.vue' /* webpackChunkName: "pages/courses/italian" */))
const _5dc1e5c4 = () => interopDefault(import('..\\pages\\courses\\online.vue' /* webpackChunkName: "pages/courses/online" */))
const _3274096d = () => interopDefault(import('..\\pages\\exams\\_slug.vue' /* webpackChunkName: "pages/exams/_slug" */))

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
    component: _6dff6a6a,
    name: "index___en"
  }, {
    path: "/ru",
    component: _6dff6a6a,
    name: "index___ru"
  }, {
    path: "/about/contacts",
    component: _bbc26e4e,
    name: "about-contacts___de"
  }, {
    path: "/about/events",
    component: _b58b0bc2,
    name: "about-events___de"
  }, {
    path: "/about/info",
    component: _12a40eb4,
    name: "about-info___de"
  }, {
    path: "/courses/english",
    component: _2362fc62,
    name: "courses-english___de"
  }, {
    path: "/courses/german",
    component: _9b837912,
    name: "courses-german___de"
  }, {
    path: "/courses/italian",
    component: _639cab5f,
    name: "courses-italian___de"
  }, {
    path: "/courses/online",
    component: _5dc1e5c4,
    name: "courses-online___de"
  }, {
    path: "/en/about/contacts",
    component: _bbc26e4e,
    name: "about-contacts___en"
  }, {
    path: "/en/about/events",
    component: _b58b0bc2,
    name: "about-events___en"
  }, {
    path: "/en/about/info",
    component: _12a40eb4,
    name: "about-info___en"
  }, {
    path: "/en/courses/english",
    component: _2362fc62,
    name: "courses-english___en"
  }, {
    path: "/en/courses/german",
    component: _9b837912,
    name: "courses-german___en"
  }, {
    path: "/en/courses/italian",
    component: _639cab5f,
    name: "courses-italian___en"
  }, {
    path: "/en/courses/online",
    component: _5dc1e5c4,
    name: "courses-online___en"
  }, {
    path: "/ru/about/contacts",
    component: _bbc26e4e,
    name: "about-contacts___ru"
  }, {
    path: "/ru/about/events",
    component: _b58b0bc2,
    name: "about-events___ru"
  }, {
    path: "/ru/about/info",
    component: _12a40eb4,
    name: "about-info___ru"
  }, {
    path: "/ru/courses/english",
    component: _2362fc62,
    name: "courses-english___ru"
  }, {
    path: "/ru/courses/german",
    component: _9b837912,
    name: "courses-german___ru"
  }, {
    path: "/ru/courses/italian",
    component: _639cab5f,
    name: "courses-italian___ru"
  }, {
    path: "/ru/courses/online",
    component: _5dc1e5c4,
    name: "courses-online___ru"
  }, {
    path: "/en/exams/:slug?",
    component: _3274096d,
    name: "exams-slug___en"
  }, {
    path: "/ru/exams/:slug?",
    component: _3274096d,
    name: "exams-slug___ru"
  }, {
    path: "/exams/:slug?",
    component: _3274096d,
    name: "exams-slug___de"
  }, {
    path: "/",
    component: _6dff6a6a,
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
