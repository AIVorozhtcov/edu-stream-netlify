<template>
  <div>
    <div class="flex flex-row items-center ignore-l-global-margin" style="margin-bottom:5%; margin-top:5%">
      <iframe 
        
        style="border:0; margin-left:3%; width:55vw; height:100vh"
        loading="lazy"
        allowfullscreen
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJM3oBv8sHbUcR1eSwnYIfPGs&key=AIzaSyCT6NQDoiw-1qHVzogFs3VVhy0HKu4SHjY">
      </iframe>
      <div class="flex flex-column" style="margin-left:7%">
        <h1 class="font-bold" style="font-size: calc(2px + 1.460625vw)">{{$t('about_us.contacts.contacts')}}</h1>
        <div class="w-full" style="font-size: calc(1px + 1.05625vw); padding-top: 5vh;" v-html="$t('about_us.contacts.info')"></div>
        <div id="last-column" style="padding-top: 5vh;" class="flex flex-row" >
            <a href="https://www.facebook.com/edustream.vienna" style="margin-right:10%" target="_blank">
                <img style="width: 3vw; color: rgba(255, 0, 1, 1); height: auto" :src="facebookLogoBlack" />
            </a>
            <a href="https://www.instagram.com/edustream.at" target="_blank">
                <img style="width: 3vw; height: auto" :src="instagramLogoBlack" />
            </a>
        </div>
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



<style scope>
.text-block {
    white-space: pre-line;
}
</style>


<script>
import facebookLogoBlack from "~/assets/facebook_logo_black.png"
import instagramLogoBlack from "~/assets/instagram_logo_black.png"


export default {
  data: function () {
    return {
      facebookLogoBlack:facebookLogoBlack,
      instagramLogoBlack: instagramLogoBlack,
    }
  }
}
</script>