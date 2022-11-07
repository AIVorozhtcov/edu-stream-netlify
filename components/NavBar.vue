
<template>
  <div>
    <div class="edu-color h-20 flex flex-row items-center" style="padding-left: 15%; padding-right: 15%;">
      <div class="w-22 h-22" style="">
        <nuxt-link :to="localePath('/')">  
          <img :src="logo" />
        </nuxt-link>
      </div>
      <div class="flex flex-row items-center" style="margin-left: 20%">
          <div class="flex items-center flex-row">
              <a class="text-white" href="tel:+43 1 890 89 48">+43 1 890 89 48</a> <p class="text-white pl-1"> | Rennweg 9/6, 1030 Wien |</p>
          </div>
          <div class="flex items-center flex-row ml-1.5 space-x-1.5">
              <a href="https://www.facebook.com" target="_blank">
                <img :src="facebookLogo" />
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <img :src="instagramLogo" />
              </a>
          </div>
      </div>
      <div class="flex flex-column items-end justify-center bg-white self-start h-16 rounded-b-md ml-2 flex-none">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <country-flag :country="$t('flag')" size='small'/> {{this.$i18n.locale.toUpperCase()}}
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarAnchor">
            <nuxt-link class="dropdown-item" :to="switchLocalePath('en')"><country-flag size="small" country="gb" />EN</nuxt-link>
            <nuxt-link class="dropdown-item" :to="switchLocalePath('ru')"><country-flag size="small" country="de" />DE</nuxt-link>
            <nuxt-link class="dropdown-item" :to="switchLocalePath('de')"><country-flag size="small" country="ru" />RU</nuxt-link>
          </div>
        </li>
      </div>
  </div>
    </div>
 
      
</template>

<style scoped>
.dropdown:hover .dropdown-menu {
    display: block;
    margin-top: 0; 
 }
 .isHidden {
  display: none;
}

.menu-selected p{
  color:rgb(67, 44, 243);
  text-decoration: underline
}
 .bg-dark{
  background-color: rgba(59, 39, 239, 0.763);
 }
 .bg-blue{
  background-color: rgba(59, 39, 239, 0.763);
 }
 .topnavbar-list li{
  list-style-type:'';
  display:inline;
  color: rgba(255, 255, 255, 1);
 }
 .topnavbar-list li p{
  display:inline;
  color: rgba(255, 255, 255, 1);
 }

 .white-right-border{
  border-right: 1px solid white;
 }
 .bg-grey{
  background-color: rgba(82, 82, 82, 0.842);
 }
  .edu-color {
  background-color: #253984
  }
</style>

<script>

import logo from "~/assets/edu-stream_logo.png"
import frontpageWelcome from "~/assets/frontpage_welcome.png"
import facebookLogo from "~/assets/facebook_logo.svg"
import instagramLogo from "~/assets/instagram_logo.svg"
import countryFlag from 'vue-country-flag'


export default {
  components: {
    countryFlag
  },
  data: function () {
    return {
      logo: logo,      
      frontpageWelcome: frontpageWelcome,
      facebookLogo:facebookLogo,
      instagramLogo: instagramLogo,
      isSidebarOpen: false,
      examsIsSelected: false,
      aboutIsSelected: false,
      coursesIsSelected: false
    }
  },
  methods: {}
}

</script>



