<template>
  <div>
    <NavBar />

    <main>
      <div class="container pd-10" style="overflow: auto">
        <nuxt/>
      </div>
      
      <NavFooter class="w-full" style="bottom:0"></NavFooter>
    </main>
  </div>
</template>

<script>
import NavBar from '/components/NavBar.vue'
import NavFooter from '/components/NavFooter.vue'
export default {
  components: {
    NavBar: NavBar,
    NavFooter: NavFooter

  }
}
</script>


<style>

</style>
