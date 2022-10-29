<template>
    <section>
      <h1>About team</h1>
      <iframe 
        width="600"
        height="450"
        style="border:0"
        loading="lazy"
        allowfullscreen
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJM3oBv8sHbUcR1eSwnYIfPGs&key=AIzaSyCT6NQDoiw-1qHVzogFs3VVhy0HKu4SHjY">
      </iframe>
      <!--<GmapMap
        :center="{lat:10, lng:10}"
        :zoom="7"
        map-type-id="terrain"
        style="width: 500px; height: 300px"
      >
        <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position" />
      </GmapMap> -->
  
    </section>
</template>