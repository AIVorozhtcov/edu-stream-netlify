<template>
  <div class="flex flex-column">
    <div class="relative h-fit">   
      <img class="w-full h-3/4" :src="frontpageWelcome">    
      <div class="absolute h-full flex flex-column -translate-y-2/4 left-0 w-5/12" style="">
        <div class="h-fit text-white mb-4 text-2xl font-bold" v-html="$t('main.image_text')"></div>
        <button type="button" class="btn rounded-2xl h-fit w-fit" style="background-color:rgba(255, 124, 51, 1)" @click="$bvModal.show('modal-1')" >
          <div class="px-5 py-1 text-white" v-html="$t('exams.oif.register')"></div>
        </button>
      </div>
    </div>
    <div class="flex flex-row justify-evenly  h-3/4">
      <div class="flex pl-6 w-full flex-column py-10 items-start text-base text-white" style="background-color:#FF7C33;">
        <img class="left-1/2 h-2/12 w-2/12 pb-2 pr-3" :src="colorTabsIcon1">
        <div class="pr-6 pb-6" v-html="$t('main.color_tabs.t_1')"></div>
      </div>
      <div class="flex pl-6 w-full flex-column py-10 items-start text-base text-white" style="background-color:#96BDFF;">
        <img class="left-1/2 h-2/12 w-2/12 pb-2 pr-3" :src="colorTabsIcon2">
        <div class="pr-6 pb-6" v-html="$t('main.color_tabs.t_2')"></div>
      </div>
      <div class="flex pl-6 w-full flex-column py-10 items-start text-base text-white" style="background-color:#4385F5;">
        <img class="left-1/2 h-2/12 w-2/12 pb-2 pr-3" :src="colorTabsIcon3">
        <div class="pr-6 pb-6" v-html="$t('main.color_tabs.t_3')"></div>
      </div>
      <div class="flex pl-6 w-full flex-column py-10 items-start text-base text-white" style="background-color:#253984;">
        <img class="left-1/2 h-2/12 w-2/12 pb-2 pr-3" :src="colorTabsIcon4" />
        <div class="pr-6 pb-6" v-html="$t('main.color_tabs.t_4')"></div>
      </div>
      

    </div>
    <div class="flex flex-row py-16 pl-2 w-full items-start justify-between">
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
    <div class="border-y py-16 flex flex-column items-start justify-between w-full">
      <h1 class="text-2xl font-bold">{{$t('main.courses_and_exams.self')}}</h1>
      <div class="flex flex-row w-full justify-around h-1/2 items-start pt-8 ">
        <div class="flex w-5/12 flex-column items-start justify-between" style="background-color:rgba(239, 248, 255, 1); height:200px">
          <h1 class="text-xl pl-2 font-bold pt-6">{{$t('main.courses_and_exams.courses.titles.t_1')}}</h1>
          <p class="text-base pl-2 pb-4">{{$t('main.courses_and_exams.courses.bodies.b_1')}}</p>
        </div>
        <div class="flex w-5/12 flex-column items-start justify-between" style="background-color:rgba(239, 248, 255, 1); height:200px">
          <h1 class="text-xl pl-2 font-bold pt-6">{{$t('main.courses_and_exams.courses.titles.t_2')}}</h1>
          <p class="text-base pl-2 pb-4">{{$t('main.courses_and_exams.courses.bodies.b_2')}}</p>
        </div>
      </div>
      <div class="flex flex-row w-full justify-around h-1/2 items-start pt-8">
        <div class="flex w-5/12 flex-column items-start justify-between" style="background-color:rgba(239, 239, 239, 1); height:200px">
          <h1 class="text-xl pl-2 font-bold pt-6">{{$t('main.courses_and_exams.exams.titles.t_1')}}</h1>
          <p class="text-base pl-2 pb-4">{{$t('main.courses_and_exams.exams.bodies.b_1')}}</p>
        </div>
        <div class="flex w-5/12 flex-column items-start justify-between" style="background-color:rgba(239, 239, 239, 1); height:200px">
          <h1 class="text-xl pl-2 font-bold pt-6">{{$t('main.courses_and_exams.exams.titles.t_2')}}</h1>
          <p class="text-base pl-2 pb-4">{{$t('main.courses_and_exams.exams.bodies.b_2')}}</p>
        </div>
      </div>
      
    </div>
    <div class="border-b py-16 flex flex-row justify-around">
      <img class="w-1/12 h-auto" :src="bannerRow1" />
      <img class="w-1/12 h-auto" :src="bannerRow2" />
      <img class="w-1/12 h-auto" :src="bannerRow3" />
      <img class="w-1/12 h-auto" :src="bannerRow4" />
    </div>
      <client-only>
        <div class="relative py-16 flex flex-row items-center h-1/12">
          <div class="absolute left-14 z-40">
            <button @click.prevent="prevBanner" class="">
              <img :src="bannerArrowLeft" class="w-2/12" style="border-radius: 50%; background-color:rgba(255, 255, 255, 1)" />
            </button>
          </div>
          <carousel class="left-0 w-full" ref="bannerCarousel" :loop="true" :paginationEnabled="false" :navigationEnable="true" :centerMode="true" :autoplay="true" :adjustableHeight="false" :perPage="1" :scrollPerPage="false" :spacePadding="40" >
            
            <slide class="w-1/2 pr-15">
              <img :src="promoBanner1" />
            </slide>
            <slide class="w-1/2">
              <img :src="promoBanner2" />
            </slide>
            <slide class="w-1/2">
              <img :src="promoBanner2" />
            </slide>
            
          
          </carousel>
          <div class="absolute right-14 z-40">
            <button @click.prevent="nextBanner" class="">
              <img :src="bannerArrowRight" class="w-4/12" style="border-radius: 50%; background-color:rgba(255, 255, 255, 1)" />
            </button>
          </div>
        </div>
      </client-only>
    
    
    <div class="flex flex-column items-start">
      <h1 class="pl-30"> {{$t('main.about.our_school')}}</h1>
      <p class=" pl-30 pt-6 pb-16">{{$t('main.about.our_school_expanded')}}</p>
      <client-only class=" pl-30 justify-center h-1/12">
        
        <carousel ref="gallery" class="w-11/12 justify-between" :paginationEnabled="false" :loop="true" :navigationEnabled="false" :autoplay="false" :adjustableHeight="false" :perPage="3" :scrollPerPage="false" :spacePadding="40" >
          <slide class="w-1/2 pr-15">
            <img :src="promoBanner1" />
          </slide>
          <slide class="w-1/2">
            <img :src="promoBanner1" />
          </slide>
          <slide class="w-1/2">
            <img :src="promoBanner1" />
          </slide>
          <slide class="w-1/2">
            <img :src="promoBanner1" />
          </slide>
          <slide class="w-1/2">
            <img :src="promoBanner1" />
          </slide>
          
          
        </carousel>
      </client-only>
    
    
      <div class=" py-3  pl-5 flex flex-row justify-between items-center">
        <nuxt-link :to="localePath('/about/info')">
          <button class="btn rounded-2xl h-fit w-fit" style="background-color:rgba(32, 88, 182, 1)">
            <div class="px-5 py-1 text-white" v-html="$t('menu.about_us.self')"></div>
          </button>
        </nuxt-link>
        <button @click.prevent="nextGalleryImage" class="p-5 py-2">
          <img :src="galleryArrow" />
        </button>
      </div>
      <div class="flex py-16 flex-row justify-between">
        <div class="mx-5 flex flex-column w-5/12">              
          <h1 class=""><div class="" v-html="$t('main.about.location')"> </div></h1>
          <div class="pt-6 pb-16" v-html="$t('main.about.location_expanded')"></div>
        </div>
        <img class="mx-5 w-5/12" :src="locationPhoto" />

      </div>
      <div class="flex flex-column w-full py-5 items-center justify-around rounded-md" style="background-color:rgba(37, 57, 132, 1)">
        <h1 class="w-3/4"><div class=" text-3xl text-white" v-html="$t('main.form_text')"> </div></h1>
        <div class="flex flex-row justify-end items-start w-full">
          <div class="flex flex-column items-center justify-center w-1/4 py-4 mx-1">
            <input @focusout="checkName" class="rounded-md w-full h-full rounded-sm" style="background-color:rgba(255, 255, 255, 0.42);  aspect-ratio:19/5; font-size: x-large;" type="text" v-model="response_name" :placeholder="$t('modals.name')" required>
            <div class="pt-3 font-bold text-red-600 text-xs" v-if="isNameWrong" v-html="$t('modals.required')"></div>
            <div class="pt-3 font-bold text-red-600 text-xs invisible" v-else v-html="$t('modals.required')"></div>
          </div>
          <div class="flex flex-column items-center justify-center w-1/4 h-full py-4 mx-1">
            <input @focusout="checkEmail" type="email" class="rounded-md w-full rounded-sm py-1" style="background-color:rgba(255, 255, 255, 0.42); aspect-ratio:19/5; font-size: x-large;" v-model="response_email" :placeholder="$t('modals.email')" required>
            <div class="pt-3 font-bold text-red-600 text-xs" v-if="isEmailWrong" v-html="$t('modals.required')"></div>
            <div class="pt-3 font-bold text-red-600 text-xs invisible" v-else v-html="$t('modals.required')"></div>
          </div>
          <div class="flex flex-column items-center justify-center w-1/4 py-4 mx-1">
            <input @focusout="checkPhone" type="tel" class="rounded-md w-full h-full text-xl rounded-sm py-1" style="background-color:rgba(255, 255, 255, 0.42);  aspect-ratio:19/5; font-size: x-large;" v-model="response_phone" :placeholder="$t('modals.phone')" required>
            <div class="pt-3 font-bold text-red-600 text-xs" v-if="isPhoneWrong" v-html="$t('modals.required')"></div>
            <div class="pt-3 font-bold text-red-600 text-xs invisible" v-else v-html="$t('modals.required')"></div>
          </div>
          <button @click="checkAllNoTimes" class="rounded-md h-fit my-4 w-1/6 mr-3" style="background-color:rgba(255, 124, 51, 1);  aspect-ratio:10/4; font-size: x-large;">
            <div class="mx-auto text-white py-2" v-html="$t('modals.send')"></div>
          </button>
        </div>
        <h1 class="mx-center"><div class="text-base text-white" v-html="$t('main.form_subtext')"> </div></h1>
      </div>
      <div class="my-16 h-full w-full flex flex-column items-start">
        <client-only class=" w-full h-full pl-30 justify-center">        
          <carousel ref="logoGallery" class="w-11/12 h-full justify-between" :paginationEnabled="false" :loop="true" :navigationEnabled="false" :autoplay="false" :adjustableHeight="false" :perPage="3" :scrollPerPage="false" :spacePadding="40" >
            <slide class="w-full pr-15">
              <img :src="logoGallery1" />
            </slide>
            <slide class="w-full">
              <img :src="logoGallery2" />
            </slide>
            <slide class="w-1/2">
              <img :src="logoGallery3" />
            </slide>
            <slide class="w-1/2">
              <img :src="logoGallery4" />
            </slide>
            <slide class="w-1/2">
              <img :src="logoGallery2" />
            </slide>
            
            
          </carousel>
        </client-only> 
        <button @click.prevent="nextLogoGalleryImage" class="py-2">
          <img :src="galleryArrow" />
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
      <b-modal centered :busy="true" id="modal-1" :title="$t('modals.title')">
        <template #modal-header>
          <div class="mx-auto font-bold" v-html="$t('modals.title')"></div>
        </template>
        <template #modal-footer>
          <div class="mx-auto w-full">
            <div
            @click="checkAll">
              <div class="rounded-xl mx-auto flex flex-column items-center h-fit w-full" style="background-color:rgba(67, 133, 245, 1)">
                <div class="mx-auto text-white py-2" v-html="$t('modals.send')"></div>
              </div>
            </div>
          </div>
        </template> 
        <div class="flex flex-column items-start">
          <div class="pt-3 font-bold" v-html="$t('modals.name_title')"></div>
          <input @focusout="checkName" class="bg-slate-200 w-full rounded-sm py-1" type="text" v-model="response_name" :placeholder="$t('modals.name')" required>
          <div class="pt-3 font-bold text-red-600 text-xs" v-if="isNameWrong" v-html="$t('modals.required')"></div>
          <div class="pt-3 font-bold" v-html="$t('modals.email_title')"></div>
          <input @focusout="checkEmail" type="email" class="bg-slate-200 w-full rounded-sm py-1" v-model="response_email" :placeholder="$t('modals.email')" required>
          <div class="pt-3 font-bold text-red-600 text-xs" v-if="isEmailWrong" v-html="$t('modals.required')"></div>
          <div class="pt-3 font-bold" v-html="$t('modals.phone_title')"></div>
          <input @focusout="checkPhone" type="tel" class="bg-slate-200 w-full rounded-sm py-1" v-model="response_phone" :placeholder="$t('modals.phone')" required>
          <div class="pt-3 font-bold text-red-600 text-xs" v-if="isPhoneWrong" v-html="$t('modals.required')"></div>
          <div class="pt-3 flex flex-row">
              <input @animationend="checkTimes" type="checkbox" :value="$t('modals.mon_wed')" v-model="checkedTimes">
            <div class="pl-3" v-html="$t('modals.mon_wed')"></div>
          </div>
          <div class="pt-2 flex flex-row">
            <input @animationend="checkTimes" type="checkbox" :value="$t('modals.tue_thu')" v-model="checkedTimes">
            <div class="pl-3" v-html="$t('modals.tue_thu')"></div>
          </div>
          <div class="pt-2 flex flex-row">
            <input @animationend="checkTimes" type="checkbox" :value="$t('modals.any_day')" v-model="checkedTimes">
            <div class="pl-3" v-html="$t('modals.any_day')"></div>
          </div>
          <div class="pt-3 font-bold text-red-600 text-xs" v-if="isTimesWrong" v-html="$t('modals.required')"></div>

        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>

import frontpageWelcome from "~/assets/frontpage_welcome.png"
import colorTabsIcon1 from "~/assets/color_tabs_icon_1.svg"
import colorTabsIcon2 from "~/assets/color_tabs_icon_2.svg"
import colorTabsIcon3 from "~/assets/color_tabs_icon_3.svg"
import colorTabsIcon4 from "~/assets/color_tabs_icon_4.svg"
import promoBanner1 from "~/assets/promo_banner_1.png"
import promoBanner2 from "~/assets/promo_banner_2.png"
import oeifLogo from "~/assets/oeif-logo.png"
import galleryArrow from "~/assets/gallery_arrow.svg"
import bannerArrowLeft from "~/assets/banner_arrow_left.png"
import bannerArrowRight from "~/assets/banner_arrow_right.png"
import bannerRow1 from "~/assets/banner_row_1.png"
import bannerRow2 from "~/assets/banner_row_2.png"
import bannerRow3 from "~/assets/banner_row_3.png"
import bannerRow4 from "~/assets/banner_row_4.png"
import logoGallery1 from "~/assets/logo_gallery_1.png"
import logoGallery2 from "~/assets/logo_gallery_2.png"
import logoGallery3 from "~/assets/logo_gallery_3.png"
import logoGallery4 from "~/assets/logo_gallery_4.png"
import locationPhoto from "~/assets/location_photo.png"

export default {
  data: function () {
    return {
      frontpageWelcome: frontpageWelcome,
      oeifLogo: oeifLogo,
      colorTabsIcon1:colorTabsIcon1,
      colorTabsIcon2: colorTabsIcon2,
      colorTabsIcon3: colorTabsIcon3,      
      colorTabsIcon4: colorTabsIcon4,
      promoBanner1: promoBanner1,
      promoBanner2:promoBanner2,
      galleryArrow:galleryArrow,
      bannerArrowLeft: bannerArrowLeft,
      bannerArrowRight: bannerArrowRight,
      bannerRow1: bannerRow1,
      bannerRow2: bannerRow2,
      bannerRow3: bannerRow3,
      bannerRow4: bannerRow4,
      logoGallery1: logoGallery1,
      logoGallery2: logoGallery2,
      logoGallery3: logoGallery3,
      logoGallery4: logoGallery4,
      locationPhoto: locationPhoto,
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

<style>
.VueCarousel-navigation-button {
                position: relative;
}
.VueCarousel-navigation-next {
                position: relative;
}

.text-block {
    white-space: pre-line;
}
</style>