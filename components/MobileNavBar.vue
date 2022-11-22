
<template>
    <div>
      <div class="edu-color h-20 w-full flex flex-row justify-start items-center" style="padding-bottom:4vh; padding-top:4vh">
        <b-button class="pl-5" v-b-toggle.sidebar-2><img style="height:3vh; width:auto;" :src="hamburgerIcon" /></b-button>
        <b-sidebar class="mobile-text-base-responsive" id="sidebar-2" width="60%" title="Sidebar" shadow>
          <a class="nav-link dropdown-toggle font-semibold f" style="margin-left:-1vw"  role="button" data-toggle="dropdown" v-b-toggle.submenu-1>
            <p class="mobile-text-xl-responsive">{{$t('menu.about_us.self')}}</p>
          </a>
          <div class="dropdown-menu" id="submenu-1"  aria-labelledby="navbarAnchor">
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
          </div>
        </b-sidebar>
        <div class="mx-auto">
          <nuxt-link :to="localePath('/')">  
            <img style="height:4vh; width:auto;" :src="logo" />
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
        isSidebarOpen: false,
        examsIsSelected: false,
        aboutIsSelected: false,
        coursesIsSelected: false
      }
    },
    methods: {}
  }
  
  </script>
  
  
  
  