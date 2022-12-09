<template>
  <div class="flex flex-column pb-5">
    
      <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-ignore-global-margins' : 'ignore-global-margins', 'relative flex h-fit']">   
        <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-welcome-content mobile-welcome-content-background w-full pl-3' : 'welcome-content', 'absolute flex flex-column']">       
          <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive ml-5 font-bold' : 'welcome-text font-extrabold', 'h-fit text-black']" v-html="$t('courses.german.image_title')"></div>
          <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-welcome-text-responsive ml-5' : 'welcome-subtext font-bold', 'mb-4 text-black']" v-html="$t('courses.german.image_subtitle')"></div>
          <button type="button" :class="[this.$store.getters['getIsMobile'] ? 'mobile-button mobile-welcome-button-margin' : '', 'btn rounded-2xl h-fit w-fit']" style="background-color:rgba(255, 124, 51, 1);" @click="$bvModal.show('modal-1')" >
            <div :class="[this.$store.getters['getIsMobile'] ? 'mx-auto mobile-button-text' : 'button-text', 'text-white']" v-html="$t('exams.oif.register')"></div>
          </button>
        </div>
        <nuxt-img
        :class="[this.$store.getters['getIsMobile'] ? 'mobile-welcome-image' : 'w-full h-3/4']"
        :src="this.$store.getters['getIsMobile'] ? '/german_courses_welcome.png' : '/german_courses_welcome.png'"
        format="webp"
  alt="Welcome to german courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>         
    </div>      
      
      <b-tabs active-nav-item-class="active-course-tab" :small="false"  class="border-b-2 w-full pt-7 " fill content-class="mt-3">
        <b-tab style="" :title="$t('courses.german.tabs.1')" active :title-item-class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'course-tabs']">
          <div class="flex flex-row mx-auto items-start justify-between w-full course-card">
        <div class="flex flex-column justify-around" style="padding-top:5%; padding-bottom: 3%;">
          <div class="flex flex-row items-center">          
            <h1 :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'course-card-h1', 'font-bold pl-5']">{{$t('courses.german.cards.1.title')}}</h1>
            <div class="offline-tag" v-if="$t('courses.german.cards.1.is_offline')=='true'">Offline</div>
            <div class="online-tag" v-if="$t('courses.german.cards.1.is_online')=='true'">Online</div>
          </div>
          <ul :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : '', 'font-bold pl-5']">
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.1.1')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.1.2')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.1.3')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.1.4')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.1.5')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.1.6')"></li>
          </ul>
        </div>
        <div  :class="[this.$store.getters['getIsMobile'] ? 'mobile-card-right-column w-1/3' : 'card-right-column', 'flex flex-column h-full border-l-2']">
          <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-week-number' : 'week-number',]">4 {{$t('courses.weeks')}}</p>
          <div class="flex flex-row items-end">
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-price-tag' : 'price-tag', 'text-blue-600 font-bold']">{{$t('courses.german.cards.1.price_1')}}</p>
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-price-tag-comment' : 'price-tag-comment',]">{{$t('courses.german.cards.1.comment_price_1')}}</p>
            
          </div>
          <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-week-number' : 'week-number',]" style="padding-top:10%">8 {{$t('courses.weeks')}}</p>
          <div class="flex flex-row items-end">
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-price-tag' : 'price-tag', 'text-blue-600 font-bold']">{{$t('courses.german.cards.1.price_2')}}</p>
            
          </div>
          <button :class="[this.$store.getters['getIsMobile'] ? 'w-full py-1' : 'h-fit w-fit', 'btn rounded-lg']" type="button"  style="background-color:rgba(255, 124, 51, 1); margin-top:10%;" @click="$bvModal.show('modal-courses')" >
            <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'button-text', 'text-white']"  v-html="$t('exams.oif.register')"></div>
          </button>
        </div>
    </div>
      <div class="flex flex-row mx-auto items-start justify-between w-full course-card">
        <div class="flex flex-column justify-around" style="padding-top:5%; padding-bottom: 3%;">
          <div class="flex flex-row items-center">          
            <h1 :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'course-card-h1', 'font-bold pl-5']">{{$t('courses.german.cards.2.title')}}</h1>
            <div class="offline-tag" v-if="$t('courses.german.cards.2.is_offline')=='true'">Offline</div>
            <div class="online-tag" v-if="$t('courses.german.cards.2.is_online')=='true'">Online</div>
          </div>
          <ul :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : '', 'font-bold pl-5']">
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.2.1')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.2.2')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.2.3')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.2.4')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.2.5')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.2.6')"></li>
          </ul>
        </div>
        <div  :class="[this.$store.getters['getIsMobile'] ? 'mobile-card-right-column w-1/3' : 'card-right-column', 'flex flex-column h-full border-l-2']">
          <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-week-number' : 'week-number',]">4 {{$t('courses.weeks')}}</p>
          <div class="flex flex-row items-end">
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-price-tag' : 'price-tag', 'text-blue-600 font-bold']">{{$t('courses.german.cards.2.price_1')}}</p>
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-price-tag-comment' : 'price-tag-comment',]">{{$t('courses.german.cards.2.comment_price_1')}}</p>
            
          </div>
          <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-week-number' : 'week-number',]" style="padding-top:10%">8 {{$t('courses.weeks')}}</p>
          <div class="flex flex-row items-end">
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-price-tag' : 'price-tag', 'text-blue-600 font-bold']">{{$t('courses.german.cards.2.price_2')}}</p>
            
          </div>
          <button :class="[this.$store.getters['getIsMobile'] ? 'w-full py-1' : 'h-fit w-fit', 'btn rounded-lg']" type="button"  style="background-color:rgba(255, 124, 51, 1); margin-top:10%;" @click="$bvModal.show('modal-courses')" >
            <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'button-text', 'text-white']"  v-html="$t('exams.oif.register')"></div>
          </button>
        </div>
    </div>
        </b-tab>
        <b-tab :title="$t('courses.german.tabs.2')" :title-item-class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'course-tabs']">
          <div class="flex flex-row mx-auto items-start justify-between w-full course-card">
        <div class="flex flex-column justify-around" style="padding-top:5%; padding-bottom: 3%;">
          <div class="flex flex-row items-center">          
            <h1 :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'course-card-h1', 'font-bold pl-5']">{{$t('courses.german.cards.3.title')}}</h1>
            <div class="offline-tag" v-if="$t('courses.german.cards.3.is_offline')=='true'">Offline</div>
            <div class="online-tag" v-if="$t('courses.german.cards.3.is_online')=='true'">Online</div>
          </div>
          <ul :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : '', 'font-bold pl-5']">
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.3.1')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.3.2')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.3.3')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.3.4')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.3.5')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.3.6')"></li>
          </ul>
        </div>
        <div  :class="[this.$store.getters['getIsMobile'] ? 'mobile-card-right-column w-1/3' : 'card-right-column', 'flex flex-column h-full border-l-2']">
          <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-week-number' : 'week-number',]">4 {{$t('courses.weeks')}}</p>
          <div class="flex flex-row items-end">
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-price-tag' : 'price-tag', 'text-blue-600 font-bold']">{{$t('courses.german.cards.3.price_1')}}</p>
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-price-tag-comment' : 'price-tag-comment',]">{{$t('courses.german.cards.3.comment_price_1')}}</p>
            
          </div>
          <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-week-number' : 'week-number',]" style="padding-top:10%">8 {{$t('courses.weeks')}}</p>
          <div class="flex flex-row items-end">
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-price-tag' : 'price-tag', 'text-blue-600 font-bold']">{{$t('courses.german.cards.3.price_2')}}</p>
            
          </div>
          <button :class="[this.$store.getters['getIsMobile'] ? 'w-full py-1' : 'h-fit w-fit', 'btn rounded-lg']" type="button"  style="background-color:rgba(255, 124, 51, 1); margin-top:10%;" @click="$bvModal.show('modal-courses')" >
            <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'button-text', 'text-white']"  v-html="$t('exams.oif.register')"></div>
          </button>
        </div>
      </div>   
      <div class="flex flex-row mx-auto items-start justify-between w-full course-card">
        <div class="flex flex-column justify-around" style="padding-top:5%; padding-bottom: 3%;">
          <div class="flex flex-row items-center">          
            <h1 :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'course-card-h1', 'font-bold pl-5']">{{$t('courses.german.cards.4.title')}}</h1>
            <div class="offline-tag" v-if="$t('courses.german.cards.4.is_offline')=='true'">Offline</div>
            <div class="online-tag" v-if="$t('courses.german.cards.4.is_online')=='true'">Online</div>
          </div>
          <ul :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : '', 'font-bold pl-5']">
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.4.1')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.4.2')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.4.3')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.4.4')"></li>
          </ul>
        </div>
        <div  :class="[this.$store.getters['getIsMobile'] ? 'mobile-card-right-column w-1/3' : 'card-right-column', 'flex flex-column h-full border-l-2']">
          <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-week-number' : 'week-number',]">4 {{$t('courses.weeks')}}</p>
          <div class="flex flex-row items-end">
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-price-tag' : 'price-tag', 'text-blue-600 font-bold']">{{$t('courses.german.cards.4.price_1')}}</p>
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-price-tag-comment' : 'price-tag-comment',]">{{$t('courses.german.cards.4.comment_price_1')}}</p>
            
          </div>
          <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-week-number' : 'week-number',]" style="padding-top:10%">8 {{$t('courses.weeks')}}</p>
          <div class="flex flex-row items-end">
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-price-tag' : 'price-tag', 'text-blue-600 font-bold']">{{$t('courses.german.cards.4.price_2')}}</p>
            
          </div>
          <button :class="[this.$store.getters['getIsMobile'] ? 'w-full py-1' : 'h-fit w-fit', 'btn rounded-lg']" type="button"  style="background-color:rgba(255, 124, 51, 1); margin-top:10%;" @click="$bvModal.show('modal-courses')" >
            <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'button-text', 'text-white']"  v-html="$t('exams.oif.register')"></div>
          </button>
        </div>
    </div>
        </b-tab>
        <b-tab :title="$t('courses.german.tabs.3')" :title-item-class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'course-tabs']">
          <div class="flex flex-row mx-auto items-start justify-between w-full course-card">
        <div class="flex flex-column justify-around" style="padding-top:5%; padding-bottom: 3%;">
          <div class="flex flex-row items-center">          
            <h1 :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'course-card-h1', 'font-bold pl-5']">{{$t('courses.german.cards.1.title')}}</h1>
            <div class="offline-tag" v-if="$t('courses.german.cards.1.is_offline')=='true'">Offline</div>
            <div class="online-tag" v-if="$t('courses.german.cards.1.is_online')=='true'">Online</div>
          </div>
          <ul :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : '', 'font-bold pl-5']">
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.1.1')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.1.2')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.1.3')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.1.4')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.1.5')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.1.6')"></li>
          </ul>
        </div>
        <div  :class="[this.$store.getters['getIsMobile'] ? 'mobile-card-right-column w-1/3' : 'card-right-column', 'flex flex-column h-full border-l-2']">
          <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-week-number' : 'week-number',]">4 {{$t('courses.weeks')}}</p>
          <div class="flex flex-row items-end">
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-price-tag' : 'price-tag', 'text-blue-600 font-bold']">{{$t('courses.german.cards.1.price_1')}}</p>
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-price-tag-comment' : 'price-tag-comment',]">{{$t('courses.german.cards.1.comment_price_1')}}</p>
            
          </div>
          <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-week-number' : 'week-number',]" style="padding-top:10%">8 {{$t('courses.weeks')}}</p>
          <div class="flex flex-row items-end">
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-price-tag' : 'price-tag', 'text-blue-600 font-bold']">{{$t('courses.german.cards.1.price_2')}}</p>
            
          </div>
          <button :class="[this.$store.getters['getIsMobile'] ? 'w-full py-1' : 'h-fit w-fit', 'btn rounded-lg']" type="button"  style="background-color:rgba(255, 124, 51, 1); margin-top:10%;" @click="$bvModal.show('modal-courses')" >
            <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'button-text', 'text-white']"  v-html="$t('exams.oif.register')"></div>
          </button>
        </div>
    </div>
    <div class="flex flex-row mx-auto items-start justify-between w-full course-card">
        <div class="flex flex-column justify-around" style="padding-top:5%; padding-bottom: 3%;">
          <div class="flex flex-row items-center">          
            <h1 :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'course-card-h1', 'font-bold pl-5']">{{$t('courses.german.cards.5.title')}}</h1>
            <div class="offline-tag" v-if="$t('courses.german.cards.5.is_offline')=='true'">Offline</div>
            <div class="online-tag" v-if="$t('courses.german.cards.5.is_online')=='true'">Online</div>
          </div>
          <ul :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : '', 'font-bold pl-5']">
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.5.1')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.5.2')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.5.3')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.5.4')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.5.5')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.5.6')"></li>
          </ul>
        </div>
        <div  :class="[this.$store.getters['getIsMobile'] ? 'mobile-card-right-column w-1/3' : 'card-right-column', 'flex flex-column h-full border-l-2']">
          <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-week-number' : 'week-number',]">4 {{$t('courses.weeks')}}</p>
          <div class="flex flex-row items-end">
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-price-tag' : 'price-tag', 'text-blue-600 font-bold']">{{$t('courses.german.cards.5.price_1')}}</p>
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-price-tag-comment' : 'price-tag-comment',]">{{$t('courses.german.cards.5.comment_price_1')}}</p>
            
          </div>
          <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-week-number' : 'week-number',]" style="padding-top:10%">8 {{$t('courses.weeks')}}</p>
          <div class="flex flex-row items-end">
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-price-tag' : 'price-tag', 'text-blue-600 font-bold']">{{$t('courses.german.cards.5.price_2')}}</p>
            
          </div>
          <button :class="[this.$store.getters['getIsMobile'] ? 'w-full py-1' : 'h-fit w-fit', 'btn rounded-lg']" type="button"  style="background-color:rgba(255, 124, 51, 1); margin-top:10%;" @click="$bvModal.show('modal-courses')" >
            <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'button-text', 'text-white']"  v-html="$t('exams.oif.register')"></div>
          </button>
        </div>
    </div>
        </b-tab>
        <b-tab :title="$t('courses.german.tabs.4')" :title-item-class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'course-tabs']">
          <div class="flex flex-row mx-auto items-start justify-between w-full course-card">
        <div class="flex flex-column justify-around" style="padding-top:5%; padding-bottom: 3%;">
          <div class="flex flex-row items-center">          
            <h1 :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'course-card-h1', 'font-bold pl-5']">{{$t('courses.german.cards.6.title')}}</h1>
            <div class="offline-tag" v-if="$t('courses.german.cards.6.is_offline')=='true'">Offline</div>
            <div class="online-tag" v-if="$t('courses.german.cards.6.is_online')=='true'">Online</div>
          </div>
          <ul :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : '', 'font-bold pl-5']">
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.6.1')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.6.2')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.6.3')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.6.4')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.6.5')"></li>
          </ul>
        </div>
        <div  :class="[this.$store.getters['getIsMobile'] ? 'mobile-card-right-column w-1/3' : 'card-right-column', 'flex flex-column h-full border-l-2']">
          <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-week-number' : 'week-number',]">4 {{$t('courses.weeks')}}</p>
          <div class="flex flex-row items-end">
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-price-tag' : 'price-tag', 'text-blue-600 font-bold']">{{$t('courses.german.cards.6.price_1')}}</p>
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-price-tag-comment' : 'price-tag-comment',]">{{$t('courses.german.cards.6.comment_price_1')}}</p>
            
          </div>
          <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-week-number' : 'week-number',]" style="padding-top:10%">8 {{$t('courses.weeks')}}</p>
          <div class="flex flex-row items-end">
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-price-tag' : 'price-tag', 'text-blue-600 font-bold']">{{$t('courses.german.cards.6.price_2')}}</p>
            
          </div>
          <button :class="[this.$store.getters['getIsMobile'] ? 'w-full py-1' : 'h-fit w-fit', 'btn rounded-lg']" type="button"  style="background-color:rgba(255, 124, 51, 1); margin-top:10%;" @click="$bvModal.show('modal-courses')" >
            <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'button-text', 'text-white']"  v-html="$t('exams.oif.register')"></div>
          </button>
        </div>
    </div>
        </b-tab>
        <b-tab :title="$t('courses.german.tabs.5')" :title-item-class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'course-tabs']">
          <div class="flex flex-row mx-auto items-start justify-between w-full course-card">
        <div class="flex flex-column justify-around" style="padding-top:5%; padding-bottom: 3%;">
          <div class="flex flex-row items-center">          
            <h1 :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'course-card-h1', 'font-bold pl-5']">{{$t('courses.german.cards.7.title')}}</h1>
            <div class="offline-tag" v-if="$t('courses.german.cards.7.is_offline')=='true'">Offline</div>
            <div class="online-tag" v-if="$t('courses.german.cards.7.is_online')=='true'">Online</div>
          </div>
          <ul :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : '', 'font-bold pl-5']">
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.7.1')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.7.2')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.7.3')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.7.4')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.7.5')"></li>
          </ul>
        </div>
        <div  :class="[this.$store.getters['getIsMobile'] ? 'mobile-card-right-column w-1/3' : 'card-right-column', 'flex flex-column h-full border-l-2']">
          <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-week-number' : 'week-number',]">4 {{$t('courses.weeks')}}</p>
          <div class="flex flex-row items-end">
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-price-tag' : 'price-tag', 'text-blue-600 font-bold']">{{$t('courses.german.cards.7.price_1')}}</p>
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-price-tag-comment' : 'price-tag-comment',]"></p>
            
          </div>
          <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-week-number' : 'week-number',]" style="padding-top:10%">8 {{$t('courses.weeks')}}</p>
          <div class="flex flex-row items-end">
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-price-tag' : 'price-tag', 'text-blue-600 font-bold']">{{$t('courses.german.cards.7.price_2')}}</p>
            
          </div>
          <button :class="[this.$store.getters['getIsMobile'] ? 'w-full py-1' : 'h-fit w-fit', 'btn rounded-lg']" type="button"  style="background-color:rgba(255, 124, 51, 1); margin-top:10%;" @click="$bvModal.show('modal-courses')" >
            <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'button-text', 'text-white']"  v-html="$t('exams.oif.register')"></div>
          </button>
        </div>
    </div>
    <div class="flex flex-row mx-auto items-start justify-between w-full course-card">
        <div class="flex flex-column justify-around" style="padding-top:5%; padding-bottom: 3%;">
          <div class="flex flex-row items-center">          
            <h1 :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'course-card-h1', 'font-bold pl-5']">{{$t('courses.german.cards.8.title')}}</h1>
            <div class="offline-tag" v-if="$t('courses.german.cards.8.is_offline')=='true'">Offline</div>
            <div class="online-tag" v-if="$t('courses.german.cards.8.is_online')=='true'">Online</div>
          </div>
          <ul :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : '', 'font-bold pl-5']">
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.8.1')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.8.2')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.8.3')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.8.4')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.8.5')"></li>
          </ul>
        </div>
        <div  :class="[this.$store.getters['getIsMobile'] ? 'mobile-card-right-column w-1/3' : 'card-right-column', 'flex flex-column h-full border-l-2']">
          <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-week-number' : 'week-number',]">4 {{$t('courses.weeks')}}</p>
          <div class="flex flex-row items-end">
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-price-tag' : 'price-tag', 'text-blue-600 font-bold']">{{$t('courses.german.cards.8.price_1')}}</p>
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-price-tag-comment' : 'price-tag-comment',]">{{$t('courses.german.cards.8.comment_price_1')}}</p>
            
          </div>
          <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-week-number' : 'week-number',]" style="padding-top:10%">8 {{$t('courses.weeks')}}</p>
          <div class="flex flex-row items-end">
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-price-tag' : 'price-tag', 'text-blue-600 font-bold']">{{$t('courses.german.cards.8.price_2')}}</p>
            
          </div>
          <button :class="[this.$store.getters['getIsMobile'] ? 'w-full py-1' : 'h-fit w-fit', 'btn rounded-lg']" type="button"  style="background-color:rgba(255, 124, 51, 1); margin-top:10%;" @click="$bvModal.show('modal-courses')" >
            <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'button-text', 'text-white']"  v-html="$t('exams.oif.register')"></div>
          </button>
        </div>
    </div>
        </b-tab>
        <b-tab :title="$t('courses.german.tabs.6')" :title-item-class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'course-tabs']">
          <div class="flex flex-row mx-auto items-start justify-between w-full course-card">
        <div class="flex flex-column justify-around" style="padding-top:5%; padding-bottom: 3%;">
          <div class="flex flex-row items-center">          
            <h1 :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'course-card-h1', 'font-bold pl-5']">{{$t('courses.german.cards.9.title')}}</h1>
            <div class="offline-tag" v-if="$t('courses.german.cards.9.is_offline')=='true'">Offline</div>
            <div class="online-tag" v-if="$t('courses.german.cards.9.is_online')=='true'">Online</div>
          </div>
          <ul :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : '', 'font-bold pl-5']">
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.9.1')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.9.2')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive pl-3 font-normal' : 'course-card-li', 'py-1']" v-html="$t('courses.german.cards.9.3')"></li>
          </ul>
        </div>
        <div  :class="[this.$store.getters['getIsMobile'] ? 'mobile-card-right-column w-1/3' : 'card-right-column', 'flex flex-column h-full border-l-2']">
          <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-week-number' : 'week-number',]">4 {{$t('courses.weeks')}}</p>
          <div class="flex flex-row items-end">
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-price-tag' : 'price-tag', 'text-blue-600 font-bold']">{{$t('courses.german.cards.9.price_1')}}</p>
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-price-tag-comment' : 'price-tag-comment',]"></p>
            
          </div>
          <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-week-number' : 'week-number',]" style="padding-top:10%">8 {{$t('courses.weeks')}}</p>
          <div class="flex flex-row items-end">
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-price-tag' : 'price-tag', 'text-blue-600 font-bold']">{{$t('courses.german.cards.9.price_2')}}</p>
            
          </div>
          <button :class="[this.$store.getters['getIsMobile'] ? 'w-full py-1' : 'h-fit w-fit', 'btn rounded-lg']" type="button"  style="background-color:rgba(255, 124, 51, 1); margin-top:10%;" @click="$bvModal.show('modal-courses')" >
            <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'button-text', 'text-white']"  v-html="$t('exams.oif.register')"></div>
          </button>
        </div>
    </div>
        </b-tab>
        <b-tab :title="$t('courses.german.tabs.7')" :title-item-class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'course-tabs']">
          no courses yet
        </b-tab>
      </b-tabs>      
      <div>
      
      <ModalForm index="modal-1" />
      <ModalFormCourses index="modal-courses" />
    </div>
  </div>
</template>

<style scoped>
.bg-slate-200{
    background-color: rgba(244, 244, 244, 1);
  }
  .welcome-text{
    font-size: calc(6px + 2.450625vw);
  }
.welcome-subtext{
  font-size: calc(2px + 1.150625vw);
}
.mobile-welcome-image{
    height:24vh;
    width:auto;
  }
  
  .mobile-welcome-text-responsive{
    font-size: calc(3px + 2.60625vw);
  }
  
  ul {
    list-style: none;
  }

  ul li:before {
    content: '✓ ';
  }
  
  .welcome-content{
    margin-left:21%; margin-top:20%
}
 .mobile-welcome-image{
    height:24vh;
    width:auto;
  }
  .nav-link.active.tab-active-class {
  background-color: red;
}

</style>
<script>

//import germanCoursesWelcome from "/german_courses_welcome.png"

export default {
  head() {
        return {
    title: this.$t('meta.courses.german.title'),
    
    htmlAttrs: {
      lang: this.$i18n.locale
    },
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.$t('meta.courses.german.description')
          }
        ],
        };
      },
  data: function () {
    return {
      //germanCoursesWelcome: germanCoursesWelcome,
      showModal: false,
      isNameWrong: false,
      isPhoneWrong: false,
      isEmailWrong: false,
      isTimesWrong: false,
      checkedTimes:[],
      response_name: "",
      response_email: null,
      response_phone: null
    
    }
  },
}
</script>