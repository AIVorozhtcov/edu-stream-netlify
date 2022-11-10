export { default as ExNavFooter } from '../..\\components\\exNavFooter.vue'
export { default as FAQAccordion } from '../..\\components\\FAQAccordion.vue'
export { default as ModalResponse } from '../..\\components\\ModalResponse.vue'
export { default as NavBar } from '../..\\components\\NavBar.vue'
export { default as NavFooter } from '../..\\components\\NavFooter.vue'
export { default as SideNavBar } from '../..\\components\\SideNavBar.vue'

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
