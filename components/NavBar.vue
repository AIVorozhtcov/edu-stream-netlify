
<template>
  <div>
    <div class="edu-color w-full h-24 flex flex-row items-center">
      <div class="w-22 h-22" style="margin-left: 22%">
        <nuxt-link to="/">  
          <img :src="logo" />
        </nuxt-link>
      </div>
      <div class="flex flex-row items-center flex-none" style="margin-left: 25%">
          <div>
              <p class="text-white">+43 1 890 89 48 | Rennweg 9/6, 1030 Wien |</p>
          </div>
          <div class="flex flex-row ml-1.5 space-x-1.5">
              <a href="https://www.facebook.com" target="_blank">
                <img :src="facebookLogo" />
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <img :src="instagramLogo" />
              </a>
          </div>
      </div>
      <div class="flex flex-column items-end justify-center bg-white self-start h-16 w-13 rounded-b-md ml-2 flex-none">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            lng
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarAnchor">
            <nuxt-link class="dropdown-item" :to="switchLocalePath('en')">En</nuxt-link>
            <nuxt-link class="dropdown-item" :to="switchLocalePath('de')">De</nuxt-link>
            <nuxt-link class="dropdown-item" :to="switchLocalePath('ru')">Ru</nuxt-link>
          </div>
        </li>
      </div>
  </div>
    <ul style="list-style-type:''; margin:0; padding:0;">
      <!-- <li style="float:left; width:100%; padding-left: 22%; background-color:#253984;">
        <ul class="topnavbar-list">
          <li> 
            <a class="navbar-brand" id="navbarBrand" href="#">
                <img :src="logo" width="60" height="60" alt="">
            </a>
          </li>
          <li style="padding-left: 25%">
            <p>+43 1 890 89 48</p>
          </li>
          <li class="white-right-border" style="padding-left:1%"></li>
          <li style="padding-left:1%">
            <p>Rennweg 9/6, 1030 Wien</p>
          </li>
          <li class="white-right-border" style="padding-left:1%"></li>
          <li style="padding-left:1%">
            <a href="https://www.facebook.com" target="_blank">
              <img :src="facebookLogo" width="25" height="25" alt="">
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank">
              <img :src="instagramLogo" width="30" height="30" alt="">
            </a>
          </li>
          <li style="background-color:rgba(255, 255, 255, 1); padding-top:0%; height: 100px">
            <a href="#">bam</a>
          </li>
        </ul>
      </li>
    -->

      <li style="float: left; width: 100%; padding-left:21%; background-color: background: rgba(255, 255, 255, 0.85);">
        <nav class="navbar navbar-expand-lg navbar-light">        
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>  
          <div class="" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <!--<li class="nav-item">
                <a class="nav-link white" id="navbarAnchor" href="/exams">Exams <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <nuxt-link active-class="active" class="nav-link" to="/about">
                  About
                </nuxt-link>
              </li>
              <li class="nav-item">                
                <b-dropdown class="dropdown" text="Dropdown Button">
                
                  <b-dropdown-item>
                    <nuxt-link class="dropdown-item" to="/exams">Action</nuxt-link>
                  </b-dropdown-item>
                  <b-dropdown-item>
                    <nuxt-link class="dropdown-item" to="/about">Another action</nuxt-link>
                  </b-dropdown-item>
                  <div class="dropdown-divider"></div>
                  <b-dropdown-item>
                    <a class="dropdown-item" href="#">Something else here</a>  
                  </b-dropdown-item>
                </b-dropdown>
              
              </li> -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {{$t('menu.about_us.self')}}
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarAnchor">
                  <nuxt-link class="dropdown-item" :to="localePath('/about/info')">{{$t('menu.about_us.about_us')}}</nuxt-link>
                  <nuxt-link class="dropdown-item" :to="localePath('/about/team')">{{$t('menu.about_us.contacts')}}</nuxt-link>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {{$t('menu.exams.self')}}
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarAnchor">
                  <nuxt-link class="dropdown-item" :to="localePath('/exams/oif')">OIF</nuxt-link>
                  <nuxt-link class="dropdown-item" :to="localePath('/exams/osd')">OSD</nuxt-link>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {{$t('menu.courses.self')}}
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarAnchor">
                  <nuxt-link class="dropdown-item" :to="localePath('/courses/german')">{{$t('menu.courses.de')}}</nuxt-link>
                  <nuxt-link class="dropdown-item" :to="localePath('/courses/english')">{{$t('menu.courses.en')}}</nuxt-link>
                  <nuxt-link class="dropdown-item" :to="localePath('/courses/italian')">{{$t('menu.courses.it')}}</nuxt-link>
                </div>
              </li>
              
            </ul>
            
          </div>
        </nav>
      </li>
      
    </ul>
  </div>
 
      
</template>

<style scoped>
.dropdown:hover .dropdown-menu {
    display: block;
    margin-top: 0; 
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
import studentsPhoto from "~/assets/students_photo.png"
import facebookLogo from "~/assets/facebook_logo.svg"
import instagramLogo from "~/assets/instagram_logo.svg"


export default {
  data: function () {
    return {
      logo: logo,      
      studentsPhoto: studentsPhoto,
      facebookLogo:facebookLogo,
      instagramLogo: instagramLogo
    }
  }
}

</script>



