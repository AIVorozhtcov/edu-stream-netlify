export { default as FAQAccordion } from '../..\\components\\FAQAccordion.vue'
export { default as FAQAccordion2 } from '../..\\components\\FAQAccordion2.vue'
export { default as MobileNavBar } from '../..\\components\\MobileNavBar.vue'
export { default as MobileNavFooter } from '../..\\components\\MobileNavFooter.vue'
export { default as ModalForm } from '../..\\components\\ModalForm.vue'
export { default as ModalForm2 } from '../..\\components\\ModalForm2.vue'
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
