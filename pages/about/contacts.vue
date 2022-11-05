<template>
  <div>
    <div class="pt-5 flex flex-row items-center" style="margin-bottom:10%">
      <iframe 
        width="600"
        height="450"
        style="border:0"
        loading="lazy"
        allowfullscreen
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJM3oBv8sHbUcR1eSwnYIfPGs&key=AIzaSyCT6NQDoiw-1qHVzogFs3VVhy0HKu4SHjY">
      </iframe>
      <div class="pl-10 flex flex-column">
        <h1>{{$t('about_us.contacts.contacts')}}</h1>
        <div class="pt-3 text-base" v-html="$t('about_us.contacts.info')"></div>
      </div>
      <!--<GmapMap
        :center="{lat:10, lng:10}"
        :zoom="7"
        map-type-id="terrain"
        style="width: 500px; height: 300px"
      >
        <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position" />
      </GmapMap> -->
  
    </div>
  </div>
</template>

<script>
</script>

<style scope>
.text-block {
    white-space: pre-line;
}
</style>