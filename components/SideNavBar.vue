<template>
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

      <li style="float: left; width: 100%; padding-left:3%; background-color:rgba(255, 255, 255, 0.67);">
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
                <div  @mouseenter="aboutIsSelected = true; coursesIsSelected = false; examsIsSelected = false" :class="[aboutIsSelected ? 'menu-selected' : '', 'flex flex-row items-center text-xl']">
                  <p>{{$t('menu.about_us.self')}}</p>
                  <b-icon :icon="this.aboutHoverHandler()"/>
                </div>
                <!--<a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {{$t('menu.about_us.self')}}
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarAnchor">
                  <nuxt-link class="dropdown-item" :to="localePath('/about/info')">{{$t('menu.about_us.about_us')}}</nuxt-link>
                  <nuxt-link class="dropdown-item" :to="localePath('/about/team')">{{$t('menu.about_us.contacts')}}</nuxt-link>
                </div> -->
              </li>
              <li class="pl-5">
                <div @mouseenter="examsIsSelected = true; coursesIsSelected = false; aboutIsSelected = false" :class="[examsIsSelected ? 'menu-selected' : '', 'flex flex-row items-center text-xl']">
                  <p>{{$t('menu.exams.self')}}</p>
                  <b-icon :icon="this.examsHoverHandler()" />
                </div>
                <!--<a @mouseenter="openSidebar" class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {{$t('menu.exams.self')}}
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarAnchor">
                  <nuxt-link class="dropdown-item" :to="localePath('/exams/oif')">OIF</nuxt-link>
                  <nuxt-link class="dropdown-item" :to="localePath('/exams/osd')">OSD</nuxt-link>
                </div> -->
              </li>
              <li class="pl-5">
                <div @mouseenter="coursesIsSelected = true; examsIsSelected = false; aboutIsSelected = false" :class="[coursesIsSelected ? 'menu-selected' : '', 'flex flex-row items-center text-xl']">
                  <p>{{$t('menu.courses.self')}}</p>
                  <b-icon :icon="this.coursesHoverHandler()" />
                </div>
                <!-- <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {{$t('menu.courses.self')}}
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarAnchor">
                  <nuxt-link class="dropdown-item" :to="localePath('/courses/german')">{{$t('menu.courses.de')}}</nuxt-link>
                  <nuxt-link class="dropdown-item" :to="localePath('/courses/english')">{{$t('menu.courses.en')}}</nuxt-link>
                  <nuxt-link class="dropdown-item" :to="localePath('/courses/italian')">{{$t('menu.courses.it')}}</nuxt-link>
                </div> -->
              </li>
            <li>
                <b-sidebar width="500px" class="flex"  v-model="isSidebarOpen" id="sidebar-1" backdrop=true>                  
                  <div class="w-full h-full pl-5 py-3 flex-column" @mouseleave="closeSidebar">
                    <div class="flex flex-row items-center mt-12 pd-56">
                      <div @mouseenter="aboutIsSelected = true; coursesIsSelected = false; examsIsSelected = false"  :class="[aboutIsSelected ? 'menu-selected' : '', 'flex flex-row items-center text-xl']">
                        <p>{{$t('menu.about_us.self')}}</p>
                        <b-icon :icon="this.aboutHoverHandler()"/>
                      </div>
                      <div @mouseenter="examsIsSelected = true; coursesIsSelected = false; aboutIsSelected = false" :class="[examsIsSelected ? 'menu-selected' : '', 'flex flex-row items-center text-xl pl-5']">
                        <p>{{$t('menu.exams.self')}}</p>
                        <b-icon :icon="this.examsHoverHandler()" />
                      </div>
                      <div @mouseenter="coursesIsSelected = true; examsIsSelected = false; aboutIsSelected = false" :class="[coursesIsSelected ? 'menu-selected' : '', 'flex flex-row items-center text-xl pl-5']">
                        <p>{{$t('menu.courses.self')}}</p>
                        <b-icon :icon="this.coursesHoverHandler()" />
                      </div>
                    </div>
                    <div  :class="[aboutIsSelected ? '' : 'isHidden', 'flex flex-column h-3/4 flex-end justify-around text-5xl']">
                      <nuxt-link class="pt-7" :to="localePath('/about/info')">{{$t('menu.about_us.about_us')}}</nuxt-link>
                      <nuxt-link class="pt-7" :to="localePath('/about/contacts')">{{$t('menu.about_us.contacts')}}</nuxt-link>
                    </div>
                    <div :class="[coursesIsSelected ? '' : 'isHidden', 'flex flex-column h-3/4 justify-around text-5xl']">
                      <nuxt-link class="pt-5" :to="localePath('/courses/german')">{{$t('menu.courses.de')}}</nuxt-link>
                      <nuxt-link class="pt-5" :to="localePath('/courses/english')">{{$t('menu.courses.en')}}</nuxt-link>
                      <nuxt-link class="pt-5" :to="localePath('/courses/italian')">{{$t('menu.courses.it')}}</nuxt-link>
                    </div>
                    <div :class="[examsIsSelected ? '' : 'isHidden', 'flex flex-column h-3/4 justify-around text-5xl']">
                      <nuxt-link class="pt-7" :to="localePath('/exams/oif')">OIF</nuxt-link>
                      <nuxt-link class="pt-7" :to="localePath('/exams/osd')">OSD</nuxt-link>
                    </div>
                  </div>
                </b-sidebar>
            </li>
            
            </ul>
            
          </div>
        </nav>
      </li>
      
    </ul>
  
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


export default {
  data: function () {
    return {
      logo: logo,      
      isSidebarOpen: false,
      examsIsSelected: false,
      aboutIsSelected: false,
      coursesIsSelected: false
    }
  },
  methods: {
    openSidebar() {
      this.isSidebarOpen = true
    },
    closeSidebar() {
      this.isSidebarOpen = false;
      this.aboutIsSelected = false;
      this.examsIsSelected = false;
      this.coursesIsSelected = false;
    },
    aboutHoverHandler(){
      if (this.aboutIsSelected){
        this.openSidebar();
        return "chevron-compact-up";
      } else {
        return "chevron-compact-down";
      }
    },
    examsHoverHandler(){
      if (this.examsIsSelected){
        this.openSidebar();
        return "chevron-compact-up";
      } else {
        return "chevron-compact-down";
      }
    },
    coursesHoverHandler(){
      if (this.coursesIsSelected){
        this.openSidebar();
        return "chevron-compact-up";
      } else {
        return "chevron-compact-down";
      }
    }
  }
}

</script>



