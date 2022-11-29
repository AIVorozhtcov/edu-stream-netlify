<template>
  <div>
    <div :class="[this.$store.getters['getIsMobile'] ? 'flex-column' : 'flex-row ignore-l-global-margin', 'flex items-center']" style="margin-bottom:5%; margin-top:5%">
      <iframe 
        
      :class="[this.$store.getters['getIsMobile'] ? 'mobile-map-style' : 'map-style']"
        loading="lazy"
        allowfullscreen
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJM3oBv8sHbUcR1eSwnYIfPGs&key=AIzaSyCT6NQDoiw-1qHVzogFs3VVhy0HKu4SHjY">
      </iframe>
      <div :class="[this.$store.getters['getIsMobile'] ? 'items-center' : '', 'flex flex-column']" style="margin-left:7%">
        <h1 :class="[this.$store.getters['getIsMobile'] ? 'mobile-contacts-font' : 'contacts-font', 'font-bold']" >{{$t('about_us.contacts.contacts')}}</h1>
        <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-info-font' : 'info-font', 'w-full']" style=" padding-top: 5vh;" v-html="$t('about_us.contacts.info')"></div>
        <div id="last-column" style="padding-top: 5vh;" :class="[this.$store.getters['getIsMobile'] ? 'mobile-ignore-l-global-margin' : '', 'flex flex-row']" >
            <a href="https://www.facebook.com/edustream.vienna" style="margin-right:10%" target="_blank">
              <nuxt-img
              :class="[this.$store.getters['getIsMobile'] ? 'mobile-social-icon' : 'social-icon']"
              style="color: rgba(255, 0, 1, 1);"
              src="/facebook_logo_black.png" 
        format="webp"
  alt="Edu-stream language school facebook"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>  
            </a>
            <a href="https://www.instagram.com/edustream.at" target="_blank">
              <nuxt-img
              :class="[this.$store.getters['getIsMobile'] ? 'mobile-social-icon' : 'social-icon']"
              src="/instagram_logo_black.png" 
        format="webp"
  alt="Edu-stream language school instagram"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>  
                
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
.contacts-font{
  font-size: calc(2px + 1.460625vw)
}
.mobile-contacts-font{
  font-size: calc(4px + 6.1234vw)
}
.info-font{
  font-size: calc(1px + 1.05625vw);
}
.mobile-info-font{
  font-size: calc(3px + 5.1234vw)
}
.map-style{
  border:0;
  margin-left:3%; 
  width:55vw;
  height:100vh
}
.mobile-map-style{
  border:0;
  margin-left:3%; 
  width:90vw;
  height:60vh
}
.social-icon{
  width: 3vw; height: auto
}
.mobile-social-icon{
  width: 10vw; height: auto
}
</style>



<script>
/*
import facebookLogoBlack from "/facebook_logo_black.png"
import instagramLogoBlack from "/instagram_logo_black.png"
*/

export default {
  data: function () {
    return {
      /*
      facebookLogoBlack:facebookLogoBlack,
      instagramLogoBlack: instagramLogoBlack,
      */
    }
  }
}
</script>