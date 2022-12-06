<template>
  <div class="flex flex-column pb-5">
    
      <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-ignore-global-margins' : 'ignore-global-margins', 'relative flex h-fit']">   
        <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-welcome-content mobile-welcome-content-background w-full pl-3' : 'welcome-content', 'absolute flex flex-column']">       
          <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive ml-5 font-bold' : 'welcome-text font-extrabold', 'h-fit text-white']" v-html="$t('courses.italian.image_title')"></div>
          <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-welcome-text-responsive ml-5' : 'welcome-subtext font-bold', 'mb-4 text-white']" v-html="$t('courses.italian.image_subtitle')"></div>
          <button type="button" :class="[this.$store.getters['getIsMobile'] ? 'mobile-button mobile-welcome-button-margin' : '', 'btn rounded-2xl h-fit w-fit']" style="background-color:rgba(255, 124, 51, 1);" @click="$bvModal.show('modal-1')" >
            <div :class="[this.$store.getters['getIsMobile'] ? 'mx-auto mobile-button-text' : 'button-text', 'text-white']" v-html="$t('exams.oif.register')"></div>
          </button>
        </div>
        <nuxt-img
        :class="[this.$store.getters['getIsMobile'] ? 'mobile-welcome-image' : 'w-full h-3/4']" 
        :src="this.$store.getters['getIsMobile'] ? '/italian_courses_welcome.png' : '/italian_courses_welcome.png'"
        format="webp"
  alt="Welcome to italian courses!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>         
    </div>      
    
      <div class="flex flex-row mx-auto items-start justify-between w-full course-card">
        <div class="flex flex-column justify-around" style="padding-top:5%; padding-bottom: 3%;">
          <div class="flex flex-row items-center">          
            <h1 :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'course-card-h1', 'font-bold pl-5']">{{$t('courses.english.cards.1.title')}}</h1>
            <div class="offline-tag" v-if="$t('courses.english.cards.1.is_offline')=='true'">Offline</div>
            <div class="online-tag" v-if="$t('courses.english.cards.1.is_online')=='true'">Online</div>
          </div>
          <ul :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : '', 'font-bold pl-5']">
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive font-normal pl-3' : 'course-card-li', 'py-1']" v-html="$t('courses.english.cards.1.1')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive font-normal pl-3' : 'course-card-li', 'py-1']" v-html="$t('courses.english.cards.1.2')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive font-normal pl-3' : 'course-card-li', 'py-1']" v-html="$t('courses.english.cards.1.3')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive font-normal pl-3' : 'course-card-li', 'py-1']" v-html="$t('courses.english.cards.1.4')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive font-normal pl-3' : 'course-card-li', 'py-1']" v-html="$t('courses.english.cards.1.5')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive font-normal pl-3' : 'course-card-li', 'py-1']" v-html="$t('courses.english.cards.1.6')"></li>
          </ul>
        </div>
        <div  :class="[this.$store.getters['getIsMobile'] ? 'mobile-card-right-column w-1/3' : 'card-right-column', 'flex flex-column h-full border-l-2']">
          <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-week-number' : 'week-number',]">4 {{$t('courses.weeks')}}</p>
          <div class="flex flex-row items-end">
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-price-tag' : 'price-tag', 'text-blue-600 font-bold']">{{$t('courses.english.cards.1.price_1')}}</p>
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-price-tag-comment' : 'price-tag-comment',]">{{$t('courses.english.cards.1.comment_price_1')}}</p>
            
          </div>
          <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-week-number' : 'week-number',]" style="padding-top:10%">8 {{$t('courses.weeks')}}</p>
          <div class="flex flex-row items-end">
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-price-tag' : 'price-tag', 'text-blue-600 font-bold']">{{$t('courses.english.cards.1.price_2')}}</p>
            
          </div>
          <button :class="[this.$store.getters['getIsMobile'] ? 'w-full py-1' : 'h-fit w-fit', 'btn rounded-lg']" type="button"  style="background-color:rgba(255, 124, 51, 1); margin-top:10%;" @click="$bvModal.show('modal-courses')" >
            <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'button-text', 'text-white']"  v-html="$t('exams.oif.register')"></div>
          </button>
        </div>
      </div>
      <div class="flex flex-row mx-auto items-start justify-between w-full course-card">
        <div class="flex flex-column justify-around" style="padding-top:5%; padding-bottom: 3%;">
          <div class="flex flex-row items-center">          
            <h1 :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'course-card-h1', 'font-bold pl-5']">{{$t('courses.english.cards.2.title')}}</h1>
            <div class="offline-tag" v-if="$t('courses.english.cards.2.is_offline')=='true'">Offline</div>
            <div class="online-tag" v-if="$t('courses.english.cards.2.is_online')=='true'">Online</div>
          </div>
          <ul :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : '', 'font-bold pl-5']">
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive font-normal pl-3' : 'course-card-li', 'py-1']" v-html="$t('courses.english.cards.2.1')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive font-normal pl-3' : 'course-card-li', 'py-1']" v-html="$t('courses.english.cards.2.2')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive font-normal pl-3' : 'course-card-li', 'py-1']" v-html="$t('courses.english.cards.2.3')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive font-normal pl-3' : 'course-card-li', 'py-1']" v-html="$t('courses.english.cards.2.4')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive font-normal pl-3' : 'course-card-li', 'py-1']" v-html="$t('courses.english.cards.2.5')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive font-normal pl-3' : 'course-card-li', 'py-1']" v-html="$t('courses.english.cards.2.6')"></li>
          </ul>
        </div>
        <div  :class="[this.$store.getters['getIsMobile'] ? 'mobile-card-right-column w-1/3' : 'card-right-column', 'flex flex-column h-full border-l-2']">
          <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-week-number' : 'week-number',]">4 {{$t('courses.weeks')}}</p>
          <div class="flex flex-row items-end">
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-price-tag' : 'price-tag', 'text-blue-600 font-bold']">{{$t('courses.english.cards.2.price_1')}}</p>
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-price-tag-comment' : 'price-tag-comment',]">{{$t('courses.english.cards.2.comment_price_1')}}</p>
            
          </div>
          <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-week-number' : 'week-number',]" style="padding-top:10%">8 {{$t('courses.weeks')}}</p>
          <div class="flex flex-row items-end">
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-price-tag' : 'price-tag', 'text-blue-600 font-bold']">{{$t('courses.english.cards.2.price_2')}}</p>
            
          </div>
          <button :class="[this.$store.getters['getIsMobile'] ? 'w-full py-1' : 'h-fit w-fit', 'btn rounded-lg']" type="button"  style="background-color:rgba(255, 124, 51, 1); margin-top:10%;" @click="$bvModal.show('modal-courses')" >
            <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'button-text', 'text-white']"  v-html="$t('exams.oif.register')"></div>
          </button>
        </div>
      </div>
      <div class="flex flex-row mx-auto items-start justify-between w-full course-card">
        <div class="flex flex-column justify-around" style="padding-top:5%; padding-bottom: 3%;">
          <div class="flex flex-row items-center">          
            <h1 :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'course-card-h1', 'font-bold pl-5']">{{$t('courses.english.cards.3.title')}}</h1>
            <div class="offline-tag" v-if="$t('courses.english.cards.3.is_offline')=='true'">Offline</div>
            <div class="online-tag" v-if="$t('courses.english.cards.3.is_online')=='true'">Online</div>
          </div>
          <ul :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : '', 'font-bold pl-5']">
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive font-normal pl-3' : 'course-card-li', 'py-1']" v-html="$t('courses.english.cards.3.1')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive font-normal pl-3' : 'course-card-li', 'py-1']" v-html="$t('courses.english.cards.3.2')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive font-normal pl-3' : 'course-card-li', 'py-1']" v-html="$t('courses.english.cards.3.3')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive font-normal pl-3' : 'course-card-li', 'py-1']" v-html="$t('courses.english.cards.3.4')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive font-normal pl-3' : 'course-card-li', 'py-1']" v-html="$t('courses.english.cards.3.5')"></li>
            <li :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-sm-responsive font-normal pl-3' : 'course-card-li', 'py-1']" v-html="$t('courses.english.cards.3.6')"></li>
          </ul>
        </div>
        <div  :class="[this.$store.getters['getIsMobile'] ? 'mobile-card-right-column w-1/3' : 'card-right-column', 'flex flex-column h-full border-l-2']">
          <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-week-number' : 'week-number',]">4 {{$t('courses.weeks')}}</p>
          <div class="flex flex-row items-end">
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-price-tag' : 'price-tag', 'text-blue-600 font-bold']">{{$t('courses.english.cards.3.price_1')}}</p>
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-price-tag-comment' : 'price-tag-comment',]">{{$t('courses.english.cards.3.comment_price_1')}}</p>
            
          </div>
          <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-week-number' : 'week-number',]" style="padding-top:10%">8 {{$t('courses.weeks')}}</p>
          <div class="flex flex-row items-end">
            <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-price-tag' : 'price-tag', 'text-blue-600 font-bold']">{{$t('courses.english.cards.3.price_2')}}</p>
            
          </div>
          <button :class="[this.$store.getters['getIsMobile'] ? 'w-full py-1' : 'h-fit w-fit', 'btn rounded-lg']" type="button"  style="background-color:rgba(255, 124, 51, 1); margin-top:10%;" @click="$bvModal.show('modal-courses')" >
            <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'button-text', 'text-white']"  v-html="$t('exams.oif.register')"></div>
          </button>
        </div>
      </div>
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
</style>
<script>

//import italianCoursesWelcome from "/italian_courses_welcome.png"

export default {
  head() {
        return {
    title: this.$t('meta.courses.italian.title'),
    
    htmlAttrs: {
      lang: this.$i18n.locale
    },
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.$t('meta.courses.italian.description')
          }
        ],
        };
      },
  data: function () {
    return {
      //italianCoursesWelcome: italianCoursesWelcome,
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