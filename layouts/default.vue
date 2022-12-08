<template style="background-color:#E7E7E7">
  <div>
    <MobileNavBar v-show="this.$store.getters['getIsMobile']" />
    <div v-show="!this.$store.getters['getIsMobile']">
      <NavBar />
      <SideNavBar class="sidenavbar-color w-full z-40" />
    </div>
    <main>
      <div class="relative" style="overflow: auto">
        
        
        <nuxt :class="this.$store.getters['getIsMobile'] ? 'mobile-global-margins' : 'global-margins'"/>
      </div>
      <MobileNavFooter v-show="this.$store.getters['getIsMobile']" class="w-full" style="bottom:0;" />
      <NavFooter v-show="!this.$store.getters['getIsMobile']" class="w-full" style="bottom:0;" />
    </main>
  </div>
</template>

<script>
import NavBar from '/components/NavBar.vue'
import NavFooter from '/components/NavFooter.vue'
import SideNavBar from '/components/SideNavBar.vue'
import MobileNavBar from '/components/MobileNavBar.vue'
import MobileNavFooter from '/components/MobileNavFooter.vue'
export default {
 // middleware: "layout-middleware",
  components: {
    NavBar: NavBar,
    NavFooter: NavFooter,
    SideNavBar:SideNavBar,
    MobileNavBar:MobileNavBar,
    MobileNavFooter: MobileNavFooter
  },
  methods: {  
    isMobile() {
      if (process.client){
        if (screen.width <= 760) {
          this.$store.commit("setIsMobile", true)
        } else {
          this.$store.commit("setIsMobile", false)
        }
      }
      
  },
  },
  mounted(){
    //this.isMobile();
    const cookieSource = this.$cookies.getAll()
    this.$store.commit("setUtmSource", cookieSource);
  },
  
}
</script>


<style>
  .sidenavbar-color{
    background-color: rgba(128, 128, 128, 0.58);
  }

  
</style>
