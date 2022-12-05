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
    this.isMobile();
  },
  created(){
    const cookieSource = this.$cookies.get('utm_source');
    const cookieContent = this.$cookies.get('utm_content');
    const cookieCpc = this.$cookies.get('utm_cpc');
    const cookieCampaign = this.$cookies.get('utm_campaign');
    const cookieReferrer = this.$cookies.get('utm_referrer');
    this.$store.commit("setUtmSource", cookieSource, cookieContent, cookieCpc, cookieCampaign, cookieReferrer);
    
  } 
  
}
</script>


<style>
  .sidenavbar-color{
    background-color: rgba(128, 128, 128, 0.58);
  }

  
</style>
