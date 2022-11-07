export const ExNavFooter = () => import('../..\\components\\exNavFooter.vue' /* webpackChunkName: "components/ex-nav-footer" */).then(c => wrapFunctional(c.default || c))
export const FAQAccordion = () => import('../..\\components\\FAQAccordion.vue' /* webpackChunkName: "components/f-a-q-accordion" */).then(c => wrapFunctional(c.default || c))
export const ModalResponse = () => import('../..\\components\\ModalResponse.vue' /* webpackChunkName: "components/modal-response" */).then(c => wrapFunctional(c.default || c))
export const NavBar = () => import('../..\\components\\NavBar.vue' /* webpackChunkName: "components/nav-bar" */).then(c => wrapFunctional(c.default || c))
export const NavFooter = () => import('../..\\components\\NavFooter.vue' /* webpackChunkName: "components/nav-footer" */).then(c => wrapFunctional(c.default || c))
export const SideNavBar = () => import('../..\\components\\SideNavBar.vue' /* webpackChunkName: "components/side-nav-bar" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
