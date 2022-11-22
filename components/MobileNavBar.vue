
<template>
  <div>
    <div class="edu-color h-20 w-full flex flex-row justify-start items-center" style="padding-bottom:4vh; padding-top:4vh">
      <b-button class="pl-5" v-b-toggle.sidebar-2><img style="height:3vh; width:auto;" :src="hamburgerIcon" /></b-button>
      <b-sidebar v-model="isMobileSidebarOpen" class="mobile-text-base-responsive flex flex-column justify-around items-start" @focusout="closeMobileSidebar" id="sidebar-2" width="80%" title="Sidebar" no-header shadow>
        <div class="flex flex-column justify-between w-full" @mouseleave="closeMobileSidebar">
        <p class="mobile-text-xl-responsive font-bold">{{$t('menu.about_us.self')}}</p>
        <div class="flex flex-row justify-between">
          <nuxt-link class="hover:no-underline mobile-text-base-responsive w-full pl-7 pb-3"  :to="localePath('/about/info')">{{$t('menu.about_us.about_us')}}</nuxt-link>
          <nuxt-link class="hover:no-underline mobile-text-base-responsive w-full pl-7 pb-3"  :to="localePath('/about/events')">{{$t('menu.about_us.events')}}</nuxt-link>
          <nuxt-link class="hover:no-underline mobile-text-base-responsive w-full pl-7 pb-3"  :to="localePath('/about/contacts')">{{$t('menu.about_us.contacts')}}</nuxt-link>
        </div>
        <p class="mobile-text-xl-responsive font-bold">{{$t('menu.exams.self')}}</p>
        <div class="flex flex-row justify-between">
          <nuxt-link class="hover:no-underline mobile-text-base-responsive w-full pl-7 pb-3"  :to="localePath('/exams/oif')">OIF</nuxt-link>
          <nuxt-link class="hover:no-underline mobile-text-base-responsive w-full pl-7 pb-3"  :to="localePath('/exams/osd')">OSD</nuxt-link>
        </div>
        <p class="mobile-text-xl-responsive font-bold">{{$t('menu.courses.self')}}</p>
        <div class="flex flex-row justify-between">
          <nuxt-link class="hover:no-underline mobile-text-base-responsive w-full pl-7 pb-3"  :to="localePath('/courses/german')">{{$t('menu.courses.de')}}</nuxt-link>
          <nuxt-link class="hover:no-underline mobile-text-base-responsive w-full pl-7 pb-3"  :to="localePath('/courses/english')">{{$t('menu.courses.en')}}</nuxt-link>
          <nuxt-link class="hover:no-underline mobile-text-base-responsive w-full pl-7 pb-3"  :to="localePath('/courses/italian')">{{$t('menu.courses.it')}}</nuxt-link>
        </div>
        <div class="flex flex-column items-start w-16 h-16 justify-center pt-4 ml-2 bg-white self-start rounded-b-md text-navbar-sm" style="margin-bottom:3vh;">
          <div class="nav-item dropdown">
            <a class="nav-link dropdown-toggle font-semibold flex flex-row items-center justify-start" style="margin-left:-1vw"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <country-flag :country="$t('flag')" size='big' /> {{this.$i18n.locale.toUpperCase()}}
            </a>
            <div class="dropdown-menu"  aria-labelledby="navbarAnchor">
              <nuxt-link class="dropdown-item flex flex-row items-center"  :to="switchLocalePath('en')"><country-flag size="big" country="gb" />EN</nuxt-link>
              <nuxt-link class="dropdown-item flex flex-row items-center"  :to="switchLocalePath('de')"><country-flag size="big" country="de" />DE</nuxt-link>
              <nuxt-link class="dropdown-item flex flex-row items-center"  :to="switchLocalePath('ru')"><country-flag size="big" country="ru" />RU</nuxt-link>
            </div>
          </div>
        </div>
      </div>
        <!--<div class="dropdown-menu" id="submenu-1"  aria-labelledby="navbarAnchor">
          <nuxt-link class="hover:no-underline w-full pb-3" style="font-size: calc(12px + 2.090625vw);" :to="localePath('/about/info')">{{$t('menu.about_us.about_us')}}</nuxt-link>
          <nuxt-link class="hover:no-underline w-full pb-3" style="font-size: calc(12px + 2.090625vw);" :to="localePath('/about/events')">{{$t('menu.about_us.events')}}</nuxt-link>
          <nuxt-link class="hover:no-underline w-full pb-3" style="font-size: calc(12px + 2.090625vw);" :to="localePath('/about/contacts')">{{$t('menu.about_us.contacts')}}</nuxt-link>
        </div>
        <div class="flex flex-column items-start w-16 h-16 justify-center pt-4 ml-2 bg-white self-start rounded-b-md text-navbar-sm" style="margin-bottom:3vh;">
          <div class="nav-item dropdown">
            <a class="nav-link dropdown-toggle font-semibold flex flex-row items-center justify-start" style="margin-left:-1vw"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <country-flag :country="$t('flag')" size='big' /> {{this.$i18n.locale.toUpperCase()}}
            </a>
            <div class="dropdown-menu"  aria-labelledby="navbarAnchor">
              <nuxt-link class="dropdown-item flex flex-row items-center"  :to="switchLocalePath('en')"><country-flag size="big" country="gb" />EN</nuxt-link>
              <nuxt-link class="dropdown-item flex flex-row items-center"  :to="switchLocalePath('de')"><country-flag size="big" country="de" />DE</nuxt-link>
              <nuxt-link class="dropdown-item flex flex-row items-center"  :to="switchLocalePath('ru')"><country-flag size="big" country="ru" />RU</nuxt-link>
            </div>
          </div>
        </div>-->
      </b-sidebar>
      <div class="" style="right:50vw">
        <nuxt-link :to="localePath('/')">  
          <img style="height:8vh; width:auto; max-width:100vw" :src="logo" />
        </nuxt-link>
      </div>
  </div>
  </div>
 
      
</template>

<style scoped>
 .isHidden {
  display: none;
}

.text-navbar-sm{
  font-size:calc(1px + 0.730625vw);  
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

import logo from "~/assets/edu-stream_logo_mobile.png"
import facebookLogo from "~/assets/facebook_logo.svg"
import instagramLogo from "~/assets/instagram_logo.svg"
import countryFlag from 'vue-country-flag'
import hamburgerIcon from '~/assets/hamburger_icon.png'


export default {
  components: {
    countryFlag
  },
  data: function () {
    return {
      logo: logo,      
      facebookLogo:facebookLogo,
      instagramLogo: instagramLogo,
      hamburgerIcon: hamburgerIcon,
      isMobileSidebarOpen: false,
      examsIsSelected: false,
      aboutIsSelected: false,
      coursesIsSelected: false
    }
  },
  methods: {
    closeMobileSidebar() {
      this.isMobileSidebarOpen = false;
    }
  }
}

</script>



