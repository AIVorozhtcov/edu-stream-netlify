<template style="background-color:#E7E7E7">
  <div>
    <NavBar />

    <main>
      <div class="relative pd-10" style="overflow: auto">
        
        <SideNavBar class="sidenavbar absolute w-full top-0 z-40" />
        <nuxt class="global-margins"/>
      </div>
      
      <NavFooter class="w-full" style="bottom:0"></NavFooter>
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
  .sidenavbar{
    background-color: rgba(128, 128, 128, 0.58);
  }

  
</style>
