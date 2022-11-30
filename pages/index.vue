<template >
  <div class="flex flex-column"  style="">
    <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-ignore-global-margins' : 'ignore-global-margins', 'relative flex h-fit']">   
        <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-welcome-content mobile-welcome-content-background w-full pl-5' : 'welcome-content', 'absolute flex flex-column']">       
          <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-xl-responsive ml-5 font-bold' : 'welcome-text font-extrabold', 'h-fit text-white']" v-html="$t('main.image_text')"></div>
          <button type="button" :class="[this.$store.getters['getIsMobile'] ? 'mobile-button mobile-welcome-button-margin' : '', 'btn rounded-2xl h-fit w-fit']" style="background-color:rgba(255, 255, 255, 1);" @click="$bvModal.show('modal-1')"  >
            <div :class="[this.$store.getters['getIsMobile'] ? 'mx-auto mobile-button-text' : 'button-text', 'text-black']" v-html="$t('exams.oif.register')"></div>
          </button>
        </div>
        <nuxt-img
        :class="[this.$store.getters['getIsMobile'] ? 'h-1/2 w-full' : 'w-full h-3/4']"
        :src="this.$store.getters['getIsMobile'] ? '/mobile_frontpage_welcome.png' : '/frontpage_welcome.png'"
        format="webp"
  alt="Welcome to Edu-stream!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>       
    </div>
    <!---->
    
    <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-ignore-global-margins flex flex-column' : 'ignore-global-margins flex flex-row', 'relative flex h-fit justify-evenly h-3/4 ']">
      <div :class="[this.$store.getters['getIsMobile'] ? 'hidden' : 'flex w-full flex-column items-start text-white']"   style="padding-top:5%; padding-bottom:5%;background-color:#FF7C33; width:20%"></div>
      <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-color-tab items-center flex flex-row' : 'color-tab items-start flex flex-column pl-2', ' text-white']"  style="background-color:#FF7C33;">
        <nuxt-img
        :class="[this.$store.getters['getIsMobile'] ? 'mobile-color-tab-icon-faulty-figma-1' : 'w-auto h-3/12 pb-2']"
        src="/color_tabs_icon_1.svg"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>       
        <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-color-tab-text' : 'color-tab-text pr-6 pb-6']"   v-html="$t('main.color_tabs.t_1')"></div>
      </div>
      <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-color-tab items-center flex flex-row' : 'color-tab items-start flex flex-column pl-2', ' text-white']"  style="background-color:#96BDFF;">
        <nuxt-img
        :class="[this.$store.getters['getIsMobile'] ? 'mobile-color-tab-icon-faulty-figma-1' : 'w-auto h-3/12 pb-2']"
        src="/color_tabs_icon_2.svg"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>       <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-color-tab-text' : 'color-tab-text pr-6 pb-6']"   v-html="$t('main.color_tabs.t_2')"></div>
      </div>
      <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-color-tab items-center flex flex-row' : 'color-tab items-start flex flex-column pl-2', ' text-white']"  style="background-color:#4385F5;">
        <nuxt-img
        :class="[this.$store.getters['getIsMobile'] ? 'mobile-color-tab-icon-faulty-figma-1' : 'w-auto h-3/12 pb-2']"
        src="/color_tabs_icon_3.svg"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>       
       <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-color-tab-text' : 'color-tab-text pr-6 pb-6']"   v-html="$t('main.color_tabs.t_3')"></div>
      </div>
      <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-color-tab items-center flex flex-row' : 'color-tab items-start flex flex-column pl-2', ' text-white']"  style="background-color:#253984;">
        <nuxt-img
        :class="[this.$store.getters['getIsMobile'] ? 'mobile-color-tab-icon-faulty-figma-1' : 'w-auto h-3/12 pb-2']"
        src="/color_tabs_icon_4.svg"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>       
<div :class="[this.$store.getters['getIsMobile'] ? 'mobile-color-tab-text' : 'color-tab-text pr-6 pb-6']"   v-html="$t('main.color_tabs.t_4')"></div>
      </div>
      <div :class="[this.$store.getters['getIsMobile'] ? 'hidden' : 'flex w-full flex-column items-start text-white']" style="padding-top:5%; padding-bottom:5%;background-color:#253984; padding-left:1%; width:20%"></div>
      

    </div>
    <div class="hidden flex flex-row py-16 w-full items-start justify-between">
        <div class="flex flex-column pr-5 items-start">
          <h1 class="font-bold w-3/4 text-xl">{{$t('main.info_columns.titles.t_1')}}</h1>
          <p class="text-base">{{$t('main.info_columns.bodies.b_1')}}</p>
        </div>
        <div class="flex flex-column pr-5 items-start">
          <h1 class="font-bold w-1/2 text-xl">{{$t('main.info_columns.titles.t_2')}}</h1>
          <p class="text-base">{{$t('main.info_columns.bodies.b_2')}}</p>
        </div>
        <div class="flex flex-column pr-5 items-start">
          <h1 class="font-bold w-1/2 text-xl">{{$t('main.info_columns.titles.t_3')}}</h1>
          <p class="text-base">{{$t('main.info_columns.bodies.b_3')}}</p>
        </div>
    </div>
    <div class="border-y py-16 flex flex-column items-start justify-between w-full h-full">
      <h1 :class="[this.$store.getters['getIsMobile'] ? 'mobile-section-title-text' : 'section-title-text', 'font-bold']">{{$t('main.courses_and_exams.self')}}</h1>
      <div :class="[this.$store.getters['getIsMobile'] ? 'flex flex-column justify-start items-center' : 'flex flex-row justify-between items-start', 'w-full pt-8 overflow-hidden']">
        <nuxt-link class="flex" style="text-decoration: none; color: inherit;" :to="localePath('/courses/german')">  
          <div :class="[this.$store.getters['getIsMobile'] ? 'mb-5' : 'same-size-columns', 'cursor-pointer hover:drop-shadow-xl rounded-sm flex flex-column items-start justify-start courses-tab-color']" >
            <h1 :class="[this.$store.getters['getIsMobile'] ? 'mobile-courses-exams-h1 courses-exams-p-padding' : 'courses-exams-h1 courses-title-color', 'font-bold']">{{$t('main.courses_and_exams.courses.titles.t_1')}}</h1>
            <div :class="[this.$store.getters['getIsMobile'] ? 'hidden' : 'courses-exams-tab-margin']" ></div>
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-courses-exams-text pt-2' : 'courses-exams-text', 'courses-exams-p-padding']">{{$t('main.courses_and_exams.courses.bodies.b_1')}}</p>
          </div>
         </nuxt-link>
         <div :class="[this.$store.getters['getIsMobile'] ? 'hidden' : 'courses-exams-margin']"></div>  
         <nuxt-link class="flex" style="text-decoration: none; color: inherit;" :to="localePath('/courses/english')">  
          <div :class="[this.$store.getters['getIsMobile'] ? 'mb-5' : 'same-size-columns', 'cursor-pointer hover:drop-shadow-xl rounded-sm flex flex-column items-start justify-start courses-tab-color']" >
            <h1 :class="[this.$store.getters['getIsMobile'] ? 'mobile-courses-exams-h1 courses-exams-p-padding' : 'courses-exams-h1 courses-title-color', 'font-bold']">{{$t('main.courses_and_exams.courses.titles.t_2')}}</h1>
            <div :class="[this.$store.getters['getIsMobile'] ? 'hidden' : 'courses-exams-tab-margin']" ></div>
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-courses-exams-text pt-2' : 'courses-exams-text', 'courses-exams-p-padding']">{{$t('main.courses_and_exams.courses.bodies.b_2')}}</p>
          </div>
         </nuxt-link> 
         <div :class="[this.$store.getters['getIsMobile'] ? 'hidden' : 'courses-exams-margin']"></div>  
         <nuxt-link class="flex" style="text-decoration: none; color: inherit;" :to="localePath('/courses/online')">  
          <div :class="[this.$store.getters['getIsMobile'] ? 'mb-5' : 'same-size-columns', 'cursor-pointer hover:drop-shadow-xl rounded-sm flex flex-column items-start justify-start courses-tab-color']" >
            <h1 :class="[this.$store.getters['getIsMobile'] ? 'mobile-courses-exams-h1 courses-exams-p-padding' : 'courses-exams-h1 courses-title-color', 'font-bold']">{{$t('main.courses_and_exams.courses.titles.t_3')}}</h1>
            <div :class="[this.$store.getters['getIsMobile'] ? 'hidden' : 'courses-exams-tab-margin']" ></div>
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-courses-exams-text pt-2' : 'courses-exams-text', 'courses-exams-p-padding']">{{$t('main.courses_and_exams.courses.bodies.b_3')}}</p>
          </div>
         </nuxt-link>   
      </div>
      <div :class="[this.$store.getters['getIsMobile'] ? 'flex flex-column justify-start items-center' : 'flex flex-row justify-between items-start', 'w-full pt-8 overflow-hidden']">
        <nuxt-link class="flex" style="text-decoration: none; color: inherit;" :to="localePath('/exams/oif')">  
          <div :class="[this.$store.getters['getIsMobile'] ? 'mb-5' : 'same-size-columns', 'cursor-pointer hover:drop-shadow-xl rounded-sm flex flex-column items-start justify-start exams-tab-color']" >
            <h1 :class="[this.$store.getters['getIsMobile'] ? 'mobile-courses-exams-h1 courses-exams-p-padding' : 'courses-exams-h1', 'font-bold']">{{$t('main.courses_and_exams.exams.titles.t_1')}}</h1>
            <div :class="[this.$store.getters['getIsMobile'] ? 'hidden' : 'courses-exams-tab-margin']" ></div>
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-courses-exams-text pt-2' : 'courses-exams-text', 'courses-exams-p-padding']">{{$t('main.courses_and_exams.exams.bodies.b_1')}}</p>
          </div>
         </nuxt-link>
         <div :class="[this.$store.getters['getIsMobile'] ? 'hidden' : 'courses-exams-margin']"></div>  
         <nuxt-link class="flex" style="text-decoration: none; color: inherit;" :to="localePath('/exams/osd')">  
          <div :class="[this.$store.getters['getIsMobile'] ? 'mb-5' : 'same-size-columns', 'cursor-pointer hover:drop-shadow-xl rounded-sm flex flex-column items-start justify-start exams-tab-color']" >
            <h1 :class="[this.$store.getters['getIsMobile'] ? 'mobile-courses-exams-h1 courses-exams-p-padding' : 'courses-exams-h1', 'font-bold']">{{$t('main.courses_and_exams.exams.titles.t_2')}}</h1>
            <div :class="[this.$store.getters['getIsMobile'] ? 'hidden' : 'courses-exams-tab-margin']" ></div>
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-courses-exams-text pt-2' : 'courses-exams-text', 'courses-exams-p-padding']">{{$t('main.courses_and_exams.exams.bodies.b_2')}}</p>
          </div>
         </nuxt-link> 
         <div :class="[this.$store.getters['getIsMobile'] ? 'hidden' : 'courses-exams-margin']"></div>  
         <nuxt-link class="flex" style="text-decoration: none; color: inherit;" :to="localePath('/exams/new')">  
          <div :class="[this.$store.getters['getIsMobile'] ? 'mb-5' : 'same-size-columns', 'cursor-pointer hover:drop-shadow-xl rounded-sm flex flex-column items-start justify-start exams-tab-color']" >
            <h1 :class="[this.$store.getters['getIsMobile'] ? 'mobile-courses-exams-h1 courses-exams-p-padding' : 'courses-exams-h1', 'font-bold']">{{$t('main.courses_and_exams.exams.titles.t_3')}}</h1>
            <div :class="[this.$store.getters['getIsMobile'] ? 'hidden' : 'courses-exams-tab-margin']" ></div>
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-courses-exams-text pt-2' : 'courses-exams-text', 'courses-exams-p-padding']">{{$t('main.courses_and_exams.exams.bodies.b_3')}}</p>
          </div>
         </nuxt-link>   
      </div>
      
    </div>
    <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-banners-border' : 'border-b', 'py-16 flex flex-row justify-around']">
      <nuxt-img
      class="h-auto w-1/5"
      src="/banner_row_1.png"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>       
<nuxt-img
      class="h-auto w-1/5"
      src="/banner_row_2.png"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>       
<nuxt-img
      class="h-auto w-1/5"
      src="/banner_row_3.png"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>       
<nuxt-img
      class="h-auto w-1/5"
      src="/banner_row_4.png"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>       
<nuxt-img
      class="h-auto w-1/5"
      src="/banner_row_5.png"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>       
    </div>
      <client-only>
        <div :class="[this.$store.getters['getIsMobile'] ? 'pb-32' : 'ignore-r-global-margin', 'relative py-16 flex flex-row items-center h-1/12']" >
          <div class="absolute z-40">
            <button @click.prevent="prevBanner" class="">
              <nuxt-img
              :class="[this.$store.getters['getIsMobile'] ? 'hidden' : 'w-2/12']"
      src="/banner_arrow_left.png"
      style="border-radius: 50%; background-color:rgba(255, 255, 255, 1)"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>       
            </button>
          </div>
          <carousel class="w-full" ref="bannerCarousel" :loop="true" :paginationEnabled="false" :navigationEnable="true" :centerMode="true" :autoplay="true" :adjustableHeight="false" :perPage="1" :scrollPerPage="false" :spacePadding="40" >
            
            <slide class="w-1/2 mr-2 rounded">
              <nuxt-img
              :class="[this.$store.getters['getIsMobile'] ? 'mobile-banner-size' : '', 'rounded']"
              :src="this.$store.getters['getIsMobile'] ? '/mobile_promo_banner_1_group.png' : '/promo_banner_1_group.png'"
      style="border-radius: 50%; background-color:rgba(255, 255, 255, 1)"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>       
            </slide>
            <slide class="w-1/2 mr-2 rounded">
              <nuxt-img
              :class="[this.$store.getters['getIsMobile'] ? 'mobile-banner-size' : '', 'rounded']"
              :src="this.$store.getters['getIsMobile'] ? '/mobile_promo_banner_1_group.png' : '/promo_banner_1_group.png'"
      style="border-radius: 50%; background-color:rgba(255, 255, 255, 1)"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>       
            </slide>
            <slide class="w-1/2 rounded">
              <nuxt-img
              :class="[this.$store.getters['getIsMobile'] ? 'mobile-banner-size' : '', 'rounded']"
              :src="this.$store.getters['getIsMobile'] ? '/mobile_promo_banner_1_group.png' : '/promo_banner_1_group.png'"
      style="border-radius: 50%; background-color:rgba(255, 255, 255, 1)"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>       
            </slide>
            
          
          </carousel>
          <div class="absolute right-14 z-40">
            <button @click.prevent="nextBanner" class="">
              <nuxt-img
              :class="[this.$store.getters['getIsMobile'] ? 'hidden' : 'w-4/12']"
              style="border-radius: 50%; background-color:rgba(255, 255, 255, 1)"
              src="/banner_arrow_right.png"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>       
            </button>
          </div>
        </div>
      </client-only>
    
    
    <div class="flex flex-column items-start w-full">
      <h1 :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-xl-responsive' : 'text-xl-responsive', 'font-bold']" > {{$t('main.about.our_school')}}</h1>
      <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'text-base-responsive', 'pt-6 pb-16']">{{$t('main.about.our_school_expanded')}}</p>
      <client-only :class="[this.$store.getters['getIsMobile'] ? '' : 'ignore-r-global-margin', 'justify-center h-1/12 w-full']">
        
        <carousel ref="gallery" :class="[this.$store.getters['getIsMobile'] ? 'w-full' : 'w-11/12', 'justify-between']" :paginationEnabled="false" :loop="true" :navigationEnabled="false" :autoplay="false" :adjustableHeight="false" :perPage="this.$store.getters['getIsMobile'] ? 1 : 3" :scrollPerPage="false" :spacePadding="40" >
          <slide class="w-1/2 mr-2 rounded">
            <nuxt-img
            :class="[this.$store.getters['getIsMobile'] ? 'mobile-gallery-image-size' : '', 'rounded']"
              src="/promo_banner_1_group.png"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>       
          </slide>
          <slide class="w-1/2 mr-2 rounded">
            <nuxt-img
            :class="[this.$store.getters['getIsMobile'] ? 'mobile-gallery-image-size' : '', 'rounded']"
              src="/promo_banner_1_group.png"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>       
          </slide>
          <slide class="w-1/2 mr-2 rounded">
            <nuxt-img
            :class="[this.$store.getters['getIsMobile'] ? 'mobile-gallery-image-size' : '', 'rounded']"
              src="/promo_banner_1_group.png"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>       
          </slide>
          <slide class="w-1/2 mr-2 rounded">
            <nuxt-img
            :class="[this.$store.getters['getIsMobile'] ? 'mobile-gallery-image-size' : '', 'rounded']"
              src="/promo_banner_1_group.png"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>       
          </slide>
          <slide class="w-1/2 rounded">
            <nuxt-img
            :class="[this.$store.getters['getIsMobile'] ? 'mobile-gallery-image-size' : '', 'rounded']"
              src="/promo_banner_1_group.png"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>       
          </slide>
          
          
        </carousel>
      </client-only>
    
    
      <div :class="[this.$store.getters['getIsMobile'] ? 'justify-center' : 'justify-between', 'py-3 flex flex-row  items-center w-full mx-auto']">
        <nuxt-link :to="localePath('/about/info')">
          <button :class="[this.$store.getters['getIsMobile'] ? 'mx-auto w-full mobile-button py-2' : 'h-fit w-fit rounded-2xl', 'btn']"  style="background-color:rgba(32, 88, 182, 1);">
            <div :class="[this.$store.getters['getIsMobile'] ? 'mx-auto mobile-button-text' : 'button-text', 'text-white']" v-html="$t('menu.about_us.self')"></div>
          </button>
        </nuxt-link>
        <button :class="[this.$store.getters['getIsMobile'] ? 'hidden' : '']" @click.prevent="nextGalleryImage" class="p-5 py-2">
          <nuxt-img
            
            src="/gallery_arrow.svg"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>       
        </button>
      </div>
      <div :class="[this.$store.getters['getIsMobile'] ? 'flex-column items-center' : 'flex-row', 'flex py-16 justify-between']">
        <div :class="[this.$store.getters['getIsMobile'] ? 'w-full mr-8 ml-4' : 'w-5/12', 'flex flex-column']">              
          
          <h1 class=""><div :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-xl-responsive' : 'text-xl-responsive', 'font-bold']" v-html="$t('main.about.location')"> </div></h1>
          <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'text-base-responsive', 'pt-6 pb-16']" v-html="$t('main.about.location_expanded')"></div>
        </div>
        <nuxt-img
        :class="[this.$store.getters['getIsMobile'] ? 'mobile-banner-size' : 'w-5/12 h-auto']"
        src="/location_photo.png"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>       
        

      </div>
      <div class="flex flex-column w-full py-5 items-center justify-between rounded-3xl" style="background-color:rgba(37, 57, 132, 1)">
        <h1 :class="[this.$store.getters['getIsMobile'] ? 'w-11/12 pb-6' : 'w-10/12']"><div :class="[this.$store.getters['getIsMobile'] ? 'mobile-form-text-responsive' : 'text-2xl-responsive', 'font-bold text-white text-center']" v-html="$t('main.form_text')"> </div></h1>
        <div :class="[this.$store.getters['getIsMobile'] ? 'flex-column items-start w-11/12' : 'flex-row items-start w-9/12', 'flex justify-around']" style="margin-top:3vh">
          <div :class="[this.$store.getters['getIsMobile'] ? 'w-full items-start' : 'w-1/4 items-center', 'flex flex-column justify-center mr-1']">
            <input @focusout="checkName" :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive mobile-modal-field py-4 rounded-xl' : 'text-base-responsive py-2 rounded-md', 'w-full text-white pl-2']" style="background-color:rgba(255, 255, 255, 0.42);  " type="text" v-model="response_name" :placeholder="$t('modals.name')" required>
            <div :class="[this.$store.getters['getIsMobile'] ? 'pt-1' : 'pt-3 font-bold', 'text-red-600 text-s']"  v-if="isNameWrong" v-html="$t('modals.required')"></div>
            <div :class="[this.$store.getters['getIsMobile'] ? 'pt-1' : 'pt-3', 'font-bold text-red-600 text-xs invisible']" v-else v-html="$t('modals.required')"></div>
          </div>
          <div :class="[this.$store.getters['getIsMobile'] ? 'w-full items-start' : 'w-1/4 items-center', 'flex flex-column justify-center mr-1']">
            <input @focusout="checkEmail" :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive mobile-modal-field py-4 rounded-xl' : 'text-base-responsive py-2 rounded-md', 'w-full text-white pl-2']" style="background-color:rgba(255, 255, 255, 0.42);  " type="email" v-model="response_email" :placeholder="$t('modals.email')" required>
            <div :class="[this.$store.getters['getIsMobile'] ? 'pt-1' : 'pt-3 font-bold', 'text-red-600 text-s']"  v-if="isEmailWrong" v-html="$t('modals.required')"></div>
            <div :class="[this.$store.getters['getIsMobile'] ? 'pt-1' : 'pt-3', 'font-bold text-red-600 text-xs invisible']" v-else v-html="$t('modals.required')"></div>
          </div>
          <div :class="[this.$store.getters['getIsMobile'] ? 'w-full items-start' : 'w-1/4 items-center', 'flex flex-column justify-center mr-1']">
            <input @focusout="checkPhone" :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive mobile-modal-field py-4 rounded-xl' : 'text-base-responsive py-2 rounded-md', 'w-full text-white pl-2']" style="background-color:rgba(255, 255, 255, 0.42);  " type="tel" v-model="response_phone" :placeholder="$t('modals.phone_title')" required>
            <div :class="[this.$store.getters['getIsMobile'] ? 'pt-1' : 'pt-3 font-bold', 'text-red-600 text-s']"  v-if="isPhoneWrong" v-html="$t('modals.required')"></div>
            <div :class="[this.$store.getters['getIsMobile'] ? 'pt-1' : 'pt-3', 'font-bold text-red-600 text-xs invisible']" v-else v-html="$t('modals.required')"></div>
          </div>
          <div @click="checkAllNoTimes" :class="[this.$store.getters['getIsMobile'] ? 'mobile-modal-field py-4 w-full rounded-xl' : 'rounded-md text-base-responsive w-1/4', 'flex']"  style="background-color:rgba(255, 124, 51, 1);">
            <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'text-base-responsive', 'mx-auto my-auto text-white py-2']" v-html="$t('modals.send')"></div>
          </div>
        </div>
        <div class="mx-center"><div :class="[this.$store.getters['getIsMobile'] ? 'modal-info-text-responsive w-11/12' : 'text-xs-responsive', 'text-center font-normal text-white']" v-html="$t('main.form_subtext')"> </div></div>
      </div>
      <div class="my-16 h-full w-full flex flex-column items-start ignore-r-global-margin">
        <client-only :class="[this.$store.getters['getIsMobile'] ? '' : 'ignore-r-global-margin', 'w-full h-full pl-30 justify-center']">        
          <carousel ref="logoGallery" :class="[this.$store.getters['getIsMobile'] ? '' : 'ignore-r-global-margin', 'w-full h-full justify-between']" :paginationEnabled="false" :loop="true" :navigationEnabled="false" :autoplay="true" :adjustableHeight="false" :perPage="3" :scrollPerPage="true" :spacePadding="40" >
            <slide class="w-full">
              <nuxt-img
              src="/logo_gallery/1.png"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>       
            </slide>
            <slide class="w-full">
            <nuxt-img
              src="/logo_gallery/2.png"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>       
            </slide>
            <slide class="w-1/2">
            <nuxt-img
              src="/logo_gallery/3.png"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>       
            </slide>
            <slide class="w-1/2">
            <nuxt-img
              src="/logo_gallery/4.png"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>       
            </slide>
            <slide class="w-1/2">
            <nuxt-img
              src="/logo_gallery/5.png"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>       
            </slide>
            <slide class="w-1/2">
            <nuxt-img
              src="/logo_gallery/6.png"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>       
            </slide>
            <slide class="w-1/2">
            <nuxt-img
              src="/logo_gallery/7.png"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>       
            </slide>
            <slide class="w-1/2">
            <nuxt-img
              src="/logo_gallery/8.png"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>       
            </slide>
            <slide class="w-1/2">
            <nuxt-img
              src="/logo_gallery/9.png"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>       
            </slide>
            <slide class="w-1/2">
              <nuxt-img
              src="/logo_gallery/10.png"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>       
            </slide>
            <slide class="w-1/2">
              <nuxt-img
              src="/logo_gallery/11.png"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>       
            </slide>
            <slide class="w-1/2">
              <nuxt-img
              src="/logo_gallery/12.png"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>       
            </slide>
            <slide class="w-1/2">
              <nuxt-img
              src="/logo_gallery/13.png"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>       
            </slide>
            <slide class="w-1/2">
              <nuxt-img
              src="/logo_gallery/14.png"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>       
            </slide>
            
            
          </carousel>
        </client-only> 
        <button @click.prevent="nextLogoGalleryImage" class="hidden py-2">
          <nuxt-img
          src="/gallery_arrow.svg"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>       
        </button>
      </div>
    </div>
    <!-- <div @click="trigger" class="trigger">Click me</div> -->
    <!--<b-carousel 
      id="carousel-1"
      v-model="slide"
      ref="carouselInput"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width=""
      img-height="300px"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >-->
      <!--<nuxt-link :to="localePath('/about/info')"><b-carousel-slide style="" class="" :img-src="promoBanner1"></b-carousel-slide></nuxt-link>

      <b-carousel-slide style="" class="" :img-src="promoBanner2 ">
        <div style="background-image: promoBanner2; background-size: cover;" />
      </b-carousel-slide>

      <nuxt-link :to="localePath('/about/info')"><b-carousel-slide style="" class="" :img-src="promoBanner1"></b-carousel-slide></nuxt-link>
    -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          >
        </template>
      </b-carousel-slide> 

      
    </b-carousel> -->
    <div>
      <ModalForm index="modal-1" />
      
    </div>
  </div>
</template>

<script>
/*
import frontpageWelcome from "/frontpage_welcome.png"
import mobileFrontpageWelcome from "/mobile_frontpage_welcome.png"
import colorTabsIcon1 from "/color_tabs_icon_1.svg"
import colorTabsIcon2 from "/color_tabs_icon_2.svg"
import colorTabsIcon3 from "/color_tabs_icon_3.svg"
import colorTabsIcon4 from "/color_tabs_icon_4.svg"
import promoBanner1 from "/promo_banner_1_group.png"
import mobilePromoBanner1 from "/mobile_promo_banner_1_group.png"
import promoBanner2 from "/promo_banner_2.png"
import oeifLogo from "/oeif-logo.png"
import galleryArrow from "/gallery_arrow.svg"
import bannerArrowLeft from "/banner_arrow_left.png"
import bannerArrowRight from "/banner_arrow_right.png"
import bannerRow1 from "/banner_row_1.png"
import bannerRow2 from "/banner_row_2.png"
import bannerRow3 from "/banner_row_3.png"
import bannerRow4 from "/banner_row_4.png"
import bannerRow5 from "/banner_row_5.png"
import logoGallery1 from "/logo_gallery/1.png"
import logoGallery2 from "/logo_gallery/2.png"
import logoGallery3 from "/logo_gallery/3.png"
import logoGallery4 from "/logo_gallery/4.png"
import logoGallery5 from "/logo_gallery/5.png"
import logoGallery6 from "/logo_gallery/6.png"
import logoGallery7 from "/logo_gallery/7.png"
import logoGallery8 from "/logo_gallery/8.png"
import logoGallery9 from "/logo_gallery/9.png"
import logoGallery10 from "/logo_gallery/10.png"
import logoGallery11 from "/logo_gallery/11.png"
import logoGallery12 from "/logo_gallery/12.png"
import logoGallery13 from "/logo_gallery/13.png"
import logoGallery14 from "/logo_gallery/14.png"
import locationPhoto from "/location_photo.png"
*/
import ModalForm from '/components/ModalForm.vue'

export default {
  data: function () {
    return {
      /*
      frontpageWelcome: frontpageWelcome,
      mobileFrontpageWelcome: mobileFrontpageWelcome,
      oeifLogo: oeifLogo,
      colorTabsIcon1:colorTabsIcon1,
      colorTabsIcon2: colorTabsIcon2,
      colorTabsIcon3: colorTabsIcon3,      
      colorTabsIcon4: colorTabsIcon4,
      promoBanner1: promoBanner1,
      mobilePromoBanner1: mobilePromoBanner1,
      promoBanner2:promoBanner2,
      galleryArrow:galleryArrow,
      bannerArrowLeft: bannerArrowLeft,
      bannerArrowRight: bannerArrowRight,
      bannerRow1: bannerRow1,
      bannerRow2: bannerRow2,
      bannerRow3: bannerRow3,
      bannerRow4: bannerRow4,
      bannerRow5: bannerRow5,
      logoGallery1: logoGallery1,
      logoGallery2: logoGallery2,
      logoGallery3: logoGallery3,
      logoGallery4: logoGallery4,
      logoGallery5: logoGallery5,
      logoGallery6: logoGallery6,
      logoGallery7: logoGallery7,
      logoGallery8: logoGallery8,
      logoGallery9: logoGallery9,
      logoGallery10: logoGallery10,
      logoGallery11: logoGallery11,
      logoGallery12: logoGallery12,
      logoGallery13: logoGallery13,
      logoGallery14: logoGallery14,
      locationPhoto: locationPhoto,
      */
      ModalForm: ModalForm,
      showModal: false,
      isNameWrong: false,
      isPhoneWrong: false,
      isEmailWrong: false,
      isTimesWrong: false,
      response_name: "",
      response_email: null,
      response_phone: null,
      checkedTimes:[],
      slide: 0,
      sliding: null
    }
  },
  methods:{
    nextBanner() {
      this.$refs.bannerCarousel.goToPage(this.$refs.bannerCarousel.getNextPage());
    },
    prevBanner() {
      this.$refs.bannerCarousel.goToPage(this.$refs.bannerCarousel.getPreviousPage());
    },
      nextGalleryImage() {
      this.$refs.gallery.goToPage(this.$refs.gallery.getNextPage());
    },
    nextLogoGalleryImage() {
      this.$refs.logoGallery.goToPage(this.$refs.logoGallery.getNextPage());
    },
    checkEmail(){
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.response_email))
      {
        this.isEmailWrong = false;
      } else{
        this.isEmailWrong = true;
      } 
    },
    checkPhone(){
      if (/^\+?\d*$/.test(this.response_phone)) 
      {
        this.isPhoneWrong = false;
      } else{
        this.isPhoneWrong = true;
      } 
    },
    checkName(){
      if (this.response_name == "") 
      {
        this.isNameWrong = true;
      } else{
        this.isNameWrong = false;
      } 
    },
    checkTimes(){
      if (this.checkedTimes.length == 0) 
      {
        this.isTimesWrong = true;
      } else{
        this.isTimesWrong = false;
      } 
    },
    checkAll(){
      this.checkEmail();
      this.checkName();
      this.checkTimes();
      this.checkPhone();
      if (!this.isNameWrong && !this.isEmailWrong && !this.isPhoneWrong && !this.isTimesWrong){
      let routeData = this.$router.resolve({name: 'https://checkout.stripe.com/c/pay/cs_live_a18PAktLRCExf4QbCUahRYb2YzgjJYrWSZhmctnue81qkIPRJWEwkivg4y#fidkdWxOYHwnPyd1blppbHNgWjA0TnZVUn1AV19LRjZhVUtWf0JsbTBiV2g9VWxuZmo1MjRqXHNsd2pOalVCN0Rhan1mVzZ2VjVfREFjQ1Z3V20wQT1GfTZUcjdTNjJSajZ1XXFpT2xuQVFANTVGa3ZjbXB1aicpJ2hsYXYnP34nYnBsYSc%2FJ0tEJyknaHBsYSc%2FJ0tEJykndmxhJz8nS0QneCknZ2BxZHYnP15YKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSd3YGNgd3dgd0p3bGJsayc%2FJ21xcXV2PyoqYGFwKHZxd2BkaCtkcSd4JSUl', /*query: {data: "someData"}*/});
        window.open('https://checkout.stripe.com', '_blank');
      }
      
    },
    checkAllNoTimes(){
      this.checkEmail();
      this.checkName();
      this.checkPhone();
      if (!this.isNameWrong && !this.isEmailWrong && !this.isPhoneWrong){
      let routeData = this.$router.resolve({name: 'https://checkout.stripe.com/c/pay/cs_live_a18PAktLRCExf4QbCUahRYb2YzgjJYrWSZhmctnue81qkIPRJWEwkivg4y#fidkdWxOYHwnPyd1blppbHNgWjA0TnZVUn1AV19LRjZhVUtWf0JsbTBiV2g9VWxuZmo1MjRqXHNsd2pOalVCN0Rhan1mVzZ2VjVfREFjQ1Z3V20wQT1GfTZUcjdTNjJSajZ1XXFpT2xuQVFANTVGa3ZjbXB1aicpJ2hsYXYnP34nYnBsYSc%2FJ0tEJyknaHBsYSc%2FJ0tEJykndmxhJz8nS0QneCknZ2BxZHYnP15YKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSd3YGNgd3dgd0p3bGJsayc%2FJ21xcXV2PyoqYGFwKHZxd2BkaCtkcSd4JSUl', /*query: {data: "someData"}*/});
        window.open('https://checkout.stripe.com', '_blank');
      }
      
    },
    onSlideStart(slide) {
        this.sliding = true
      },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }

}
</script>

<style scoped>
.bg-slate-200{
    background-color: rgba(244, 244, 244, 1);
  }
  input::placeholder {
    opacity: 1;
    color: white;
}
.color-tab-text{
  font-size: calc(3px + 0.890625vw);
}
.mobile-color-tab-text{
  font-size: calc(8px + 2.890625vw);
  margin-left:10%;
  margin-right:10%;
}
.mobile-color-tab-icon{
  width: 10vw;
  height: auto;
}
.mobile-color-tab-icon-faulty-figma-1{
  width: 18vw;
  height: auto;
}
.mobile-color-tab-icon-faulty-figma-2{
  width: 23vw;
  height: auto;
}
.welcome-content{
  margin-left:21%;
  margin-top:23%
}
.welcome-text{
  font-size: calc(6px + 2.450625vw);
  margin-bottom: 6%;
}

.color-tab{
  padding-top:5%;
  padding-bottom:5%;
  width:calc(60%/4);
}
.mobile-color-tab{
  padding-top:6%;
  padding-bottom:6%;
  padding-left:5%;
  padding-right:5%;
  width:100%;
  height:15vh;
}
.courses-exams-text{
  font-size: calc(1px + 0.690625vw);
}
.mobile-courses-exams-text{
  font-size: calc(4px + 3.090625vw);
}
.courses-exams-margin{ 
  width: 6vw;
}
.courses-exams-tab-margin{
  height: 10vh;
}

.courses-tab-color{
  background-color:rgba(239, 248, 255, 1); 
}
.courses-title-color{
  color:rgba(67, 133, 245, 1)
}
.exams-tab-color{
  background-color:rgba(239, 239, 239, 1);
}
.same-size-columns{
  padding-bottom: 100%;
  margin-bottom: -100%;
}

.text-2xl-responsive{
  font-size: calc(4px + 1.50625vw);
}
.VueCarousel-navigation-button {
                position: relative;
}
.VueCarousel-navigation-next {
                position: relative;
}
.courses-exams-h1{
  padding-top:7%;
  padding-left:7%;  
  padding-right:3%;
  font-size: calc(3px + 1.26625vw);
}
.mobile-courses-exams-h1{
  padding-top:7%;
  font-size: calc(12px + 7.01625vw);
}
.courses-exams-p-padding{
  padding-bottom:5%;
  padding-left:7%;
  padding-right:3%;
}
.text-block {
    white-space: pre-line;
}
.section-title-text{
  
  font-size: calc(5px + 2.01625vw);
}
.mobile-section-title-text{
  
  font-size: calc(14px + 8.01625vw);
}
.mobile-banners-border{
  border-top: 1px solid #ABABAB;
}
.mobile-banner-size{
  width:90vw;
  height:auto
}
.mobile-gallery-image-size{
  width:80vw;
  height:auto
}
.mobile-form-text-responsive{
  font-size: calc(9px + 6.49625vw);
}
</style>