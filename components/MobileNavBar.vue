
<template>
  <div>
    <div class="edu-color h-20 w-full flex flex-row justify-start items-center" style="padding-bottom:4vh; padding-top:4vh">
      <b-button class="pl-5" v-b-toggle.sidebar-2>
        <nuxt-img
        style="height:3vh; width:auto;"
        :src="isMobileSidebarOpen ? '/mobile_close_navbar_icon.png' : '/hamburger_icon.png'"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>        
      </b-button>
      <b-sidebar v-model="isMobileSidebarOpen" class="mobile-text-base-responsive flex flex-column justify-around items-start" @focusout="closeMobileSidebar" id="sidebar-2" width="63%" no-header>
        
        <div class="flex flex-column justify-between w-full" @mouseleave="closeMobileSidebar">
        <div @click="aboutIsSelected = true; coursesIsSelected = false; examsIsSelected = false"  :class="[aboutIsSelected ? 'menu-selected' : '', 'mobile-text-menu-title-responsive flex flex-row items-center']" style="margin-top:5vh; margin-left:5vw">
          <p>{{$t('menu.about_us.self')}}</p>
          <b-icon style="width:4vw; height:auto" class="menu-arrow-icon" :icon="this.aboutHoverHandler()"/>
        </div>
        <div :class="[aboutIsSelected ? '' : 'isHidden','flex flex-column mobile-text-menu-link-responsive font-bold justify-between']" style="margin-left:10vw">
          <nuxt-link class="hover:no-underline w-full pl-7 pb-3"  :to="localePath('/about/info')">{{$t('menu.about_us.about_us')}}</nuxt-link>
          <nuxt-link class="hover:no-underline w-full pl-7 pb-3"  :to="localePath('/about/events')">{{$t('menu.about_us.events')}}</nuxt-link>
          <nuxt-link class="hover:no-underline w-full pl-7 pb-3"  :to="localePath('/about/contacts')">{{$t('menu.about_us.contacts')}}</nuxt-link>
        </div>
        <div @click="examsIsSelected = true; coursesIsSelected = false; aboutIsSelected = false"  :class="[examsIsSelected ? 'menu-selected' : '', 'mobile-text-menu-title-responsive flex flex-row items-center']" style="margin-top:2vh; margin-left:5vw">
          <p>{{$t('menu.exams.self')}}</p>
          <b-icon style="width:4vw; height:auto" class="menu-arrow-icon" :icon="this.examsHoverHandler()"/>
        </div>
        <div :class="[examsIsSelected ? '' : 'isHidden','flex flex-column mobile-text-menu-link-responsive font-bold justify-between']" style="margin-left:10vw">
          <nuxt-link class="hover:no-underline w-full pl-7 pb-3"  :to="localePath('/exams/oif')">OIF</nuxt-link>
          <nuxt-link class="hover:no-underline w-full pl-7 pb-3"  :to="localePath('/exams/osd')">OSD</nuxt-link>
        </div>
        <div @click="coursesIsSelected = true; aboutIsSelected = false; examsIsSelected = false"  :class="[coursesIsSelected ? 'menu-selected' : '', 'mobile-text-menu-title-responsive flex flex-row items-center']" style="margin-top:2vh; margin-left:5vw">
          <p>{{$t('menu.courses.self')}}</p>
          <b-icon style="width:4vw; height:auto" class="menu-arrow-icon" :icon="this.coursesHoverHandler()"/>
        </div>
        <div :class="[coursesIsSelected ? '' : 'isHidden','flex flex-column mobile-text-menu-link-responsive font-bold justify-between']" style="margin-left:10vw">
          <nuxt-link class="hover:no-underline w-full pl-7 pb-3"  :to="localePath('/courses/german')">{{$t('menu.courses.de')}}</nuxt-link>
          <nuxt-link class="hover:no-underline w-full pl-7 pb-3"  :to="localePath('/courses/english')">{{$t('menu.courses.en')}}</nuxt-link>
          <nuxt-link class="hover:no-underline w-full pl-7 pb-3"  :to="localePath('/courses/italian')">{{$t('menu.courses.it')}}</nuxt-link>
        </div>
        
        
        <div class="flex flex-column items-start w-16 h-16 justify-center pt-4 ml-2 bg-white self-start rounded-b-md text-navbar-sm" style="margin-bottom:3vh;">
          <div class="nav-item dropdown">
            <a class="nav-link dropdown-toggle font-semibold flex flex-row items-center justify-start" style="margin-left:-1vw"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <country-flag :country="$t('flag')" size='big' /> {{this.$i18n.locale.toUpperCase()}}
            </a>
            <div class="dropdown-menu"  aria-labelledby="navbarAnchor">
              <nuxt-link class="dropdown-item flex flex-row items-center"  :to="switchLocalePath('en')"><country-flag size="big" country="gb" /></nuxt-link>
              <nuxt-link class="dropdown-item flex flex-row items-center"  :to="switchLocalePath('de')"><country-flag size="big" country="de" /></nuxt-link>
              <nuxt-link class="dropdown-item flex flex-row items-center"  :to="switchLocalePath('ru')"><country-flag size="big" country="ru" /></nuxt-link>
            </div>
          </div>
        </div>
        <div class="flex flex-row" style="margin-top:28vh; margin-left:5vw; padding-bottom:2vh; margin-bottom:2vh; border-bottom: 1px solid #CCCACA;;">
          <a href="https://www.facebook.com/edustream.vienna" target="_blank">
            <nuxt-img
            style="width: 8vw; height: auto" 
            src="/facebook_color_logo.png"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>        
                </a>
                <a href="https://www.instagram.com/edustream.at" style="margin-left:0.5vw" target="_blank">
                  <nuxt-img
                  style="width: 8vw; height: auto; margin-left:4vw" 
                  src="/instagram_color_logo.png" 
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>        
                </a>

        </div>
        <div class="flex flex-column justify-between h-full font-normal mobile-navbar-footer-text-responsive" style="margin-left:5vw">
          <p > Rennweg 9/6, 1030 Wien</p>
          <div class="flex flex-row" style="margin-top:2vh">
            <nuxt-img
            style="width: 6vw; height: auto"
            src="/phone_black_icon.svg" 
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>        
            <div style="margin-left:2vw" v-html="$t('footer.phone_number')"></div>
          </div>
          <div class="flex flex-row" style="margin-top:2vh">
            <nuxt-img
            style="width: 6vw; height: auto"
            src="/email_black_icon.svg"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>        
            <div style="margin-left:2vw" v-html="$t('footer.email_address')"></div>
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
      <div class=" absolute mx-auto" style="left: 50%; transform: translate(-50%); ">
        <nuxt-link :to="localePath('/')">  
          <nuxt-img
          style="height:8vh; width:auto; max-width:100vw"
          src="/edu-stream_logo_mobile.png"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>        
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
.mobile-text-menu-title-responsive{
  font-size: calc(11px + 3.61625vw);
}
.mobile-text-menu-link-responsive{
  font-size: calc(11px + 4.61625vw);
}
.mobile-navbar-footer-text-responsive{
  font-size: calc(11px + 3.21625vw);
}
.bi-x{
  width:25vw;
  height:auto;
}
.menu-selected p{
  color: rgba(67, 133, 245, 1) !important;
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
 .menu-selected p {
    color: rgb(67, 44, 243);
    text-decoration: none !important;
}
 .bg-grey{
  background-color: rgba(82, 82, 82, 0.842);
 }
  .edu-color {
  background-color: #253984
  }
  .btn-secondary:hover, .btn-secondary:focus, .btn-secondary:active, .btn-secondary.active, .open>.dropdown-toggle.btn-secondary , .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open>.dropdown-toggle.btn-primary, .btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show > .btn-secondary.dropdown-toggle {
    color:rgba(255, 255, 255, 0);
    background-color: rgba(255, 255, 255, 0);
    border-color: rgba(255, 255, 255, 0);
    box-shadow: 0 0 0 0rem rgb(130 138 145 / 50%);
}
.btn-secondary{
    border: none;
}
</style>


<script>
/*
import logo from "/edu-stream_logo_mobile.png"
import facebookColorLogo from "/facebook_color_logo.png"
import instagramColorLogo from "/instagram_color_logo.png"
import hamburgerIcon from '/hamburger_icon.png'
import mobileSidebarCloseButton from '/mobile_sidebar_close_button.svg'
import phoneBlackIcon from "/phone_black_icon.svg"
import emailBlackIcon from "/email_black_icon.svg"
import mobileCloseNavbarIcon from "/mobile_close_navbar_icon.png"
*/

import countryFlag from 'vue-country-flag'


export default {
  components: {
    countryFlag
  },
  data: function () {
    return {
      /*logo: logo,      
      facebookColorLogo:facebookColorLogo,
      instagramColorLogo: instagramColorLogo,
      hamburgerIcon: hamburgerIcon,
      mobileSidebarCloseButton: mobileSidebarCloseButton,
      phoneBlackIcon: phoneBlackIcon,
      emailBlackIcon: emailBlackIcon,
      mobileCloseNavbarIcon: mobileCloseNavbarIcon,*/
      isMobileSidebarOpen: false,
      examsIsSelected: false,
      aboutIsSelected: false,
      coursesIsSelected: false
    }
  },
  
  created () {
    if (process.browser){
      window.addEventListener('scroll', this.handleScroll);
    }
    
  },
  methods: {
    closeMobileSidebar() {
      this.isMobileSidebarOpen = false;
    },
    
    handleScroll (event) {
      this.closeMobileSidebar();
    },
    
    aboutHoverHandler(){
      if (this.aboutIsSelected){
        return "chevron-compact-up";
      } else {
        return "chevron-compact-down";
      }
    },
    
    examsHoverHandler(){
      if (this.examsIsSelected){
        return "chevron-compact-up";
      } else {
        return "chevron-compact-down";
      }
    },
    coursesHoverHandler(){
      if (this.coursesIsSelected){
        return "chevron-compact-up";
      } else {
        return "chevron-compact-down";
      }
    }
  },
}


</script>



