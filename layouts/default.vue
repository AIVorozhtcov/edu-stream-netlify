<template>
  <div>
    <NavBar />

    <main>
      <div class="container">
        <nuxt />
      </div>
    </main>
    <NavFooter class="w-full" style="position:fixed; bottom:0"></NavFooter>
  </div>
</template>

<script>
import NavBar from '/components/NavBar.vue'
import NavFooter from '~/components/NavFooter.vue'
export default {
  components: {
    NavBar: NavBar,
    NavFooter: NavFooter

  }
}
</script>


<style>

</style>
