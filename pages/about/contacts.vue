<template>
  <div>
    <div class="flex flex-row items-center ignore-l-global-margin" style="margin-bottom:5%; margin-top:5%">
      <iframe 
        
        style="border:0; margin-left:3%; width:60vw; height:90vh"
        loading="lazy"
        allowfullscreen
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJM3oBv8sHbUcR1eSwnYIfPGs&key=AIzaSyCT6NQDoiw-1qHVzogFs3VVhy0HKu4SHjY">
      </iframe>
      <div class="flex flex-column" style="margin-left:10%">
        <h1 class="font-bold text-2xl">{{$t('about_us.contacts.contacts')}}</h1>
        <div class="pt-3 text-lg" v-html="$t('about_us.contacts.info')"></div>
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