<template style="background-color:#E7E7E7">
  <div>
    <NavBar />
    <SideNavBar class="sidenavbar-color w-full z-40" />

    <main>
      <div class="relative" style="overflow: auto">
        
        
        <nuxt class="global-margins"/>
      </div>
      
      <NavFooter class="w-full" style="bottom:0;"></NavFooter>
    </main>
  </div>
</template>

<script>
import NavBar from '/components/NavBar.vue'
import NavFooter from '/components/NavFooter.vue'
import SideNavBar from '/components/SideNavBar.vue'
export default {
  components: {
    NavBar: NavBar,
    NavFooter: NavFooter,
    SideNavBar:SideNavBar,
  }
}
</script>


<style>
  .sidenavbar-color{
    background-color: rgba(128, 128, 128, 0.58);
  }

  
</style>
